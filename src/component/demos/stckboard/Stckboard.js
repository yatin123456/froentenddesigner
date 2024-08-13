import React, { useState, useEffect } from 'react'
import axios from 'axios'

function Stckboard() {
    const [data, setData] = useState([]);
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
    console.log(data)
    return (
        <>
            <div className='container mx-auto my-10'>
                <h3 className='text-white font-bold text-xl mb-5'>Open pools</h3>
                <div className='grid grid-rows-1 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2 sm:gap-8 gap-4'>
                    {data.map((stackdata) =>(
                        <>
                        <div className='example_box text-start p-0 overflow-hidden'>
                        <div className='p-2 stck-bg'>
                            <h2 className='text-white'>TaksOn NFT</h2>
                        </div>
                        <div className='p-2'>
                            <p className='text-gray-400 text-sm'>Collect earnings in 6 months</p>
                            <p className='text-gray-400 text-sm'>Min stake 5 $JMPT</p>
                            <p className='text-orange-400 text-sm'>Have a special NFT to join</p>
                            <div className='flex mt-3'>
                                <p className='text-white text-xl font-semibold'>+20.0%<span className='text-gray-400 ps-2 text-sm font-light'>APR</span></p>
                            </div>
                            <div className=' flex place-content-between'>
                                <p className='text-gray-400 text-md'>Pool occupancy </p>
                                <span className='text-gray-400 text-sm block'>{stackdata.point/50000*100}%</span>
                            </div>
                            
                            <div className='prbar w-[100%] h-1 bg-gray-500 mt-2'>
                                <div className='bg-green-500 w-[10%] h-1'></div>
                            </div>
                            <div className='flex mt-2'>
                                <p className='text-gray-400 text-md'>$ {stackdata.point}  / 50000 </p>
                            </div>
                            <button className='example_box-btn w-full'>View Demo</button>
                        </div>
                    </div>
                    <div className='example_box text-start p-0 overflow-hidden'>
                        <div className='p-2 stck-bg'>
                            <h2 className='text-white'>Locked Starter+</h2>
                        </div>
                        <div className='p-2'>
                            <p className='text-gray-400 text-sm'>Collect earnings in 6 months</p>
                            <p className='text-gray-400 text-sm'>Min stake 5 $JMPT</p>
                            <p className='text-orange-400 text-sm'>Have a special NFT to join</p>
                            <div className='flex mt-3'>
                                <p className='text-white text-xl font-semibold'>+12.0%<span className='text-gray-400 ps-2 text-sm font-light'>APR</span></p>
                            </div>
                            <div className=' flex place-content-between'>
                                <p className='text-gray-400 text-md'>Pool occupancy </p>
                                <span className='text-gray-400 text-sm block'>1%</span>
                            </div>
                            
                            <div className='prbar w-[100%] h-1 bg-gray-500 mt-2'>
                                <div className='bg-green-500 w-[10%] h-1'></div>
                            </div>
                            <div className='flex mt-2'>
                                <p className='text-gray-400 text-md'>$ 2000  / 50000 </p>
                            </div>
                            <button className='example_box-btn w-full'>View Demo</button>
                        </div>
                    </div>
                        </>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Stckboard