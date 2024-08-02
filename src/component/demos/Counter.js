import React, { useState, useEffect } from 'react'
import Banner from '../pagebanner/Banner';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom"
import { BsArrowLeft } from "react-icons/bs";

function Counter() {

    const [number, setNumber] = useState(0);
    const [value, setValue] = useState('10');
    const navigate = useNavigate()
    useEffect(() => {
        document.title = 'Counter Demo';
      }, []);
    const addnumber = () => {
        setNumber(number + 1);
        if ((number + 1) == value) {
            toast.success('You reach maximum value');
        }
        console.log(number)
    }
    const notify = () => toast("Wow so easy!");
    const removernumber = () => {
        setNumber(number - 1); 
    }
    const handleChange = (e) => {
        setValue(e.target.value);
    };
    const goBack=()=>{navigate(-1);}
    return (
        <>
        
           <Banner heading="Counter Board" coheading="4  Years of Experience"/>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
            />
            <div className='container mx-auto my-10 text-center'>
            <div className='back_bar text-start'>
                <button onClick={()=>goBack()} className="btn bg-cyan-600 py-1 px-4 rounded-full font-light text-white flex place-items-center  "><BsArrowLeft  className='text-xl me-2' />Go Back</button>
                </div>
                <div className='p-4'>
                    <p className='text-white'>Add Your Custom Counter Limit</p>
                    <select className='px-10 rounded-md bg-zinc-800 text-white border  border-zinc-400 my-4 w-40' value={value} onChange={handleChange}>
                        <option value="10">10</option>
                        <option value="20">20</option>
                        <option value="30">30</option>
                    </select>
                </div>

                <h2 className='text-white font-semibold'>click on button for chang the number</h2>
                <h4 className='text-9xl text-center font-bold text-white'>{number}</h4>
                <div className='my-5'>
                    <button onClick={addnumber} className='rounded-full px-4 me-5 p-1 bg-cyan-600 disabled:opacity-50 disabled:cursor-not-allowed' disabled={number >= value ? true : false}>Add Number</button>
                    <button onClick={removernumber} className='rounded-full px-4  p-1 bg-cyan-600 disabled:opacity-50 disabled:cursor-not-allowed' disabled={number <= 0 ? true : false}>Remove Number</button>
                </div>

            </div>
        </>
    )
}

export default Counter