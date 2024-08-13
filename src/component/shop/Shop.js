import React from 'react'
import Banner from '../pagebanner/Banner'
import Products from '../../Products.json'
import Product from './Product'
import Cart from './Cart'
import { Link } from 'react-router-dom'

function Shop() {


  return (
    <>

      {/* <Banner heading="My Shop" coheading="Practicals"/> */}
      <div className='container mx-auto my-10'>
        <Link to="/portfolio"><button className="btn bg-cyan-600 py-1 mb-3 px-4 rounded-full font-light text-white flex place-items-center  ">Go Back</button></Link>
        <Cart />
        <div className='grid grid-rows-1 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 sm:gap-8 gap-4'>
          {Products.map((item) => (
            <Product {...item} />
          ))}
        </div>
      </div>

    </>
  )
}

export default Shop