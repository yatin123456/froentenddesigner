
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Banner from '../../pagebanner/Banner';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios'

function Update() {

    const [id, setId] = useState(0);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [point, setPoint] = useState("");
    const [position, setPosition] = useState("");
    const [stack, setStack] = useState("");
    const [file, setFile] = useState();
    const [pool, setPool] = useState("")

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
        setPool(localStorage.getItem("pool"));
        setStack(localStorage.getItem("stack"));


    }, []);


    const handleUpdate = (e) => {
        e.preventDefault();
        axios.put(`https://667eaaa0f2cb59c38dc69de2.mockapi.io/finaldata/${id}`,
            {
                name: name, email: email, point: point, position: position, file: file, pool: pool, stack: stack
            },

        )
        axios.put(`https://667eaaa0f2cb59c38dc69de2.mockapi.io/mycrudeapp/${id}`,
            {
                point: point, stack: stack, pool: pool
            },)
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
                                                    <option value="">Select</option>
                                                    <option value="TaskOnNFT">TaskOn NFT (+20.0% APR)</option>
                                                    <option value="TaskOnNFT2">TaskOn NFT (+24% APR)</option>
                                                    <option value="LockedPro+">Locked Pro+ (+20.0% APR)</option>
                                                    <option value="LockedStarter+">Locked Starter+ (+12.0% APR)</option>
                                                    <option value="LockedStarter+2">Locked Starter+ (+14.0% APR)</option>
                                                    <option value="LockedGainer+">Locked Gainer+ (+16.0% APR)</option>
                                                    <option value="FluidPro">Fluid Pro (+6.0% APR)</option>
                                                    <option value="FluidStarter">Fluid Starter (+2.1% APR)</option>
                                                    <option value="FluidGainer">Fluid Gainer (+401% APR)</option>
                                                </select>
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