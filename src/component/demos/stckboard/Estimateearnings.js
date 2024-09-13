import React, { useState, useEffect } from 'react'
import Banner from '../../pagebanner/Banner'
import { Link } from 'react-router-dom'
import coinicon from '../../../images/coin.png'
import right from '../../../images/next.png'
import axios from 'axios'

function Estimateearnings() {

    const [point, setPoint] = useState([0]);
    const [pool, setPools] = useState([]);
    const [higher, setHIgher] = useState();
    const [loading, setLoading] = useState(true);
        console.log(higher)
    const Loading = () => {
        return <p className='text-white my-5 text-center'>Loading...</p>

    }
    useEffect(() => {
        axios.get('https://66cea862901aab24841f1914.mockapi.io/Poollist')
            .then(response => {
                const sortedPools = response.data.sort((a, b) => b.per - a.per);
                const highePer = pool.length > 0 ? pool[0].per : 0;
                setPools(sortedPools);
                setHIgher(highePer);
                setLoading(false);
            })
    }, [higher]);
    console.log('daeeeetaas', pool)
    return (
        <>
            <Banner heading="Estimate Your Stacking" coheading="Calculater" />
            <div className='mainbg'>
            <div className='container mx-auto py-5'>
                <Link to="/read"><button className="back_com-tn btn">Go Back</button></Link>
                <div className='example_box text-start xl:w-1/2 md:w-1/2'>
                    <div className='flex justify-between align-middle'>
                        <div className=''>
                            <p class="text-md text-zinc-300 leading-5">Your wallet balance</p>
                            <p className=' text-orange-500 text-xl font-semibold'>$0</p>
                        </div>
                        <button className="back_com-tn mb-0 h-fit btn text-sm ">Buy $ Now</button>
                    </div>
                </div>
                <div className='example_box  text-start my-3'>
                    <h3 className='text-white text-2xl'>Estimate earnings</h3>
                    <p className='text-xs text-gray-400 '>Estimated values are for informational purposes only.</p>

                    <div className='sm:pe-2 sm:w-1/2 relative mt-5 mb-3'>
                        <label className='block text-gray-400 absolute -top-2 px-2 text-xs bg-zinc-800 left-3 rounded-sm'>Stack Amount</label>
                        <input onChange={(e) => setPoint(e.target.value)} type='text' id='point' name='point' className='bg-transparent border border-zinc-700 px-2 py-2 rounded w-full text-white' />
                        <span className='absolute right-4 text-orange-600 text-xl top-2'>$</span>
                    </div>

                    <div className='grid grid-rows-1 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2 sm:gap-3 gap-2'>
                        {loading ? (
                            <Loading />
                        ) : (
                            <>
                                {pool.map(item => (
                                    <div className={`pool_box example_box rounded-md ${item.per === higher ? 'toppool' : ''}`}>
                                        <div className='flex items-center justify-between'>
                                            <div className=''>
                                                <div className=' flex '>
                                                    <div className='me-3'>
                                                        <img className='w-10' src={coinicon} />
                                                    </div>
                                                    <div>
                                                        <h3 className='text-white text-xl text-start mb-0'>{item.name}</h3>
                                                        <p className='m-0 text-sm text-zinc-400 '>APR +{item.per}% | Lock for {item.duration} </p>
                                                    </div>
                                                </div>
                                                <div className='mt-2 flex'>
                                                    <h5 className='text-white m-0 text-md font-bold'><span className='text-orange-600 me-1'>$</span>{(point / 100 * item.per).toFixed(2)}</h5>
                                                    <h4 className='text-white mb-0 ms-2 py-[2px] px-3 h-fit text-sm bg-slate-600 rounded-full font-semibold'>~ $ {(point / 100 * item.per).toFixed(1)}</h4>
                                                </div>
                                            </div>
                                            <div className='flex'>
                                                <Link to='/stackboard' className='mx-auto w-16 bg-slate-800 rounded-full h-16 flex'>
                                                    <img className='w-8 grayscale-0 m-auto opacity-45 hover:opacity-100' src={right} />
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                ))
                                }
                            </>
                        )
                        }



                    </div>
                </div>
            </div>
            </div>
        </>
    )
}

export default Estimateearnings