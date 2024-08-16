
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
    const [position, setPosition] = useState("")
    const [pool, setPool] = useState("")
    const [dot, setDot] = useState("")
    const [file, setFile] = useState();
    const [stack, setStacks] = useState(true);
    const [stackYes, setStackYes] = useState(false);
    const [currentDate, setCurrentDate] = useState(getDate());
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
    function setNo() {
        setStacks(true)
        setStackYes(false)
    }
    function setYes() {
        setStacks(false)
        setStackYes(true)
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("clicked")
        toast.success('You reach maximum value');

        axios.post(
            "https://667eaaa0f2cb59c38dc69de2.mockapi.io/finaldata", {
            name: name, email: email, point: point, position: position, file: file,pool: pool, currentDate: currentDate, header
        })
        axios.post(
            "https://667eaaa0f2cb59c38dc69de2.mockapi.io/mycrudeapp", {
                point: point, pool: pool, stackYes: stackYes
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
                    <div className='grid grid-rows-1  md:grid-cols-2  sm:gap-8 gap-4'>
                        <div>
                            <label className='block text-white pt-4 pb-1'>Name</label>
                            <input onChange={(e) => setName(e.target.value)} type='text' id='name' name='name' className='bg-zinc-800 border border-zinc-700 px-2 py-1 rounded w-full text-white' />
                            <label className='block text-white pt-4 pb-1'>Email</label>
                            <input onChange={(e) => setEmail(e.target.value)} type='email' id='email' name='email' className='bg-zinc-800 border border-zinc-700 px-2 py-1 rounded w-full text-white' />
                            <div className=' sm:flex'>
                                <div className='sm:pe-2 sm:w-1/2'>
                                    <label className='block text-white pt-4 pb-1'>Point</label>
                                    <input onChange={(e) => setPoint(e.target.value)} type='text' id='point' name='point' className='bg-zinc-800 border border-zinc-700 px-2 py-1 rounded w-full text-white' />
                                </div>

                                <div className='sm:w-1/2'>
                                    <label className='block text-white pt-4 pb-1'>User position</label>
                                    <select className='bg-zinc-800 border border-zinc-700 px-2 py-1 rounded w-full text-white' value={position} id='position' name='position' onChange={(e) => setPosition(e.target.value)}>
                                        <option value="active">Active</option>
                                        <option value="notactive">Not Active</option>
                                    </select>

                                </div>
                            </div>
                            <div>
                                <div className='overflow-hidden flex h-fit border border-cyan-700 rounded-md p-1 place-items-center mt-3'>
                                    <img className='w-16 h-auto p-3 rounded-md   bg-cyan-950' src={file ? (file) : (dumyuser)} />
                                    <input className='ps-4' type="file" name='file' id='file' onChange={handleChange} />

                                </div>
                                <p className='text-white mt-2 text-sm'>DATE : - <span className='text-white opacity-45 font-light'>{currentDate}</span></p>
                            </div>
                        </div>

                        <div>
                            <label className='block text-white pt-4 pb-1'>You Want To Stak Your point </label>
                            <div className='flex'>
                                <div>
                                    <input className='' type='checkbox' checked={stack} onChange={setNo} />
                                    <span className='text-white ps-3'>No</span>
                                </div>
                                <div className='ms-3'>
                                    <input className='' type='checkbox' checked={stackYes} onChange={setYes} />
                                    <span className='text-white ps-3'>Yes</span>
                                </div>
                            </div>
                            {stackYes ? (
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
                            ) : ""}
                        </div>

                    </div>
                    <button onClick={handleSubmit} className="mx-auto  mt-5 btn bg-cyan-600 py-1 px-4 rounded-full font-light text-white flex place-items-center  ">submit</button>
                </form >
            </div >
        </>
    )
}

export default Create