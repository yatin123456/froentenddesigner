import React from 'react'
import { useDispatch } from 'react-redux'
import { addItem } from '../../redux/slices/cartSlices';

function Product(props) {

  const dispatch = useDispatch();
    
  return (
    <>
      
        <div className='example_box'>
            <img className='' src={props.image} />
          <h5 className='text-white font-semibold'>{props.name}</h5>
          <p className='text-white'>Prise : {props.prise}</p>
          <button   className='example_box-btn' onClick={e => dispatch(addItem({name: props.prise}))}>Add To Cart</button>
        </div>
       
    </>
  )
}

export default Product