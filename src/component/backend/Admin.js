import React, { useState } from 'react'
import coinimg from '../../images/coinbg.png'
import { useNavigate } from 'react-router-dom'

function Admin() {

    const user = 'alocatedadmin@gmail.com';
    const pass = '123456';
    const [email, setEmail] = useState(user);
    const [password, setPassword] = useState(pass);
    const [error, setError] = useState({ email: '', password: '' });
    const history = useNavigate();

  

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("clicked")

        let valid = true;

        // Reset errors before validation
        setError({ email: '', password: '' });

        // Simple validation
        if (email.trim() === '') {
            setError(prev => ({ ...prev, email: 'Email is required' }));
            valid = false;
          } else if (email !== user) {
            setError(prev => ({ ...prev, email: 'Email is incorrect' }));
            valid = false;
          }
      
          if (password.trim() === '') {
            setError(prev => ({ ...prev, password: 'Password is required' }));
            valid = false;
          } else if (password !== pass) {
            setError(prev => ({ ...prev, password: 'Password is incorrect' }));
            valid = false;
          }

        if (valid) {
            // Perform login logic here (e.g., API call)
            history('/panel')
        }


    }
    return (
        <>
            <div className='mainbg'>
                <div className='container mx-auto py-5'>
                    <div className='admin_form xl:w-[500px] md:w-[500px] mx-auto'>
                        <div className='example_box'>
                            <div className=''>
                                <div className=''>
                                    <img className='w-1/3 mx-auto' src={coinimg} />
                                </div>
                                <p className='text-gray-400 text-sm text-center pt-2 xl:w-5/6 md:w-5/6 mx-auto' >By logging in this form you can get full admin access. In which you can also update and delete all your data as per your convenience.</p>
                            </div>
                            <form className='text-start px-2'>

                                <div>
                                    <div className=''>
                                        <label className='block text-white pt-4 pb-1'>Email</label>
                                        <input onChange={(e) => setEmail(e.target.value)} type='email' id='email' name='email' className='bg-transparent border border-zinc-700 px-2 py-1 rounded w-full text-white' />
                                        {error.email && <p style={{ color: 'red' }}>{error.email}</p>}
                                    </div>
                                    <div className=''>
                                        <label className='block text-white pt-4 pb-1'>Password</label>
                                        <input onChange={(e) => setPassword(e.target.value)} type='text' id='passeord' name='passeord' className='bg-transparent border border-zinc-700 px-2 py-1 rounded w-full text-white' />
                                        {error.password && <p style={{ color: 'red' }}>{error.password}</p>}
                                    </div>


                                    <button onClick={handleSubmit} className="mx-auto  mt-5 mb-4 btn bg-cyan-600 py-1 px-4 rounded-full font-light text-white flex place-items-center  ">Login</button>
                                </div>
                                <p className='text-gray-400 text-xs text-center pt-2' >Do not attempt to login if you do not have credentials.</p>
                                <div>

                                </div>




                            </form >
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Admin