import React from 'react'
import { useSelector } from 'react-redux'
import {getItemsSelector} from '../../redux/slices/cartSlices'
function Cart() {
const items = useSelector(getItemsSelector);
const total = items.reduce((a, b) => a + b.prise, 0);
    console.log(total)

  return (
    <div className='bg-slate-700 p-3 mb-4 rounded-sm text-end'>
    <p className='text-white'>My Cart{items.length}={total}</p>
  </div>
  )
}

export default Cart