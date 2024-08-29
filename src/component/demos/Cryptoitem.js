import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Banner from '../pagebanner/Banner';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { BsArrowLeft } from "react-icons/bs";

function Cryptoitem () {


    const [data, setData] = useState([]);
    const [imgs, setImags] = useState([data.image && data.image.small ? data.image.small : 'default-image-url'])
    const [loading, setLoading] = useState(true);
    const Loading = () => {
       return <p className='text-white my-5'>Loading...</p>

    }
    const { id } = useParams();
      const getData = () => {
        axios
            .get(`https://api.coingecko.com/api/v3/coins/${id}`)
            .then((res) => {
                setData(res.data);
                setLoading(false);
            });
            
          
    }
   
    useEffect(() => {
        getData();
    }, []);
    console.log(imgs)
    
  return (
   <>
   
    <Banner heading={data.name ? data.name : <Loading /> } coheading={data.symbol} img={imgs}   />
    <div className='container mx-auto my-10'>
    <Link to="/cryptoprise">
    <div className='back_bar text-start'>
          <button  className="  btn bg-cyan-600 py-1 px-4 rounded-full font-light text-white flex place-items-center  "><BsArrowLeft className='text-xl me-2' />Go Back</button>
        </div>
    </Link>
    {loading ? (
         <Loading />
    ) : (
        <>
         <h1 className='text-orange-600 text-xl mt-5'>{data.name}</h1>
            <p className='text-blue-500 text-3xl font-bold'>{data.genesis_date}</p>
            <p className='text-white'>Marketcap Rank :- {data.market_cap_rank}</p>
            {/* <p className='text-gray-300 font-light my-5'>{data.description.enzzz}</p> */}
        </>
    )}
        
    </div></>
  )
}

export default Cryptoitem
