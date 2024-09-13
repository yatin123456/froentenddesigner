import React, { useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import { BsReverseListColumnsReverse } from "react-icons/bs";
import Banner from './pagebanner/Banner';


function Portfolio() {
  const navigate = useNavigate();
  useEffect(() => {
    document.title = 'Portfolio (Examples)';
  }, []);

  return (
    <div>
      <Banner heading="10% to 100% Skill" coheading="Practicals" />
      <div className='mainbg'>
      <div className='example_wrap container mx-auto py-10'>

        <div className='grid grid-rows-1 lg:grid-cols-2 md:grid-cols-2   sm:grid-cols-2 sm:gap-6 gap-3'>
          <div className='example_box'>
            <div className='flex'>
              <div className='ps-2'>
                <BsReverseListColumnsReverse className='text-3xl text-cyan-600 mx-auto mt-1' />

              </div>
              <div className='ps-3 text-start'> 
                <h5 className='text-white font-semibold'>Counter</h5>
                <p className='text-gray-400 text-sm'>On clicking the button shown in the counter demo, the counter goes up and down. And in that we can set the limit as per our choice.</p>
              </div>
            </div>
            <button onClick={() => navigate("/counter")} className='example_box-btn'>View Demo</button>
          </div>
          <div className='example_box'>
            <div className='flex'>
              <div className='ps-2'>
                <BsReverseListColumnsReverse className='text-3xl text-cyan-600 mx-auto mt-1' />

              </div>
              <div className='ps-3 text-start'> 
                <h5 className='text-white font-semibold'>Crypto Live Data</h5>
                <p className='text-gray-400 text-sm'>I have shown the mapping method of using crypto api and its data. In which I have also used filters. Or useParams was used to select the coin ID.</p>
              </div>
            </div>
            <button onClick={() => navigate("/cryptoprise")} className='example_box-btn'>View Demo</button>
          </div>
          <div className='example_box'>
            <div className='flex'>
              <div className='ps-2'>
                <BsReverseListColumnsReverse className='text-3xl text-cyan-600 mx-auto mt-1' />

              </div>
              <div className='ps-3 text-start'> 
                <h5 className='text-white font-semibold'>CRUD</h5>
                <p className='text-gray-400 text-sm'>In this case I have made a demo of crypto stacking solution. In which the user can earn rewards by stacking his dollars. Or you can also see how many users have stacked how many dollars.</p>
              </div>
            </div>
            <button onClick={() => navigate("/read")} className='example_box-btn'>View Demo</button>
          </div>
          <div className='example_box'>
            <div className='flex'>
              <div className='ps-2'>
                <BsReverseListColumnsReverse className='text-3xl text-cyan-600 mx-auto mt-1' />

              </div>
              <div className='ps-3 text-start'>
                <h5 className='text-white font-semibold'>Shop</h5>
                <p className='text-gray-400 text-sm'>Here I have tried to create cart routes in an ecommerce site. In which after adding an item, the last counter and its total is shown.</p>
              </div>
            </div>
            <button onClick={() => navigate("/shop")} className='example_box-btn'>View Demo</button>
          </div>


        </div>

      </div>
      </div>
    </div>
  )
}

export default Portfolio