import { useEffect } from 'react'
import React from 'react'
import userimg from '../images/user.jpeg'
import { BsBricks } from "react-icons/bs";
import { BsPeople } from "react-icons/bs";
import { BsReverseListColumnsReverse } from "react-icons/bs";

function About() {
    useEffect(() => {
        document.title = 'About Me';
    }, []);
    return (
        <>
            <div className='container mx-auto'>
                <div className='about_one-wrap sm:py-20 py-10 sm:flex z-10 block'>
                    <div className='about_one-left sm:w-2/4'>
                        <div className='about_one-img w-2/3 ms-auto sm:me-10 me-auto'>
                            <img className='rounded-full border-[16px] shadow-[0 0 25px 0 rgba(0, 0, 0, .8)] border-zinc-700' src={userimg} alt='user-img' />
                        </div>
                    </div>
                    <div className='about_one-right sm:w-2/4 flex place-items-center '>
                        <div className='about_one-right text-center sm:text-start sm:pt-0 mt-10'>
                            <span className='font-light text-zinc-400'>Frontend Designer</span>
                            <h1 className='text-cyan-600 text-2xl sm:text-5xl font-bold sm:text-white'>Variya Pradip</h1>
                            <p className='my-5 text-sm  text-zinc-300 sm:pe-5'>Fusce tempor magna mi, non egestas velit ultricies nec. Aenean convallis, risus non condimentum gravida, odio mauris ullamcorper felis, ut venenatis purus ex eu mi. Quisque imperdiet lacinia urna, a placerat sapien pretium eu.</p>
                            <button className='com_btn  py-2 px-5 '>Contact</button>
                        </div>
                    </div>
                    <div className='absolute  bottom-20  border border-zinc-300 bg-cyan-600  spiner sm:block hidden'>
                    </div>
                </div>
                <div className=''>
                    <p className='bg-orange-900 border-orange-600 rounded-md p-2 text-orange-500 capitalize border'>demo section 1</p>
                </div>
                <div className=''>
                    <p className='bg-orange-900 border-orange-600 rounded-md p-2 text-orange-500 capitalize border'>demo section 2</p>
                </div>
                <div className=''>
                    <p className='bg-orange-900 border-orange-600 rounded-md p-2 text-orange-500 capitalize border'>demo section 3</p>
                </div>
                <div className='what_ido-wrap sm:py-20 py-10 '>
                    <div className='sec_heading'>
                        <h2 className='sm:text-xl md:text-2xl text-white font-semibold w-fit capitalize  '>what i do   <span className='border-b-2 border-zinc-700 block w-full'><span className='w-8 bg-slate-200 border-cyan-600 border absolute'></span></span></h2>
                    </div>
                    <div className='my-10 grid grid-rows-2 md:grid-cols-2 sm:grid-cols-1 gap-10'>
                        <div className='what_ido-box flex'>
                            <div className='what_ido-img w-1/6 '>
                                <BsBricks className='xl:text-5xl md:text-4xl sm:text-4xl text-4xl text-cyan-600' />
                            </div>
                            <div className='what_ido-content w-5/6'>
                                <h3 className='text-white font-semibold '>Web Design</h3>
                                <p className='sm:text-sm text-[12px] font-light  tracking-wide text-zinc-300 '>I can make a website responsive very well. Whatever issues there are in design. I am expert in solving them.And can also do animation quite well.</p>
                            </div>
                        </div>
                        <div className='what_ido-box flex'>
                            <div className='what_ido-img w-1/6 '>
                                <BsPeople className='xl:text-5xl md:text-4xl sm:text-4xl text-4xl text-cyan-600' />
                            </div>
                            <div className='what_ido-content w-5/6'>
                                <h3 className='text-white font-semibold '>Teamwork</h3>
                                <p className='sm:text-sm text-[12px] font-light  tracking-wide text-zinc-300 '>It felt good to work with my team because I got the most experience by working with my team. Or I seem to bond quickly with my team member.</p>
                            </div>
                        </div>
                        <div className='what_ido-box flex'>
                            <div className='what_ido-img w-1/6 '>
                                <BsReverseListColumnsReverse className='xl:text-5xl md:text-4xl sm:text-4xl text-4xl text-cyan-600' />
                            </div>
                            <div className='what_ido-content w-5/6'>
                                <h3 className='text-white font-semibold '>Framework</h3>
                                <p className='sm:text-sm text-[12px] font-light  tracking-wide text-zinc-300 '>Till date, in these 4 years, I have worked with frameworks like PHP, Laravel, Angular, React etc. Because of which I like React a lot and I am learning React.</p>
                            </div>
                        </div>


                    </div>
                    <div className='absolute  bottom-0  border border-zinc-300 bg-cyan-600  spiner2 sm:block hidden'>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About