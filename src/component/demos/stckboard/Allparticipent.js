import React, { useState, useEffect } from 'react'
import Banner from '../../pagebanner/Banner'
import userdummy from '../../../images/dumyuser.png'
import axios from 'axios';
import { Link } from 'react-router-dom';


function Allparticipent() {

    const [data, setData] = useState([]);
    const [finalf, setfiltered] = useState();
    const [fetchedData, setFetchedData] = useState([]);
    const [loading, setLoading] = useState(true);
    const dname = fetchedData.name;
    const totalv = fetchedData.totalvalue;
    const per = fetchedData.per;
    const [sum, setSum] = useState();
    const [filteredData, setFilteredData] = useState([]); // State to hold filtered data
    const [totalPoints, setTotalPoints] = useState(0);
    const [toggle, setToggle] = useState(false)


    console.log('totla',fetchedData)
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
                const item = data;
                const filtered = data.filter(item => item.pool === dname && item.stack == 'true' && item.position == 'active');
                if (Array.isArray(filtered)) {
                    const totalSum = filtered.reduce((acc, item) => acc + (Number(item.point / 100 * item.percentage) || 0), 0);
                    setSum(totalSum);
                    setLoading(false);
                }
                const updatedDataWithNewIDs = filtered.map((item, index) => ({
                    ...item,
                    id: index + 1 // Assign a new ID starting from 1
                }));
                setData(updatedDataWithNewIDs, dname);
            })
        const fetchData = async () => {
            try {
                const response = await fetch('https://66cea862901aab24841f1914.mockapi.io/pooldata/1');
                const result = await response.json();
                setFetchedData(result);
            } catch { }
        };
        fetchData();
    }, [dname]);

    return (
        <>
            <Banner heading={`pool:- ${dname}`} coheading="Participants" />
            <div className='mainbg'>
            <div className='container mx-auto py-5'>
                <Link to="/stackboard"><button className="back_com-tn btn  ">Go Back</button></Link>
                <div className='my-5'>
                    <div className='example_box text-start'>
                        <h5 className='text-white text-xl'><span className='text-orange-500 font-semibold' >${totalv}</span>&nbsp;Pool Capacity&nbsp;(APR {per}%)</h5>
                        <p className='text-sm text-zinc-300 mt-1 leading-5'>Win extra $ by completing offers and climbing the leaderboard! From July 1st to July 31st, complete as many offers as you can. The top 10 participants share a $100 prize pool!</p>
                        <div className='bg-zinc-900 p-2 my-3 rounded-md flex items-center justify-between'>
                            <div className='flex items-center '>
                                <div className='w-9 rounded-full overflow-hidden'>
                                    <img src={userdummy} />
                                </div>
                                <p className='p-0 text-white px-3 '>  {data.length}&nbsp;User Stack <span className='  text-orange-500 font-semibold'>
                                    ${sum}
                                </span></p>
                            </div>
                            <div className='flex items-center'>
                                <p className='p-0 text-white '>Total Earning &nbsp;<span className='  text-orange-500 font-semibold'>
                                    ${(sum / 100 * per).toFixed(2)}
                                </span></p>
                            </div>
                        </div>
                        <div className='text-end'><p onClick={() => setToggle(!toggle)} className='text-white bg-slate-500 rounded-sm w-fit px-2 ms-auto cursor-pointer'> {toggle ? 'Hide Point' : 'Show Point'}</p></div>
                        <div className='stacking_user-bar'>
                            <div className='flex justify-between border-b border-zinc-600 py-3'>
                                <p className='text-white '># User</p>
                                <p className='text-white '>Stack Point</p>
                            </div>
                            <div className='stacking_user'>
                                {loading ?
                                    (<p className='text-white text-center py-10'>Loding...</p>)
                                    : (data.length < 0 || data.length === 0) ?
                                        (
                                            <div className='py-10'>
                                                <p className='p-0 text-gray-500 text-center'>No user is stack  it right now in this pool. </p>
                                            </div>
                                        ) : (
                                            <div>
                                                {data.map((item) => (
                                                    <div className='flex justify-between border-b border-zinc-600 py-3' key={item.id}>
                                                        <div className='text-white flex items-center'>
                                                            <p className={`flex text-wrap w-5 h-5 rounded-full   font-semibold text-xs text-center ${(item.id) == '1' ? 'bg-green-500' : (item.id) == '2' ? 'bg-orange-500' : (item.id) == '3' ? 'bg-red-500' : 'bg-slate-500'}`}><span className='m-auto'>{item.id}</span></p>
                                                            <p className='ms-2'>{item.name}</p>
                                                        </div>
                                                        <p className={`text-white px-2 relative rounded-md`}>$ {item.point / 100 * item.percentage}<span className={`${toggle == true ? '' : 'bg-slate-700  rounded-md absolute right-0 top-0 w-full h-full  bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-90  '}`}></span></p>

                                                    </div>
                                                ))}
                                            </div>
                                        )}
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            </div>
        </>
    )
}

export default Allparticipent