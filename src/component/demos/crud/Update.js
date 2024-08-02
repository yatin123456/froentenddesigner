
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Banner from '../../pagebanner/Banner';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';


function Update() {

    const [id, setId] = useState(0);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [point, setPoint] = useState("");
    const [position, setPosition] = useState();
    const [file, setFile] = useState();
    const navigate = useNavigate();
    function handleChange(e) {
        setFile(URL.createObjectURL(e.target.files[0]));
    }
    useEffect(() => {
        setId(localStorage.getItem("id"));
        setName(localStorage.getItem("name"));
        setEmail(localStorage.getItem("email"));
        setPoint(localStorage.getItem("point"));
        setPosition(localStorage.getItem("position"));
        setFile(localStorage.getItem("file"));

    }, []);


    const handleUpdate = (e) => {
        e.preventDefault();
        axios.put(`https://667eaaa0f2cb59c38dc69de2.mockapi.io/finaldata/${id}`,
            {
                name: name, email: email, point: point, position: position, file: file
            }
        ).then(() => {
            navigate("/read")
        })
        toast.success('Updated suscessfully');

    }
    return (
        <> <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
        />
            <Banner heading="Update User Form" coheading="Form" />
            <div className='container mx-auto my-10'>
                <Link to="/read"><button className="btn bg-cyan-600 py-1 px-4 rounded-full font-light text-white flex place-items-center  ">Go Back</button></Link>
                <form className='text-start'>

                    <div className='grid grid-rows-1  md:grid-cols-1  sm:gap-8 gap-4'>
                        <div>
                            <label className='block text-white pt-4 pb-1'>Name</label>
                            <input value={name} onChange={(e) => setName(e.target.value)} type='name' id='name' name='name' className='bg-zinc-800 border border-zinc-700 px-2 py-1 rounded w-full text-white' />

                            <label className='block text-white pt-4 pb-1'>Email</label>
                            <input value={email} onChange={(e) => setEmail(e.target.value)} type='email' id='email' name='email' className='bg-zinc-800 border border-zinc-700 px-2 py-1 rounded w-full text-white' />

                            <div className=' sm:flex'>
                                <div className='sm:pe-2 sm:w-1/2'>
                                    <label className='block text-white pt-4 pb-1'>Point</label>
                                    <input value={point} onChange={(e) => setPoint(e.target.value)} type='point' id='point' name='point' className='bg-zinc-800 border border-zinc-700 px-2 py-1 rounded w-full text-white' />
                                </div>
                                <div className='sm:w-1/2'>
                                    <label className='block text-white pt-4 pb-1'>User position</label>
                                    <select className=' bg-zinc-800 border border-zinc-700 px-2 py-1 rounded w-full text-white' value={position} id='position' name='position' onChange={(e) => setPosition(e.target.value)}>
                                        <option value="active">Active</option>
                                        <option value="notactive">Not Active</option>

                                    </select>
                                </div>
                            </div>

                        </div>
                        <div>
                            <div className='flex h-fit border border-cyan-700 rounded-md p-1 place-items-center mt-1'>
                                <img src={file} className='w-16 h-auto p-3 rounded-md   bg-cyan-950' />
                                <input type="file" name='file' id='file' className='ps-4' onChange={handleChange} />

                            </div>

                        </div>

                    </div>



                    <button
                        onClick={handleUpdate}
                        className="mx-auto  mt-5 btn bg-cyan-600 py-1 px-4 rounded-full font-light text-white flex place-items-center  ">Update</button>
                </form>
            </div>
        </>
    )
}

export default Update