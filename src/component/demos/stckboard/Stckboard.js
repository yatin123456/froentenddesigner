import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function Stckboard(props) {

    const [data, setData] = useState([]);
    const [sum, setSum] = useState(0);
    const [sum2, setSum2] = useState(0);
    const [sum3, setSum3] = useState(0);
    const [sum4, setSum4] = useState(0);
    const [sum5, setSum5] = useState(0);
    const [sum6, setSum6] = useState(0);
    const [sum7, setSum7] = useState(0);
    const [sum8, setSum8] = useState(0);
    const [sum9, setSum9] = useState(0);
    const navigate = useNavigate();
    const header = { "Access-control-Allow-Origin": "*" };
    function getData() {
        axios
            .get("https://667eaaa0f2cb59c38dc69de2.mockapi.io/finaldata")
            .then((res) => {
                setData(res.data);
            });

    }
    
    const viewall = async (e) => {
        e.preventDefault();
        const name = e.target.name;
        const totalValue = e.target.getAttribute('totalvalue');
        const per = e.target.getAttribute('per');
        const idToUpdate = '1';
        axios.put(
            `https://66cea862901aab24841f1914.mockapi.io/pooldata/${idToUpdate}`, {
            name: name,totalvalue: totalValue,per: per, header
        }
        )
            .then(() => {
                navigate('/allparticipent');
            });

    }
    useEffect(() => {
        fetch('https://667eaaa0f2cb59c38dc69de2.mockapi.io/mycrudeapp')
            .then(response => response.json())
            .then(data => {
                setData(data);
                const item = data;
                const filtered = data.filter(item => item.pool == 'TaskOnNFT' && item.stack === 'true');
                const filtered2 = data.filter(item => item.pool == 'TaskOnNFT2' && item.stack === 'true');
                const filtered3 = data.filter(item => item.pool == 'LockedPro+' && item.stack === 'true');
                const filtered4 = data.filter(item => item.pool == 'LockedStarter+' && item.stack === 'true');
                const filtered5 = data.filter(item => item.pool == 'LockedStarter+2' && item.stack === 'true');
                const filtered6 = data.filter(item => item.pool == 'LockedGainer+' && item.stack === 'true');
                const filtered7 = data.filter(item => item.pool == 'FluidPro' && item.stack === 'true');
                const filtered8 = data.filter(item => item.pool == 'FluidStarter' && item.stack === 'true');
                const filtered9 = data.filter(item => item.pool == 'FluidGainer' && item.stack === 'true');

                if (Array.isArray(filtered)) {
                    const totalSum = filtered.reduce((acc, item) => acc + (Number(item.point / 100 * item.percentage) || 0), 0);
                    setSum(totalSum);
                    console.log(totalSum)
                }
                if (Array.isArray(filtered2)) {
                    const totalSum2 = filtered2.reduce((acc, item) => acc + (Number(item.point / 100 * item.percentage) || 0), 0);
                    setSum2(totalSum2);
                    console.log(totalSum2)
                }
                if (Array.isArray(filtered3)) {
                    const totalSum3 = filtered3.reduce((acc, item) => acc + (Number(item.point / 100 * item.percentage) || 0), 0);
                    setSum3(totalSum3);
                }
                if (Array.isArray(filtered4)) {
                    const totalSum4 = filtered4.reduce((acc, item) => acc + (Number(item.point / 100 * item.percentage) || 0), 0);
                    setSum4(totalSum4);
                }
                if (Array.isArray(filtered5)) {
                    const totalSum5 = filtered5.reduce((acc, item) => acc + (Number(item.point / 100 * item.percentage) || 0), 0);
                    setSum5(totalSum5);
                }
                if (Array.isArray(filtered6)) {
                    const totalSum6 = filtered6.reduce((acc, item) => acc + (Number(item.point / 100 * item.percentage) || 0), 0);
                    setSum6(totalSum6);
                }
                if (Array.isArray(filtered7)) {
                    const totalSum7 = filtered7.reduce((acc, item) => acc + (Number(item.point / 100 * item.percentage) || 0), 0);
                    setSum7(totalSum7);
                }
                if (Array.isArray(filtered8)) {
                    const totalSum8 = filtered8.reduce((acc, item) => acc + (Number(item.point / 100 * item.percentage) || 0), 0);
                    setSum8(totalSum8);
                }
                if (Array.isArray(filtered9)) {
                    const totalSum9 = filtered9.reduce((acc, item) => acc + (Number(item.point / 100 * item.percentage) || 0), 0);
                    setSum9(totalSum9);
                }
            })
            .catch(error => console.error('Error fetching data:', error))
        setData(data)
    }, []);

    return (
        <>
            <div className='container mx-auto my-10'>
                {/* {specificData ? (
                    <pre>{JSON.stringify(specificData, 'FluidGainer', 1)}</pre>
                ) : (
                    <p>Loading...</p>
                )} */}
                <Link to="/read"><button className="btn bg-cyan-600 py-1 mb-3 px-4 rounded-full font-light text-white flex place-items-center  ">Go Back</button></Link>
                <h3 className='text-white font-bold text-xl mb-5'>Open pools</h3>
                <div className='grid grid-rows-1 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2 sm:gap-8 gap-4'>

                    <div className='example_box  text-start p-0 overflow-hidden'>
                        <div className='p-2 stck-bg'>
                            <h2 className='text-white'>TaksOn NFT</h2>
                        </div>
                        <div className='p-2'>
                            <p className='text-white text-sm'>Collect earnings in 6 months</p>
                            <p className='text-white text-sm'>Min stake 5 $JMPT</p>
                            <p className='text-orange-400 text-sm'>Have a special NFT to join</p>
                            <div className='flex mt-3'>
                                <p className='text-white text-xl font-semibold'>+20.0%<span className='text-white ps-2 text-sm font-light'>APR</span></p>
                            </div>
                            <div className={`${(sum == 60000 || sum > 60000) ? 'opacity-50 relative' : ''}`}>
                                <div className={`${(sum == 60000 || sum > 60000) ? 'flex absolute top-0 left-0 h-full w-full bg-gradient-to-t from-green-600 ... rounded-md' : 'hidden'} `}>
                                    <p className='m-auto text-white'>Pool is Full</p>
                                </div>
                                <div className=' flex place-content-between'>
                                    <p className='text-gray-400 text-md'>Pool occupancy </p>
                                    <span className='text-gray-400 text-sm block'>{(sum / 60000 * 100).toFixed(2)}%</span>
                                </div>
                                <div className='prbar w-[100%] h-1 bg-gray-500 mt-2'>
                                <div className={`  h-1 ${(sum/60000*100 === '0' || sum/60000*100 < '33') ? 'bg-blue-700' : (sum/60000*100 === '34' || sum/60000*100<'66') ? 'bg-green-600' : 'bg-red-600'}`} style={{ width: sum / 60000 * 100 + '%' }}></div>
                                </div>
                                <div className='flex mt-2'>
                                    <p className='text-gray-400 text-md'>${sum}  / 60000 </p>
                                </div>
                            </div>
                            <button className='example_box-btn w-full' name='TaskOnNFT' totalvalue='60000' per='20' onClick={viewall} >View All</button>
                        </div>
                    </div>
                    <div className='example_box text-start p-0 overflow-hidden'>
                        <div className='p-2 stck-bg'>
                            <h2 className='text-white'>TaksOn NFT</h2>
                        </div>
                        <div className='p-2'>
                            <p className='text-gray-400 text-sm'>Collect earnings in 6 months</p>
                            <p className='text-gray-400 text-sm'>Min stake 5 $JMPT</p>
                            <p className='text-orange-400 text-sm'>Have a special NFT to join</p>
                            <div className='flex mt-3'>
                                <p className='text-white text-xl font-semibold'>+12.0%<span className='text-gray-400 ps-2 text-sm font-light'>APR</span></p>
                            </div>
                            <div className={`${(sum2 == 15000 || sum2 > 15000) ? 'opacity-50 relative' : ''}`}>
                                <div className={`${(sum2 == 15000 || sum2 > 15000) ? 'flex absolute top-0 left-0 h-full w-full bg-gradient-to-t from-green-600 ... rounded-md' : 'hidden '} `}>
                                    <p className='m-auto text-white'>Pool is Full</p>
                                </div>
                                <div className=' flex place-content-between'>
                                    <p className='text-gray-400 text-md'>Pool occupancy </p>
                                    <span className='text-gray-400 text-sm block'>{(sum2 / 15000 * 100).toFixed(2)}%</span>
                                </div>

                                <div className='prbar w-[100%] h-1 bg-gray-500 mt-2'>
                                <div className={`  h-1 ${(sum2/15000*100 === '0' || sum2/15000*100 < '33') ? 'bg-blue-700' : (sum2/15000*100 === '34' || sum2/15000*100<'66') ? 'bg-green-600' : 'bg-red-600'}`} style={{ width: sum2 / 15000 * 100 + '%' }}></div>
                                </div>
                                <div className='flex mt-2'>
                                    <p className='text-gray-400 text-md'>$ {sum2}  / 15000 </p>
                                </div>
                            </div>
                            <button className='example_box-btn w-full' name='TaskOnNFT2' totalvalue='15000' per='12' onClick={viewall} >View All</button>
                        </div>
                    </div>

                    <div className='example_box text-start p-0 overflow-hidden'>
                        <div className='p-2 stck-bg2'>
                            <h2 className='text-white'>Locked Pro+</h2>
                        </div>
                        <div className='p-2'>
                            <p className='text-gray-400 text-sm'>Collect earnings in 6 months</p>
                            <p className='text-gray-400 text-sm'>Min stake 5 $JMPT</p>
                            <p className='text-orange-400 text-sm'>Have a special NFT to join</p>
                            <div className='flex mt-3'>
                                <p className='text-white text-xl font-semibold'>+15.0%<span className='text-gray-400 ps-2 text-sm font-light'>APR</span></p>
                            </div>
                            <div className={`${(sum3 == 45000 || sum3 > 45000) ? 'opacity-50 relative' : ''}`}>
                                <div className={`${(sum3 == 45000 || sum3 > 45000) ? 'flex absolute top-0 left-0 h-full w-full bg-gradient-to-t from-green-600 ... rounded-md' : 'hidden '} `}>
                                    <p className='m-auto text-white'>Pool is Full</p>
                                </div>
                                <div className=' flex place-content-between'>
                                    <p className='text-gray-400 text-md'>Pool occupancy </p>
                                    <span className='text-gray-400 text-sm block'>{(sum3 / 45000 * 100).toFixed(2)}%</span>
                                </div>

                                <div className='prbar w-[100%] h-1 bg-gray-500 mt-2'>
                                <div className={`  h-1 ${(sum3/45000*100 === '0' || sum3/45000*100 < '33') ? 'bg-blue-700' : (sum3/45000*100 === '34' || sum3/45000*100<'66') ? 'bg-green-600' : 'bg-red-600'}`} style={{ width: sum3 / 45000 * 100 + '%' }}></div>
                                </div>
                                <div className='flex mt-2'>
                                    <p className='text-gray-400 text-md'>$ {sum3}  / 45000 </p>
                                </div>
                            </div>
                            <button className='example_box-btn w-full' name='LockedPro+' totalvalue='45000' per='15' onClick={viewall} >View All</button>
                        </div>
                    </div>
                    <div className='example_box text-start p-0 overflow-hidden'>
                        <div className='p-2 stck-bg2'>
                            <h2 className='text-white'>Locked Stater+</h2>
                        </div>
                        <div className='p-2'>
                            <p className='text-gray-400 text-sm'>Collect earnings in 6 months</p>
                            <p className='text-gray-400 text-sm'>Min stake 5 $JMPT</p>
                            <p className='text-orange-400 text-sm'>Have a special NFT to join</p>
                            <div className='flex mt-3'>
                                <p className='text-white text-xl font-semibold'>+25.0%<span className='text-gray-400 ps-2 text-sm font-light'>APR</span></p>
                            </div>
                            <div className={`${(sum4 == 60000 || sum4 > 60000) ? 'opacity-50 relative' : ''}`}>
                                <div className={`${(sum4 == 60000 || sum4 > 60000) ? 'flex absolute top-0 left-0 h-full w-full bg-gradient-to-t from-green-600 ... rounded-md' : 'hidden '} `}>
                                    <p className='m-auto text-white'>Pool is Full</p>
                                </div>
                                <div className=' flex place-content-between'>
                                    <p className='text-gray-400 text-md'>Pool occupancy </p>
                                    <span className='text-gray-400 text-sm block'>{(sum4 / 60000 * 100).toFixed(2)}%</span>
                                </div>
                                <div className='prbar w-[100%] h-1 bg-gray-500 mt-2'>
                                <div className={`  h-1 ${(sum4/60000*100 === '0' || sum4/60000*100 < '33') ? 'bg-blue-700' : (sum4/60000*100 === '34' || sum4/60000*100<'66') ? 'bg-green-600' : 'bg-red-600'}`} style={{ width: sum4 / 60000 * 100 + '%' }}></div>
                                </div>
                                <div className='flex mt-2'>
                                    <p className='text-gray-400 text-md'>$ {sum4}  / 60000 </p>
                                </div>
                            </div>
                            <button className='example_box-btn w-full' name='LockedStarter+' totalvalue='60000' per='25' onClick={viewall} >View All</button>
                        </div>
                    </div>
                    <div className='example_box text-start p-0 overflow-hidden'>
                        <div className='p-2 stck-bg2'>
                            <h2 className='text-white'>Locked Stater+</h2>
                        </div>
                        <div className='p-2'>
                            <p className='text-gray-400 text-sm'>Collect earnings in 6 months</p>
                            <p className='text-gray-400 text-sm'>Min stake 5 $JMPT</p>
                            <p className='text-orange-400 text-sm'>Have a special NFT to join</p>
                            <div className='flex mt-3'>
                                <p className='text-white text-xl font-semibold'>+24.0%<span className='text-gray-400 ps-2 text-sm font-light'>APR</span></p>
                            </div>
                            <div className={`${(sum5 == 60000 || sum5 > 60000) ? 'opacity-50 relative' : ''}`}>
                                <div className={`${(sum5 == 60000 || sum5 > 60000) ? 'flex absolute top-0 left-0 h-full w-full bg-gradient-to-t from-green-600 ... rounded-md' : 'hidden '} `}>
                                    <p className='m-auto text-white'>Pool is Full</p>
                                </div>
                                <div className=' flex place-content-between'>
                                    <p className='text-gray-400 text-md'>Pool occupancy </p>
                                    <span className='text-gray-400 text-sm block'>{(sum5 / 60000 * 100).toFixed(2)}%</span>
                                </div>
                                <div className='prbar w-[100%] h-1 bg-gray-500 mt-2'>
                                <div className={`  h-1 ${(sum5/60000*100 === '0' || sum5/60000*100 < '33') ? 'bg-blue-700' : (sum5/60000*100 === '34' || sum5/60000*100<'66') ? 'bg-green-600' : 'bg-red-600'}`} style={{ width: sum5 / 60000 * 100 + '%' }}></div>
                                </div>
                                <div className='flex mt-2'>
                                    <p className='text-gray-400 text-md'>$ {sum5}  / 60000 </p>
                                </div>
                            </div>
                            <button className='example_box-btn w-full' name='LockedStarter+2' totalvalue='60000' per='24' onClick={viewall} >View All</button>
                        </div>
                    </div>
                    <div className='example_box text-start p-0 overflow-hidden'>
                        <div className='p-2 stck-bg2'>
                            <h2 className='text-white'>Locked Gainer+</h2>
                        </div>
                        <div className='p-2'>
                            <p className='text-gray-400 text-sm'>Collect earnings in 6 months</p>
                            <p className='text-gray-400 text-sm'>Min stake 5 $JMPT</p>
                            <p className='text-orange-400 text-sm'>Have a special NFT to join</p>
                            <div className='flex mt-3'>
                                <p className='text-white text-xl font-semibold'>+12.0%<span className='text-gray-400 ps-2 text-sm font-light'>APR</span></p>
                            </div>
                            <div className={`${(sum6 == 60000 || sum6 > 60000) ? 'opacity-50 relative' : ''}`}>
                                <div className={`${(sum6 == 60000 || sum6 > 60000) ? 'flex absolute top-0 left-0 h-full w-full bg-gradient-to-t from-green-600 ... rounded-md' : 'hidden '} `}>
                                    <p className='m-auto text-white'>Pool is Full</p>
                                </div>
                                <div className=' flex place-content-between'>
                                    <p className='text-gray-400 text-md'>Pool occupancy </p>
                                    <span className='text-gray-400 text-sm block'>{(sum6 / 60000 * 100).toFixed(2)}%</span>
                                </div>
                                <div className='prbar w-[100%] h-1 bg-gray-500 mt-2'>
                                <div className={`  h-1 ${(sum6/60000*100 === '0' || sum6/60000*100 < '33') ? 'bg-blue-700' : (sum6/60000*100 === '34' || sum6/60000*100<'66') ? 'bg-green-600' : 'bg-red-600'}`} style={{ width: sum6 / 60000 * 100 + '%' }}></div>
                                </div>
                                <div className='flex mt-2'>
                                    <p className='text-gray-400 text-md'>$ {sum6}  / 60000 </p>
                                </div>
                            </div>
                            <button className='example_box-btn w-full' name='LockedGainer+' totalvalue='60000' per='12' onClick={viewall} >View All</button>
                        </div>
                    </div>
                    <div className='example_box text-start p-0 overflow-hidden'>
                        <div className='p-2 stck-bg'>
                            <h2 className='text-white'>Fuild Pro</h2>
                        </div>
                        <div className='p-2'>
                            <p className='text-gray-400 text-sm'>Collect earnings in 6 months</p>
                            <p className='text-gray-400 text-sm'>Min stake 5 $JMPT</p>
                            <p className='text-orange-400 text-sm'>Have a special NFT to join</p>
                            <div className='flex mt-3'>
                                <p className='text-white text-xl font-semibold'>+10.0%<span className='text-gray-400 ps-2 text-sm font-light'>APR</span></p>
                            </div>
                            <div className={`${(sum7 == 10000 || sum7 > 10000) ? 'opacity-50 relative' : ''}`}>
                                <div className={`${(sum7 == 10000 || sum7 > 10000) ? 'flex absolute top-0 left-0 h-full w-full bg-gradient-to-t from-green-600 ... rounded-md' : 'hidden '} `}>
                                    <p className='m-auto text-white'>Pool is Full</p>
                                </div>
                                <div className=' flex place-content-between'>
                                    <p className='text-gray-400 text-md'>Pool occupancy </p>
                                    <span className='text-gray-400 text-sm block'>{(sum7 / 10000 * 100).toFixed(2)}%</span>
                                </div>
                                <div className='prbar w-[100%] h-1 bg-gray-500 mt-2'>
                                    <div className={`  h-1 ${(sum7/10000*100 === '0' || sum7/10000*100 < '33') ? 'bg-blue-700' : (sum7/10000*100 === '34' || sum7/10000*100<'66') ? 'bg-green-600' : 'bg-red-600'}`} style={{ width: sum7 / 10000 * 100 + '%' }}></div>
                                </div>
                                <div className='flex mt-2'>
                                    <p className='text-gray-400 text-md'>$ {sum7}  / 100s00  </p>
                                </div>
                            </div>
                            <button className='example_box-btn w-full' name='FluidPro' totalvalue='10000' per='10' onClick={viewall} >View All</button>
                        </div>
                    </div>
                    <div className='example_box text-start p-0 overflow-hidden'>
                        <div className='p-2 stck-bg2'>
                            <h2 className='text-white'>Fuild Stater</h2>
                        </div>
                        <div className='p-2'>
                            <p className='text-gray-400 text-sm'>Collect earnings in 6 months</p>
                            <p className='text-gray-400 text-sm'>Min stake 5 $JMPT</p>
                            <p className='text-orange-400 text-sm'>Have a special NFT to join</p>
                            <div className='flex mt-3'>
                                <p className='text-white text-xl font-semibold'>+5.0%<span className='text-gray-400 ps-2 text-sm font-light'>APR</span></p>
                            </div>
                            <div className={`${(sum8 == 1000000 || sum8 > 1000000) ? 'opacity-50 relative' : ''}`}>
                                <div className={`${(sum8 == 1000000 || sum8 > 1000000) ? 'flex absolute top-0 left-0 h-full w-full bg-gradient-to-t from-green-600 ... rounded-md' : 'hidden '} `}>
                                    <p className='m-auto text-white'>Pool is Full</p>
                                </div>
                                <div className=' flex place-content-between'>
                                    <p className='text-gray-400 text-md'>Pool occupancy </p>
                                    <span className='text-gray-400 text-sm block'>{(sum8 / 1000000 * 100).toFixed(2)}%</span>
                                </div>
                                <div className='prbar w-[100%] h-1 bg-gray-500 mt-2'>
                                <div className={`  h-1 ${(sum8/1000000*100 === '0' || sum8/1000000*100 < '33') ? 'bg-blue-700' : (sum8/1000000*100 === '34' || sum8/1000000*100<'66') ? 'bg-green-600' : 'bg-red-600'}`} style={{ width: sum8 / 1000000 * 100 + '%' }}></div>
                                </div>
                                <div className='flex mt-2'>
                                    <p className='text-gray-400 text-md'>$ {sum8}  / 1000000</p>
                                </div>
                            </div>
                            <button className='example_box-btn w-full' name='FluidStarter' totalvalue='1000000' per='5' onClick={viewall} >View All</button>
                        </div>
                    </div>
                    <div className='example_box text-start p-0 overflow-hidden'>
                        <div className='p-2 stck-bg'>
                            <h2 className='text-white'>Fuild Gainer</h2>
                        </div>
                        <div className='p-2'>
                            <p className='text-gray-400 text-sm'>Collect earnings in 6 months</p>
                            <p className='text-gray-400 text-sm'>Min stake 5 $JMPT</p>
                            <p className='text-orange-400 text-sm'>Have a special NFT to join</p>
                            <div className='flex mt-3'>
                                <p className='text-white text-xl font-semibold'>+35.0%<span className='text-gray-400 ps-2 text-sm font-light'>APR</span></p>
                            </div>
                            <div className={`${(sum9 == 1000000 || sum9 > 1000000) ? 'opacity-50 relative' : ''}`}>
                                <div className={`${(sum9 == 1000000 || sum9 > 1000000) ? 'flex absolute top-0 left-0 h-full w-full bg-gradient-to-t from-green-600 ... rounded-md' : 'hidden '} `}>
                                    <p className='m-auto text-white'>Pool is Full</p>
                                </div>
                                <div className=' flex place-content-between'>
                                    <p className='text-gray-400 text-md'>Pool occupancy </p>
                                    <span className='text-gray-400 text-sm block'>{(sum9 / 1000000 * 100).toFixed(2)}%</span>
                                </div>
                                <div className='prbar w-[100%] h-1 bg-gray-500 mt-2'>
                                <div className={`  h-1 ${(sum9/1000000*100 === '0' || sum9/1000000*100 < '33') ? 'bg-blue-700' : (sum9/1000000*100 === '34' || sum9/1000000*100<'66') ? 'bg-green-600' : 'bg-red-600'}`} style={{ width: sum9 / 1000000 * 100 + '%' }}></div>
                                </div>
                                <div className='flex mt-2'>
                                    <p className='text-gray-400 text-md'>$ {sum9}  / 1000000 </p>
                                </div>
                            </div>
                            <button className='example_box-btn w-full' name='FluidGainer' totalvalue='1000000' per='35' onClick={viewall} >View All</button>
                        </div>
                    </div>
                </div>
                <h3 className='text-white font-bold text-xl my-5'>Close pools</h3>
            </div>
        </>
    )
}

export default Stckboard

// useEffect(() => {
//     fetch('https://667eaaa0f2cb59c38dc69de2.mockapi.io/mycrudeapp')
//         .then(response => response.json())
//         .then(data => {
//             if (Array.isArray(data)) {
//                 const totalSum = data.reduce((acc, item) => acc + (Number(item.point,) || 0), 0);
//                 setSum(totalSum);
//             } else {
//                 console.error('Fetched data is not an array');
//             }
//         })
//         .catch(error => console.error('Error fetching data:', error))
//         getData();
// }, []);

// .then(data => {
//     if (Array.isArray(data)) {
//         const totalSum = data.reduce((acc, item) => acc + (Number(item.point,) || 0), 0);
//         setSum(totalSum);
//     } else {
//     }
// })