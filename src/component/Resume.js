import React, {useEffect} from 'react'
import Banner from './pagebanner/Banner'

function Resume() {
  useEffect(() => {
    document.title = 'My Resume';
  }, []);
  const skilldata = [
    { skill: 'Html', progress: '100%', wt: 'w-full' },
    { skill: 'Css', progress: '100%', wt: 'w-full' },
    { skill: 'JavaScript', progress: '70%', wt: 'w-3/4' },
    { skill: 'Tailwindcss', progress: '60%', wt: 'w-2/3' },
    { skill: 'Angular', progress: '35%', wt: ' w-1/3' },
    { skill: 'React js', progress: '35%', wt: 'w-1/3' },
    { skill: 'Responsive Design', progress: '100%', wt: 'w-full' },
    { skill: 'Php', progress: '10%', wt: 'w-1/12' },
    { skill: 'Laravel', progress: '10%', wt: 'w-1/12' },
  ]
  return (
    <div>
      <Banner heading="Resume" coheading="4  Years of Experience" />
      <div className='education_wrap container mx-auto my-10'>
        <div className='grid grid-rows-1 md:grid-cols-2 grid-cols-1 gap-8'>
          <div className='education_box'>
            <div className='sec_heading'>
              <h2 className='sm:text-xl md:text-2xl text-white font-semibold w-fit capitalize  '>Education  <span className='border-b-2 border-zinc-700 block w-full'><span className='w-8 bg-slate-200 border-cyan-600 border absolute'></span></span></h2>
            </div>
            <div className='education_path my-5 border-l border-zinc-700'>
              <div className='education_path-box p-4 border-b border-zinc-700'>
                <div className='sm:flex place-items-center sm:-ml-8 -ml-0 '>
                  <small className='w-fit bg-zinc-800 text-white font-semibold border border-sky-500 rounded-full h-fit px-2 block text-[11px] me-3'>2014</small>
                  <span className='text-xs text-stone-400'>Vallabh Budhi Polytechnic, (Navsari)</span>
                </div>
                <div className=' ms-0 sm:ms-6 mt-3'>
                  <h5 className='text-white font-semibold text-base'>Diploma</h5>
                  <p className='text-xs text-zinc-300 mt-2 leading-5'>I have passed diploma in the year 2014. And I have done it in Electronic Communication. But I was interested in coding so I came into the it field.</p>
                </div>
              </div>
              <div className='education_path-box p-4 border-b border-zinc-700'>
                <div className='sm:flex place-items-center sm:-ml-8 -ml-0 '>
                  <small className='w-fit bg-zinc-800 text-white font-semibold border border-sky-500 rounded-full h-fit px-2 block text-[11px] me-3'>2019</small>
                  <span className='text-xs text-stone-400'>Self Learning</span>
                </div>
                <div className=' ms-0 sm:ms-6 mt-3'>
                  <h5 className='text-white font-semibold text-base'>Web Designing</h5>
                  <p className='text-xs text-zinc-300 mt-2 leading-5'>I have learned HTML, CSS, JS, Bootstrap for website designing from online free courses. Till date I have worked on framework projects like php, laravel, angular, react js etc. Or I have also made the website more responsive.</p>
                </div>
              </div>
              <div className='education_path-box p-4 '>
                <div className='sm:flex place-items-center sm:-ml-8 -ml-0 '>
                  <small className='w-fit bg-zinc-800 text-white font-semibold border border-sky-500 rounded-full h-fit px-2 block text-[11px] me-3'>2024</small>
                  <span className='text-xs text-stone-400'>Self Learning</span>
                </div>
                <div className=' ms-0 sm:ms-6 mt-3'>
                  <h5 className='text-white font-semibold text-base '>Frontend Developer</h5>
                  <p className='text-xs text-zinc-300 mt-2 leading-5'>Currently I am learning React JS for frontend. In future I want to become a React Frontend developer.</p>
                </div>
              </div>
            </div>
          </div>
          <div className='education_box'>
            <div className='sec_heading'>
              <h2 className='sm:text-xl md:text-2xl text-white font-semibold w-fit capitalize  '>Experience  <span className='border-b-2 border-zinc-700 block w-full'><span className='w-8 bg-slate-200 border-cyan-600 border absolute'></span></span></h2>
            </div>
            <div className='education_path my-5 border-l border-zinc-700'>
              <div className='education_path-box p-4 border-b border-zinc-700'>
                <div className='sm:flex place-items-center sm:-ml-8 -ml-0 '>
                  <small className='w-fit bg-zinc-800 text-white font-semibold border border-sky-500 rounded-full h-fit px-2 block text-[11px] me-3'>2019 - 2020</small>
                  <span className='text-xs text-stone-400'>4eversolutions (Surat)</span>
                </div>
                <div className=' ms-0 sm:ms-6 mt-3'>
                  <h5 className='text-white font-semibold text-base'>As a Web Designer</h5>
                  <p className='text-xs text-zinc-300 mt-2 leading-5'>My first company where I joined was as a fresher. I have learned a lot from here.</p>
                </div>
              </div>
              <div className='education_path-box p-4 border-b border-zinc-700'>
                <div className='sm:flex place-items-center sm:-ml-8 -ml-0 '>
                  <small className='w-fit bg-zinc-800 text-white font-semibold border border-sky-500 rounded-full h-fit px-2 block text-[11px] me-3'>2021 - 2022  </small>
                  <span className='text-xs text-stone-400'>Genisys (Surat)</span>
                </div>
                <div className=' ms-0 sm:ms-6 mt-3'>
                  <h5 className='text-white font-semibold text-base'>As a Web Designer</h5>
                  <p className='text-xs text-zinc-300 mt-2 leading-5'>I have joined the company as a web designer. In this company I have worked on many framework based projects like php, laravel, angular. It has been the best experience working with the team here. This company is my favorite.</p>
                </div>
              </div>
              <div className='education_path-box p-4 '>
                <div className='sm:flex place-items-center sm:-ml-8 -ml-0 '>
                  <small className='w-fit bg-zinc-800 text-white font-semibold border border-sky-500 rounded-full h-fit px-2 block text-[11px] me-3'>2022 - 2024</small>
                  <span className='text-xs text-stone-400'>Nivida Software (Vadodara)</span>
                </div>
                <div className=' ms-0 sm:ms-6 mt-3'>
                  <h5 className='text-white font-semibold text-base '>As a Web Designer</h5>
                  <p className='text-xs text-zinc-300 mt-2 leading-5'>Had a great experience with the team here.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='skills_wrap container mx-auto mt-10 mb-20'>
        <div className='skills_left'>
          <div className='sec_heading mb-5'>
            <h2 className='sm:text-xl md:text-2xl text-white font-semibold w-fit capitalize  '> Skills  <span className='border-b-2 border-zinc-700 block w-full'><span className='w-8 bg-slate-200 border-cyan-600 border absolute'></span></span></h2>
          </div>
          <div className='grid grid-rows-1 sm:grid-cols-2 grid-cols-1 gap-x-10 gap-y-2'>
            {
              skilldata.map(list => (
                <div className='skills_bar mt-3'>
                  <div className='skills_bar-top flex place-content-between'>
                    <h6 className='text-white font-semibold text-sm'>{list.skill}</h6>
                    <span className='text-xs text-stone-500'>{list.progress}</span>
                  </div>
                  <div className='mt-1 skills_bar-pro-wrap outline outline-1 outline-offset-2 outline-slate-500 rounded-full '>
                    <div className={`skills_bar-pro rounded-full bg-sky-500 h-1 ${list.wt}`}></div>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Resume