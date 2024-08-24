import React, { useState, useEffect } from 'react'
import Banner from '../../pagebanner/Banner'
import userdummy from '../../../images/dumyuser.png'
import axios from 'axios';
import { Link } from 'react-router-dom';

function Allparticipent(props) {

    const [data, setData] = useState([]);
    const [finalf, setfiltered] = useState();
    const [cpool, setpool] = useState('TaskOnNFT');
    const [sum, setSum] = useState(0);
    // console.log(props.value)
    function getData() {
        axios
            .get("https://667eaaa0f2cb59c38dc69de2.mockapi.io/finaldata")
            .then((res) => {
                setData(res.data);
            });
    }
    useEffect(() => {
        fetch('https://667eaaa0f2cb59c38dc69de2.mockapi.io/finaldata')
            .then(response => response.json())
            .then(data => {
                setData(data);
                const item = data;
                const filtered = data.filter(item => item.pool === cpool);
                if (Array.isArray(filtered)) {
                    const totalSum = filtered.reduce((acc, item) => acc + (Number(item.point / 100 * item.percentage) || 0), 0);
                    setSum(totalSum);
                }
                setfiltered(filtered);
            })
            .catch(error => console.error('Error fetching data:', error))
        setData(data)
    }, []);
    console.log(data)
    return (
        <>
            <Banner heading={`pool:- ${cpool}`} coheading="Participants" />
            <div className='container mx-auto'>
            <Link to="/stackboard"><button className="btn bg-cyan-600 py-1 mb-3 px-4 rounded-full font-light text-white flex place-items-center  ">Go Back</button></Link>
                <div className='my-5'>
                    <div className='example_box text-start'>
                        <h5 className='text-white text-xl'><span className='text-orange-500 font-semibold' >$100000</span>&nbsp;Pool Capacity</h5>
                        <p className='text-sm text-zinc-300 mt-1 leading-5'>Win extra $ by completing offers and climbing the leaderboard! From July 1st to July 31st, complete as many offers as you can. The top 10 participants share a $100 prize pool!</p>

                        <div className='bg-zinc-900 p-2 my-3 rounded-md'>
                            <div className='flex items-center '>
                                <div className='w-9 rounded-full overflow-hidden'>
                                    <img src={userdummy} />
                                </div>
                                <p className='p-0 text-white px-3 '>  User Stack <span className='  text-orange-500 font-semibold'>${sum}</span></p>

                            </div>
                        </div>
                        <div className='stacking_user-bar'>
                            <div className='flex justify-between border-b border-zinc-600 py-3'>
                                <p className='text-white '># User</p>
                                <p className='text-white '>Stack Point</p>
                            </div>
                            <div className='stacking_user'>
                                {((!data.length) > 0) ? (
                                    <div className='py-10'>
                                        <p className='p-0 text-gray-500 text-center'>No user is stack  it right now in this pool. </p>
                                    </div>
                                ) : (
                                    <div>
                                        {finalf.map((items) => (
                                            <div className='flex justify-between border-b border-zinc-600 py-3'>
                                                <p className='text-white flex items-center'>
                                                    <span className='text-wrap w-5 h-5 rounded-full bg-orange-500 block font-semibold text-sm text-center'>{items.id}</span>
                                                    <span className='ms-2'>{items.name}</span>
                                                </p>
                                                <p className='text-white '>$ {items.point / 100 * items.percentage}</p>
                                               
                                            </div>
                                        ))}
                                    </div>
                                )}


                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Allparticipent