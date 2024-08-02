import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Banner from '../pagebanner/Banner';
import { useNavigate } from "react-router-dom"
import { BsArrowLeft } from "react-icons/bs";

function Cryptoprise() {
  const navigate = useNavigate()
  useEffect(() => {
    document.title = 'Crypto Live Data';
  }, []);
  const goBack = () => { navigate(-1); }
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [value, setValue] = useState('4');

  const handleChange = (e) => {
    setValue(e.target.value);
  };
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    try {
      const options = {
        method: 'GET',
        headers: { accept: 'application/json', 'x-cg-demo-api-key': 'CG-8KhexRnMeBbK93jVdmeC7Dw1' }
      };
      const response = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd', options); // Replace with your API endpoint
      if (!response.ok) {
        throw new Error('Network response was not ok.');
      }
      const data = await response.json();
      setData(data);
      setLoading(false);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };


  return (
    <div className=''>
      <Banner heading="crypto Live Data" coheading="Get Data From API" />
      <div className='container mx-auto '>
        <div className='back_bar text-start'>
          <button onClick={() => goBack()} className="  btn bg-cyan-600 py-1 px-4 rounded-full font-light text-white flex place-items-center  "><BsArrowLeft className='text-xl me-2' />Go Back</button>
        </div>

        {/* <select className='px-10 rounded-md bg-zinc-800 text-white border  border-zinc-400 my-4 w-40' value={value} onChange={handleChange}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
        </select> */}
        {loading ? (
          <p className='text-white my-5 text-center'>Loading...</p>
        ) : error ? (
          <p>Error: {error}</p>
        ) : (
          // <div className={`grid grid-rows-4 grid-cols-${value} gap-4 my-5`}>
            <div className={`grid grid-rows-4 grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 my-5`}>
            {data.map((item) => (
              <div className='cursor-pointer crypto_box bg-zinc-800 rounded-md p-2 shadow-lg transition hover:shadow-black border border-zinc-700'>
                <div className='crypto_box-top flex place-items-center'>
                  <div className='crypto_img w-7'>
                    <img className='' src={item.image} />
                  </div>
                  <p className='text-zinc-300 ps-3 text-ellipsis truncate   overflow-hidden ...'>{item.name}</p>
                </div>
                <div className='pt-2 crypto_box-bottom flex place-items-center'>
                  <h5 className='text-white '>{item.current_price}</h5>
                  <span className='px-2 rounded-full text-sm ms-3 text-white  bg-gray-600'>{item.market_cap_rank}</span>
                </div>
              </div>

            ))}
          </div>
        )}



      </div>

    </div>

  )
}

export default Cryptoprise