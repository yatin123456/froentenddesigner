
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Banner from '../../pagebanner/Banner'
import { Link } from 'react-router-dom'
import dumyuser from '../../../images/dumyuser.png'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';


function Create() {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [point, setPoint] = useState("")
    // const [position, setPosition] = useState("null")
    const [position, setPosition] = useState('active')
    const [pool, setPool] = useState("")
    const [dot, setDot] = useState("")
    const [file, setFile] = useState();
    const [stack, setStack] = useState();
    const [currentDate, setCurrentDate] = useState(getDate());
    const [percentage, setPercentage] = useState(null);
    console.log(stack)
    const handleCheckboxChange = (event) => {
        setPercentage(event.target.value);
    };

    function getDate() {
        const today = new Date();
        const month = today.getMonth() + 1;
        const year = today.getFullYear();
        const date = today.getDate();
        return `${month}/${date}/${year}`;
    }
    function handleChange(e) {
        console.log(e.target.files);
        setFile(URL.createObjectURL(e.target.files[0]));
    }
  
    const history = useNavigate();
    const header = { "Access-control-Allow-Origin": "*" };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("clicked")
        toast.success('You reach maximum value');

        axios.post(
            "https://667eaaa0f2cb59c38dc69de2.mockapi.io/finaldata", {
            name: name, email: email, point: point, position: position, file: file, pool: pool, currentDate: currentDate, stack: stack,percentage: percentage, header
        })
        axios.post(
            "https://667eaaa0f2cb59c38dc69de2.mockapi.io/mycrudeapp", {
            point: point, pool: pool, stack: stack,percentage: percentage
        })
            .then(() => {
                history('/read')
            });
    }
    return (
        <>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
            />
            <Banner heading="Creat User Form" coheading="Form" />
            <div className='container mx-auto my-10'>
                <Link to="/read"><button className="btn bg-cyan-600 py-1 px-4 rounded-full font-light text-white flex place-items-center  ">Go Back</button></Link>
                <form className='text-start px-2'>
                    <div className='grid grid-rows-1  md:grid-cols-1  sm:gap-8 gap-4'>
                        <div>

                            <div className='sm:flex'>
                                <div className='sm:pe-2 sm:w-1/2'>
                                    <label className='block text-white pt-4 pb-1'>Name</label>
                                    <input onChange={(e) => setName(e.target.value)} type='text' id='name' name='name' className='bg-zinc-800 border border-zinc-700 px-2 py-1 rounded w-full text-white' />
                                </div>
                                <div className='sm:w-1/2'>
                                    <label className='block text-white pt-4 pb-1'>Email</label>
                                    <input onChange={(e) => setEmail(e.target.value)} type='email' id='email' name='email' className='bg-zinc-800 border border-zinc-700 px-2 py-1 rounded w-full text-white' />
                                </div>
                            </div>
                            <div className=' sm:flex'>
                                <div className='sm:pe-2 sm:w-1/2'>
                                    <label className='block text-white pt-4 pb-1'>Point</label>
                                    <input onChange={(e) => setPoint(e.target.value)} type='text' id='point' name='point' className='bg-zinc-800 border border-zinc-700 px-2 py-1 rounded w-full text-white' />
                                </div>

                                <div className='sm:w-1/2'>
                                    <label className='block text-white pt-4 pb-1'>User position</label>
                                    <select className='bg-zinc-800 border border-zinc-700 px-2 py-1 rounded w-full text-white' value={position} id='position' name='position' onChange={(e) => setPosition(e.target.value)}>
                                        <option value="null">Select</option>
                                        <option value="active">Active</option>
                                        <option value="notactive">Not Active</option>
                                    </select>

                                </div>
                            </div>
                            <div className={`  ${(position === 'notactive' || position === 'null') ? 'w-full' : 'sm:w-1/2 sm:pe-2'} `}>
                                <div className={`${(position === 'notactive' || position === 'null') ? '  h-20 flex' : 'hidden'}`}>
                                    <p className='w-full p-2 rounded-md my-2 text-white capitalize text-sm text-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ...'>If you have not taken advantage of stacking. So first you must be an active user.</p>
                                </div>
                                {(position === 'active') ? (
                                    <>
                                        <label className='block text-white pt-4 pb-1'>You Want To Stak Your point </label>
                                        <div className=''>
                                            <select className='bg-zinc-800 border border-zinc-700 px-2 py-1 rounded w-full text-white' value={stack} id='stack' name='stack' onChange={(e) => setStack(e.target.value)}>
                                                <option value={false}>No</option>
                                                <option value={true}>Yes</option>
                                            </select>
                                        </div>
                                        {stack  ? (
                                            <>
                                                <div>
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
                                                </div>
                                                <div className=''>

                                                    < label className='block text-white pt-4 pb-1'>How much do you want to stack? </label>
                                                    <div className='flex'>
                                                        <div className='border border-slate-600 rounded-sm h-8 flex w-1/4'>
                                                            <div className={`flex relative w-full ${(percentage === '10') ? 'bg-cyan-600' :''}`}>
                                                                <input
                                                                    type="checkbox"
                                                                    value="10"
                                                                    checked={percentage === '10'}
                                                                    onChange={handleCheckboxChange}
                                                                    className='w-full h-8  opacity-0 absolute left-0 top-0'
                                                                />
                                                                <span className='m-auto text-white'>10%</span>
                                                            </div>
                                                        </div>

                                                        <div className='border border-slate-600 rounded-sm h-8 flex w-1/4'>
                                                            <div className={`flex relative w-full ${(percentage === '50') ? 'bg-cyan-600' :''}`}>
                                                                <input
                                                                    type="checkbox"
                                                                    value="50"
                                                                    checked={percentage === '50'}
                                                                    onChange={handleCheckboxChange}
                                                                    className='w-full h-8  opacity-0 absolute left-0 top-0'
                                                                />
                                                                <span className='m-auto text-white'>50%</span>
                                                            </div>
                                                        </div>

                                                        <div className='border border-slate-600 rounded-sm h-8 flex w-1/4'>
                                                            <div className={`flex relative w-full ${(percentage === '75') ? 'bg-cyan-600' :''}`}>
                                                                <input
                                                                    type="checkbox"
                                                                    value="75"
                                                                    checked={percentage === '75'}
                                                                    onChange={handleCheckboxChange}
                                                                    className='w-full h-8  opacity-0 absolute left-0 top-0'
                                                                />
                                                                <span className='m-auto text-white'>75%</span>
                                                            </div>
                                                        </div>
                                                        <div className='border border-slate-600 rounded-sm h-8 flex w-1/4'>
                                                            <div className={`flex relative w-full ${(percentage === '100') ? 'bg-cyan-600' :''}`}>
                                                                <input
                                                                    type="checkbox"
                                                                    value="100"
                                                                    checked={percentage === '100'}
                                                                    onChange={handleCheckboxChange}
                                                                    className='w-full h-8  opacity-0 absolute left-0 top-0'
                                                                />
                                                                <span className='m-auto text-white'>100%</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className=''>
                                                        <p className='text-gray-400 text-sm '>You have stack your <span className='text-orange-400' >
                                                     {(point / 100 *percentage)}</span> coin</p>
                                                    </div>
                                                </div>
                                            </>
                                        ) : "red"}</>
                                ) : ""}
                            </div>
                            <div>
                                <div className='overflow-hidden flex h-fit border border-cyan-700 rounded-md p-1 place-items-center mt-3'>
                                    <img className='w-16 h-auto p-3 rounded-md   bg-cyan-950' src={file ? (file) : (dumyuser)} />
                                    <input className='ps-4' type="file" name='file' id='file' onChange={handleChange} />

                                </div>
                                <p className='text-white mt-2 text-sm'>DATE : - <span className='text-white opacity-45 font-light'>{currentDate}</span></p>
                            </div>
                        </div>



                    </div>
                    <button onClick={handleSubmit} className="mx-auto  mt-5 btn bg-cyan-600 py-1 px-4 rounded-full font-light text-white flex place-items-center  ">submit</button>
                </form >
            </div >
        </>
    )
}

export default Create