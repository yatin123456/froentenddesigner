
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Banner from '../../pagebanner/Banner';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios'

function Update() {
    const [data, setData] = useState([]);
    const [id, setId] = useState(0);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [point, setPoint] = useState("");
    const [position, setPosition] = useState("");
    const [stack, setStack] = useState("");
    const [file, setFile] = useState();
    const [pool, setPool] = useState("")
    const [percentage, setPercentage] = useState();
    const [options, setOptions] = useState([]);
    const [stackmin, setMinLimit] = useState([0]);
    const [stackmax, setMaxLimit] = useState([0]);
    const [stackmain, setMainLimit] = useState([]);

    const handleCheckboxChange = (event) => {
        setPercentage(event.target.value);
    };
    console.log('datasasa', stackmin)
    console.log('datasasa', stackmax)
    const navigate = useNavigate();
    function handleChange(e) {
        setFile(URL.createObjectURL(e.target.files[0]));
    }
    useEffect(() => {
        setId(localStorage.getItem("id"));
        setName(localStorage.getItem("name"));
        setEmail(localStorage.getItem("email"));
        setPoint(localStorage.getItem("point"));
        setPosition(localStorage.getItem("position"));
        setFile(localStorage.getItem("file"));
        // setPool(localStorage.getItem("pool"));
        setStack(localStorage.getItem("stack"));
        setPercentage(localStorage.getItem("percentage"));

        fetch('https://66cea862901aab24841f1914.mockapi.io/Poollist')
            .then(response => response.json())
            .then(data => {
                setData(data);
                const item = data;
                const namesArray = data.map(item => item.symbol);
                const stacklimit = data.find(item => item.symbol === pool && item.minstack !== undefined);
                if (stacklimit) {
                    setMinLimit(stacklimit.minstack);
                    setMaxLimit(stacklimit.maxstack);
                }
                setOptions(namesArray);
                setMainLimit(stacklimit);

            })
    }, [pool]);


    const handleUpdate = (e) => {
        e.preventDefault();
        axios.put(`https://667eaaa0f2cb59c38dc69de2.mockapi.io/finaldata/${id}`,
            {
                name: name, email: email, point: point, position: position, file: file, pool: pool, stack: stack, percentage: percentage
            },

        )
        // axios.put(`https://667eaaa0f2cb59c38dc69de2.mockapi.io/mycrudeapp/${id}`,
        //     {
        //         point: point, stack: stack, pool: pool, percentage: percentage
        //     },)
            .then(() => {
                navigate("/read")
            })
        toast.success('Updated suscessfully');

    }
    return (
        <> <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
        />
            <Banner heading="Update User Form" coheading="Form" />
            <div className='container mx-auto my-10'>
                <Link to="/read"><button className="btn bg-cyan-600 py-1 px-4 rounded-full font-light text-white flex place-items-center  ">Go Back</button></Link>
                <form className='text-start'>

                    <div className='grid grid-rows-1  md:grid-cols-1  gap-2'>
                        <div>
                            <div className=' sm:flex'>
                                <div className='sm:pe-2 sm:w-1/2'>
                                    <label className='block text-white pt-4 pb-1'>Name</label>
                                    <input value={name} onChange={(e) => setName(e.target.value)} type='name' id='name' name='name' className='bg-zinc-800 border border-zinc-700 px-2 py-1 rounded w-full text-white' />
                                </div>
                                <div className='sm:w-1/2'>
                                    <label className='block text-white pt-4 pb-1'>Email</label>
                                    <input value={email} onChange={(e) => setEmail(e.target.value)} type='email' id='email' name='email' className='bg-zinc-800 border border-zinc-700 px-2 py-1 rounded w-full text-white' />
                                </div>
                            </div>
                            <div className=' sm:flex'>
                                <div className='sm:pe-2 sm:w-1/2'>
                                    <label className='block text-white pt-4 pb-1'>Point</label>
                                    <input value={point} onChange={(e) => setPoint(e.target.value)} type='point' id='point' name='point' className='bg-zinc-800 border border-zinc-700 px-2 py-1 rounded w-full text-white' />
                                </div>
                                <div className='sm:w-1/2'>
                                    <label className='block text-white pt-4 pb-1'>User position</label>
                                    <select className=' bg-zinc-800 border border-zinc-700 px-2 py-1 rounded w-full text-white' value={position} id='position' name='position' onChange={(e) => setPosition(e.target.value)}>
                                        <option value="null">select</option>
                                        <option value="active">Active</option>
                                        <option value="notactive">Not Active</option>

                                    </select>
                                </div>

                            </div>
                            <div className={`  ${(position === 'notactive' || position === 'null') ? 'w-full' : 'sm:w-1/2 sm:pe-2'} `}>
                                <div className={`${(position === 'notactive' || position === 'null') ? '  h-20 flex' : 'hidden'}`}>
                                    <p className='w-full p-2 rounded-md my-2 text-white capitalize text-sm text-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ...'>If you have not taken advantage of stacking. So first you must be an active user.</p>
                                </div>

                            </div>
                            <div className='sm:pe-2 sm:w-1/2'>

                                {(position === 'active') ? (
                                    <>
                                        <label className='block text-white pt-4 pb-1'>Want a stack your points</label>
                                        <select className='bg-zinc-800 border border-zinc-700 px-2 py-1 rounded w-full text-white' value={stack} id='stack' name='stack' onChange={(e) => setStack(e.target.value)}>
                                            <option value={false}>No</option>
                                            <option value={true}>Yes</option>
                                        </select>
                                        {stack ? (
                                            <>
                                            
                                                < label className='block text-white pt-4 pb-1'>Select A pool </label>
                                               
                                                <select className='bg-zinc-800 border border-zinc-700 px-2 py-1 rounded w-full text-white' value={pool} id='pool' name='pool' onChange={(e) => setPool(e.target.value)}>
                                                    <option value={this}>Select</option>
                                                    {options.map((name, index) => (
                                                        <option key={index} value={name}>
                                                            {name}
                                                        </option>
                                                    ))}
                                                </select>


                                                <div className=''>

                                                    <p className='text-gray-400 text-sm '>You can stack minimum <span className='text-cyan-600'>${stackmin}</span>&nbsp;& Max <span className='text-cyan-600'>${stackmax}</span></p>

                                                </div>
                                                <div className=''>

                                                    < label className='block text-white pt-4 pb-1'>You stack your coin  </label>
                                                    <div className='flex'>
                                                        <div disabled className={`border border-slate-600 rounded-sm h-8 flex w-1/4 ${((point / 100 * 10) > stackmin) ? '' : 'notallow '}`}>
                                                            <div className={`flex relative w-full ${(percentage === '10') ? 'bg-cyan-600' : ''}`}>
                                                                <input
                                                                    type="checkbox"
                                                                    value="10"
                                                                    checked={percentage === '10'}
                                                                    onChange={handleCheckboxChange}
                                                                    className={`w-full h-8  opacity-0 absolute left-0 top-0 ${((point / 100 * 10) > stackmin) ? '' : 'hidden'}`}
                                                                />
                                                                <span className='m-auto text-white'>10%</span>
                                                            </div>
                                                        </div>

                                                        <div disabled className={`border border-slate-600 rounded-sm h-8 flex w-1/4 ${((point / 100 * 50) > stackmin) ? '' : 'notallow '}`}>
                                                            <div className={`flex relative w-full ${(percentage === '50') ? 'bg-cyan-600' : ''}`}>
                                                                <input
                                                                    type="checkbox"
                                                                    value="50"
                                                                    checked={percentage === '50'}
                                                                    onChange={handleCheckboxChange}
                                                                    className={`w-full h-8  opacity-0 absolute left-0 top-0 ${((point / 100 * 50) > stackmin) ? '' : 'hidden'}`}
                                                                />
                                                                <span className='m-auto text-white'>50%</span>
                                                            </div>
                                                        </div>

                                                        <div disabled className={`border border-slate-600 rounded-sm h-8 flex w-1/4 ${((point / 100 * 75) > stackmin) ? '' : 'notallow '}`}>
                                                            <div className={`flex relative w-full ${(percentage === '75') ? 'bg-cyan-600' : ''}`}>
                                                                <input
                                                                    type="checkbox"
                                                                    value="75"
                                                                    checked={percentage === '75'}
                                                                    onChange={handleCheckboxChange}
                                                                    className={`w-full h-8  opacity-0 absolute left-0 top-0 ${((point / 100 * 75) > stackmin) ? '' : 'hidden'}`}
                                                                />
                                                                <span className='m-auto text-white'>75%</span>
                                                            </div>
                                                        </div>
                                                        <div disabled className={`border border-slate-600 rounded-sm h-8 flex w-1/4 ${((point / 100 * 100) > stackmin) ? '' : 'notallow '}`}>
                                                            <div className={`flex relative w-full ${(percentage === '100') ? 'bg-cyan-600' : ''}`}>
                                                                <input
                                                                    type="checkbox"
                                                                    value="100"
                                                                    checked={percentage === '100'}
                                                                    onChange={handleCheckboxChange}
                                                                    className={`w-full h-8  opacity-0 absolute left-0 top-0 ${((point / 100 * 100) > stackmin) ? '' : 'hidden'}`}
                                                                />
                                                                <span className='m-auto text-white'>100%</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className=''>
                                                        <p className='text-gray-400 text-sm '>You have stack your <span className='text-orange-400' >
                                                            {(point / 100 * percentage)}</span> coin</p>
                                                    </div>
                                                </div>
                                            </>
                                        ) : ""}
                                    </>
                                ) : ""}


                            </div>
                        </div>
                        <div>
                            <div className='flex h-fit border border-cyan-700 rounded-md p-1 place-items-center mt-1'>
                                <img src={file} className='w-16 h-auto p-3 rounded-md   bg-cyan-950' />
                                <input type="file" name='file' id='file' className='ps-4' onChange={handleChange} />

                            </div>

                        </div>

                    </div>



                    <button
                        onClick={handleUpdate}
                        className="mx-auto  mt-5 btn bg-cyan-600 py-1 px-4 rounded-full font-light text-white flex place-items-center  ">Update</button>
                </form>
            </div>
        </>
    )
}

export default Update