import React from 'react'

function Banner(props) {
  return (
    <div className='page_banner bg-zinc-800  my-5 border-y border-zinc-700'>
    <div className='container mx-auto '>
    <div>
    <div className='flex items-center'>
     <img className='h-auto block w-max pe-3' src={props.img}/>
        <h1 className='w-full text-white text-2xl sm:text-4xl md:text-5xl font-semibold py-8 sm:py-10 md:py-20 relative'>{props.heading}  <span className=' text-zinc-300 text-end text-[12px] sm:text-sm w-full block mt-3 absolute top-0'>{props.coheading}</span></h1>
     </div>
    </div>
    </div>
</div>
  )
}

export default Banner