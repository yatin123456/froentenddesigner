import React,{useEffect} from 'react'
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
    <Banner heading="Demos" coheading="Practicals"/>
    <div className='example_wrap container mx-auto my-10'>
    
      <div className='grid grid-rows-1 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 sm:gap-8 gap-4'>
        <div className='example_box'>
          <BsReverseListColumnsReverse className='text-3xl text-cyan-600 mx-auto mb-5' />
          <h5 className='text-white font-semibold'>Counter</h5>
          <button  onClick={() =>  navigate("/counter")} className='example_box-btn'>View Demo</button>
        </div>
        <div className='example_box'>
          <BsReverseListColumnsReverse className='text-3xl text-cyan-600 mx-auto mb-5' />
          <h5 className='text-white font-semibold'>Crypto Live Data</h5>
          <button onClick={() =>  navigate("/cryptoprise")} className='example_box-btn'>View Demo</button>
        </div>
        <div className='example_box'>
          <BsReverseListColumnsReverse className='text-3xl text-cyan-600 mx-auto mb-5' />
          <h5 className='text-white font-semibold'>CRUD</h5>
          <button onClick={() =>  navigate("/read")} className='example_box-btn'>View Demo</button>
        </div>
        <div className='example_box'>
          <BsReverseListColumnsReverse className='text-3xl text-cyan-600 mx-auto mb-5' />
          <h5 className='text-white font-semibold'>Counter</h5>
          <button className='example_box-btn'>View Demo</button>
        </div>
        <div className='example_box'>
          <BsReverseListColumnsReverse className='text-3xl text-cyan-600 mx-auto mb-5' />
          <h5 className='text-white font-semibold'>Counter</h5>
          <button className='example_box-btn'>View Demo</button>
        </div>
        <div className='example_box'>
          <BsReverseListColumnsReverse className='text-3xl text-cyan-600 mx-auto mb-5' />
          <h5 className='text-white font-semibold'>Counter</h5>
          <button className='example_box-btn'>View Demo</button>
        </div>
       

      </div>

    </div>
    </div>
  )
}

export default Portfolio