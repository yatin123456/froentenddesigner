import React from 'react'
import { Link } from 'react-router-dom'


function Footer() {

  const linkedin = 'https://www.linkedin.com/';
  const instagram = 'https://www.instagram.com/';
  const twitter = 'https://www.x.com/'

  return (
    <div className='footer_wrap border-t border-zinc-700 py-3 '>
      <div className=' mx-auto container sm:flex content   justify-between'>
        <div className='footer_left-link sm:text-start text-center'>
          <Link className='menu_link text-sm me-10 ms-0' to={linkedin}>Linkedin</Link>
          <Link className='menu_link text-sm me-10 ms-0' to={instagram}>Instagram</Link>
          <Link className='menu_link text-sm  ms-0 me-0' to={twitter}>Twitter</Link>
        </div>
        <div className='footer_right-link'>
          <p className='p-0 text-zinc-400 text-sm text-center sm:text-sm text-[10px]'>© 2024 All rights reserved. variya pradip</p>
        </div>
      </div>
    </div>
  )
}

export default Footer