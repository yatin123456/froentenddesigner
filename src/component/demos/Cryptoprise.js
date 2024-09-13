import React, { useEffect, useState } from 'react'
import Banner from '../pagebanner/Banner';
import { useNavigate, useParams } from "react-router-dom"
import { BsArrowLeft } from "react-icons/bs";
import { Link } from 'react-router-dom';

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
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredCoins = data.filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
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
    <>
      <Banner heading="crypto Live Data" coheading="Get Data From API" />
      <div className='mainbg'>
        <div className='container mx-auto py-5'>
          <div className='back_bar text-start'>
            <Link to='/portfolio'> <button className="  btn bg-cyan-600 py-1 px-4 rounded-full font-light text-white flex place-items-center  "><BsArrowLeft className='text-xl me-2' />Go Back</button></Link>
          </div>
          {loading ? (
            <p className='text-white my-5 text-center'>Loading...</p>
          ) : error ? (
            <p>Error: {error}</p>
          ) : (

            <>
              <p></p>
              <input
                type="text"
                placeholder="Search for a coin..."
                value={searchTerm}
                onChange={handleSearch}
                className='bg-zinc-800 border border-zinc-700 px-2 py-1 mt-3 rounded w-full text-white'

              />
              <div className={`grid grid-rows-4 grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 my-5`}>

                {filteredCoins.map((item) => (
                  <div key={item.id} className='example_box cursor-pointer crypto_box bg-zinc-800 rounded-md p-2 shadow-lg transition hover:shadow-black border border-zinc-700'>
                    <Link to={`/cryptoitem/${item.id}`}>
                      <div className='crypto_box-top flex place-items-center' >
                        <div className='crypto_img w-7'>
                          <img className='' src={item.image} />
                        </div>
                        <p className='text-zinc-300 ps-3 text-ellipsis truncate   overflow-hidden ...'>{item.name}</p>
                      </div>
                      <div className='pt-2 crypto_box-bottom flex place-items-center'>
                        <h5 className='text-white '>{item.current_price}</h5>
                        <span className='px-2 rounded-full text-sm ms-3 text-white  bg-gray-600'>{item.market_cap_rank}</span>
                      </div>
                    </Link>
                  </div>

                ))}
              </div>
            </>
          )}



        </div>

      </div>
    </>
  )
}

export default Cryptoprise