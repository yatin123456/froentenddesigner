import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";
import { BsReverseListColumnsReverse } from "react-icons/bs";
import Banner from './pagebanner/Banner';


function Portfolio() {

  const [demolist, setDemolist] = useState([]);

  const navigate = useNavigate();
  useEffect(() => {
    document.title = 'Portfolio (Examples)';
    fetch('https://66e5498b5cc7f9b6273ce150.mockapi.io/demolist')
      .then(response => response.json())
      .then(data => {
        setDemolist(data);
      })
  }, []);

  return (
    <div>
      <Banner heading="10% to 100% Skill" coheading="Practicals" />
      <div className='mainbg'>
        <div className='example_wrap container mx-auto py-10'>
          <div className='grid grid-rows-1 lg:grid-cols-2 md:grid-cols-2   sm:grid-cols-2 sm:gap-6 gap-3'>
            {demolist.map((item) => (
              <div className='example_box flex flex-col justify-between opac'>
                <div className='flex'>
                  <div className='ps-2'>
                    <BsReverseListColumnsReverse className='text-3xl text-cyan-600 mx-auto mt-1' />
                  </div>
                  <div className='ps-3 text-start'>
                    <h5 className='text-white font-semibold uppercase'>{item.title}</h5>
                    <p className='text-gray-400 text-sm'>{item.description}</p>
                  </div>
                </div>
                <div className='text-end w-full'>
                  <button onClick={() => navigate(`/${item.route}`)} className={`example_box-btn ${(item.status === 'notactive') ? 'opacity-25' : ''}`}>View Demo</button>
                </div>
              </div>
            ))}

          </div>
        </div>
      </div>
    </div>
  )
}

export default Portfolio