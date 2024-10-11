
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios'
import Banner from '../../pagebanner/Banner';
import { ToastContainer, toast } from 'react-toastify';


function Read() {
  
    const [data, setData] = useState([]);
    const [getDv, getDvalue] = useState();
    const getDefult = () => {getDvalue('active')}
    const getDefultto = () => {getDvalue('notactive')}
    const getDall = () => {getDvalue('')}
    
    const setToLocalStorage = (id, email, name, point, position, file ,stack , pool, percentage ) => {
        localStorage.setItem("id", id);
        localStorage.setItem("email", email);
        localStorage.setItem("name", name);
        localStorage.setItem("point", point);   
        localStorage.setItem("position", position);
        localStorage.setItem("file", file);
        localStorage.setItem("stack", stack);
        localStorage.setItem("pool", pool);
        localStorage.setItem("percentage", percentage);

    }
 
    const handleDelet = (id) => {
        axios.delete(`https://667eaaa0f2cb59c38dc69de2.mockapi.io/finaldata/${id}`)
            .then(() => {
                getData();
            })
           
        toast.error('you removed this user');
    }

    function getData() {
        axios
            .get("https://667eaaa0f2cb59c38dc69de2.mockapi.io/finaldata")
            .then((res) => {
                setData(res.data);
            });
    }
    useEffect(() => {
        getData();
    }, []);
    return (
        <>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
            />
            <Banner heading="User Rank List" coheading="Editeble Data" />
            <div className='mainbg'>
            <div className='container mx-auto my-5'>
            <Link to="/portfolio"><button className="back_com-tn btn  ">Go Back</button></Link>
                <div className='pb-5 mb-5 border-b border-zinc-700 sm:flex sm:place-content-between'>
                    <h2 className='text-cyan-400 sm:text-2xl font-semibold'>Users Data<span className='text-sm text-white opacity-50 font-light ps-2'>({data.length})</span></h2>
                    <Link to="/create"><button className='ms-auto btn bg-cyan-600 py-1 px-4 rounded-full font-light text-white flex place-items-center  '>Add User</button></Link>
                </div>

                {(!data.length) > 0 ? (
                    <div className='py-10'>
                        <p className='text-white text-center w-full'>No Data Available...</p>
                    </div>
                ) : (
                    <>
                        <div className='my-5 ms-auto'>
                            <button className='btn border border-cyan-700 px-3 text-sm py-1 rounded-md font-light text-cyan-500 hover:bg-cyan-600 hover:text-white transition me-2 ' onClick={getDall}>All</button>
                            <button className='btn border border-cyan-700 px-3 text-sm py-1 rounded-md font-light text-cyan-500 hover:bg-cyan-600 hover:text-white transition me-2 ' onClick={getDefultto}>Active</button>
                            <button className='btn border border-cyan-700 px-3 text-sm py-1 rounded-md font-light text-cyan-500 hover:bg-cyan-600 hover:text-white transition me-2 ' onClick={getDefult}>Not-active</button>
                        </div>
                        <div className='grid grid-rows-1 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2 sm:gap-8 gap-4'>
                            {data.map((eachData) => (
                                <>
                                    <div className={`example_box text-start p-2 relative  ${(getDv === (eachData.position)) ? "hidden" : ""}`} key={eachData.id}>

                                        <div className='flex h-full'>
                                            <div className='p-1 w-1/3'>
                                                <img className='rounded-md ' src={eachData.file} />
                                            </div>
                                            <div className='ps-2 flex flex-col justify-between w-8/12'>
                                                <div>
                                                    <div className='flex place-items-center'>
                                                        <p className=''><span className='text-white'>Name : </span><span className='text-white opacity-50 font-light'>{eachData.name}</span></p>
                                                    </div>
                                                    <h5 className='flex'><span className='text-white'>Email :  </span><span className='text-white opacity-50 font-light truncate block '> {eachData.email}</span></h5>
                                                    <div className='flex place-items-center'>
                                                        <p className=''><span className='text-white'>Rank : </span><span className='text-white  font-semibold text-[12px] tracking-wider bg-cyan-900 rounded-sm px-2 '>{(eachData.id > eachData.id.point) ? 'red' : 'll'}</span></p>
                                                    </div>
                                                    {
                                                        (eachData.position) === 'active' ? (<p className='absolute right-4 -top-2 text-green-400 bg-green-900  w-fit text-[12px] rounded-md px-2  capitalize border font-semibold border-green-700'>Active</p>) : (<p className='absolute right-4 -top-2 text-rose-800 font-semibold bg-rose-400  w-fit text-[12px] rounded-md px-2  capitalize border border-rose-500'>Not-active</p>)
                                                    }

                                                    <div className=''>
                                                        <span className='text-white'>Total Earn Points : </span>
                                                        <span className='block text-2xl font-bold text-cyan-500'>{eachData.point} <span className={`text-sm text-gray-500 font-light ${(eachData.stack === 'true') ? "" : "hidden"}`}>Point stacked</span></span>
                                                       
                                                    </div>
                                                </div>
                                                <p className='text-white mt-2 text-sm'>DATE : - <span className='text-white opacity-45 font-light'>{eachData.currentDate}</span></p> 
                                                <div>
                                                    <Link to="/update"><button className='rounded-sm hover:bg-cyan-600 transition py-1 border-r border-slate-600 text-sm text-white font-light w-1/2' onClick={() => setToLocalStorage(
                                                        eachData.id,
                                                        eachData.email,
                                                        eachData.name,
                                                        eachData.point,
                                                        eachData.position,
                                                        eachData.file,
                                                        eachData.stack,
                                                        eachData.pool,
                                                        eachData.percentage
                                                    )} >Edit</button></Link>
                                                    <button onClick={() => handleDelet(eachData.id)} className='rounded-sm hover:bg-cyan-600 transition py-1 text-sm w-1/2 text-white font-light'>Remove</button>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </>
                            ))
                            }</div></>
                )
                }

                <div className='mt-4'>
                <Link to="/stackboard"><button className='ms-auto m-3 btn bg-cyan-600 py-1 px-4 rounded-full font-light text-white '>Stacking board</button></Link>
                <Link to="/estimateearnings"><button className='ms-auto me-3 btn bg-cyan-600 py-1 px-4 rounded-full font-light text-white '>Estimate earnings</button></Link>
                
                </div>
            </div>
            </div>
        </>
    )
}

export default Read