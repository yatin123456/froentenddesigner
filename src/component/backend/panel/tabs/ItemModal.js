
import React, { useState, useEffect } from "react";


function ItemModal({ isOpen, onClose, userOnSubmit,poolOnSubmit ,demoOnSubmit, currentItem, animetion, modelid }) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [route, setRoute] = useState("");
    const [status, setStatus] = useState("")
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [point, setPoint] = useState("")
    const [stack, setStack] = useState("")
    const [percentage, setPercentage] = useState("")
    const [symbol, setSymbol] = useState("")
    const [totalvalue, setTotalvalue] = useState("")
    const [minstack, setMinstack] = useState("")
    const [maxstack, setMaxstack] = useState("")
    const [per, setPer] = useState("")
    const [duration, setDuretion] = useState("")
    const [skill, setSkill] = useState("")
    const [position, setPosition] = useState("")
    const [pool, setPool] = useState("")
    const [data, setData] = useState([]);
    const [options, setOptions] = useState([]);
    const [stackmin, setMinLimit] = useState([0]);
    const [stackmax, setMaxLimit] = useState([0]);
    const [stackmain, setMainLimit] = useState([]);
    const [sum , setSum] = useState('')
    const header = { "Access-control-Allow-Origin": "*" };
      console.log('ool', pool)
      const handleCheckboxChange = (event) => {
        setPercentage(event.target.value);
    };
    
    useEffect(() => {
      if (currentItem) {
        setTitle(currentItem.title);
        setDescription(currentItem.description);
        setRoute(currentItem.route);
        setEmail(currentItem.email);
        setName(currentItem.name);
        setPoint(currentItem.point);
        setStack(currentItem.stack);
        setPer(currentItem.per);
        setSymbol(currentItem.symbol);
        setTotalvalue(currentItem.totalvalue);
        setMaxstack(currentItem.maxstack);
        setMinstack(currentItem.minstack);
        setPercentage(currentItem.percentage);
        setDuretion(currentItem.duration);
        setSkill(currentItem.skill)
        setStatus(currentItem.status)
        setPosition(currentItem.position)
        setPool(currentItem.pool)
      } else {
        setTitle("");
        setDescription("");
        setRoute("")
        setStatus("")
        setName("")
        setEmail("")
        setPoint("")
        setStack("")
        setPer("")
        setSymbol("")
        setTotalvalue("")
        setMaxstack("")
        setMinstack("")
        setPer("")
        setDuretion("")
        setSkill("")
        setPosition("")
        setPool("")
      }
      fetch('https://667eaaa0f2cb59c38dc69de2.mockapi.io/finaldata')
      .then(response => response.json())
      .then(data => {
          setData(data);
          const item = data;
          const filtered = data.filter(item => item.pool == pool);
          if (Array.isArray(filtered)) {
              const totalSum = filtered.reduce((acc, item) => acc + (Number(item.point / 100 * item.percentage) || 0), 0);
              setSum(totalSum);
          }
          setData(filtered, pool);
      })
      .catch(error => console.error('Error fetching data:', error))
      fetch('https://66cea862901aab24841f1914.mockapi.io/Poollist')
            .then(response => response.json())
            .then(data => {
                setData(data);
                const item = data;
                const namesArray = data.map(item => item.symbol);
                const stacklimit = data.find(item => item.symbol === pool && item.minstack !== undefined);
           
                if (stacklimit) {
                    setMinLimit(stacklimit.minstack);
                    setMaxLimit(stacklimit.maxstack);
                    setPer(stacklimit.per);
                    console.log('minstack', stacklimit.minstack)
                    console.log('maxstack',stacklimit.maxstack)
                }
                setOptions(namesArray);
                setMainLimit(stacklimit);

            })
    }, [currentItem]);
  console.log(status)
    const demoSubmit = () => {
      const itemData = {
        title,description, route,skill, status 
      };
      if (currentItem) {
        demoOnSubmit({ ...currentItem, ...itemData });
      } else {
        demoOnSubmit(itemData);
      }
    };
    const userSubmit = () => {
      const itemData = {
         name, email, point,  position,  pool,  stack, percentage, header
      };
      if (currentItem) {
        userOnSubmit({ ...currentItem, ...itemData });
      } else {
        userOnSubmit(itemData);
      }
    };
    const poolSubmit = () => {
      const itemData = {
        name,totalvalue, status
      };
      if (currentItem) {
        poolOnSubmit({ ...currentItem, ...itemData });
      } else {
        poolOnSubmit(itemData);
      }
    };
    
  return (
    isOpen ? (
        <div className={`admin_form w-full mx-auto modal-overlay ${animetion ? 'fade-in' : 'fade-out'}`}>
          <div className='example_box xl:w-[500px] md:w-[500px] p-0'>
            <div className='p-2 text-white bg-gray-900  rounded-t-xl border-b border-zinc-700 flex justify-between'>
              <p className='m-0 text-start '>Update Form</p>
                <span className='' onClick={onClose}>Close</span>
            </div>
            <form className='text-start p-4 pt-0'>
            
              <div>
          
                {(modelid == 'demomodel') ? (
                  <>
                  <div className=''>
                    <label className='block text-white pt-4 pb-1'>Title</label>
                    <input value={title} onChange={(e) => setTitle(e.target.value)} type='text' id='title' name='title' className='bg-transparent border border-zinc-700 px-2 py-1 rounded w-full text-white' />
                  </div>
                  <div className=''>
                    <label className='block text-white pt-4 pb-1'>Description</label>
                    <textarea value={description} onChange={(e) => setDescription(e.target.value)} type='text' id='description' name='description' className='bg-transparent border border-zinc-700 px-2 py-1 rounded w-full text-white' />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                  <div className=''>
                    <label className='block text-white pt-4 pb-1'>Route</label>
                    <input value={route} onChange={(e) => setRoute(e.target.value)} type='text' id='route' name='title' className='bg-transparent border border-zinc-700 px-2 py-1 rounded w-full text-white' />
                  </div>
                  <div className=''>
                    <label className='block text-white pt-4 pb-1'>Skill</label>
                    <input value={skill} onChange={(e) => setSkill(e.target.value)} type='text' id='skill' name='skill' className='bg-transparent border border-zinc-700 px-2 py-1 rounded w-full text-white' />
                  </div>
                  </div>
                  <div className=''>
                  <label className='block text-white pt-4 pb-1'>Status</label>
                  <select className='bg-zinc-800 border border-zinc-700 px-2 py-1 rounded w-full text-white' value={status} onChange={(e) => setStatus(e.target.value)} id='status' name='status' >
                    <option value="null">Select</option>
                    <option value="active">Active</option>
                    <option value="notactive">Not Active</option>
                  </select>
                </div>
               </>
               ) :''}
               {(modelid == 'usermodel') ? (
                  <>
                 <div className=''>
                 <label className='block text-white pt-4 pb-1'>Name</label>
                 <input value={name} onChange={(e) => setName(e.target.value)} type='text' id='name' name='name' className='bg-transparent border border-zinc-700 px-2 py-1 rounded w-full text-white' />
               </div>
                 <div className=''>
                  <label className='block text-white pt-4 pb-1'>Email</label>
                  <input value={email} onChange={(e) => setEmail(e.target.value)} type='text' id='email' name='email' className='bg-transparent border border-zinc-700 px-2 py-1 rounded w-full text-white' />
                </div>
                <div className="grid grid-cols-3 gap-4">
                 <div className=''>
                 <label className='block text-white pt-4 pb-1'>Point</label>
                 <input value={point} onChange={(e) => setPoint(e.target.value)} type='text' id='point' name='point' className='bg-transparent border border-zinc-700 px-2 py-1 rounded w-full text-white' />
               </div>
               <div className=''>
                  <label className='block text-white pt-4 pb-1'>Position</label>
                  <select className='bg-zinc-800 border border-zinc-700 px-2 py-1 rounded w-full text-white' value={position} onChange={(e) => setPosition(e.target.value)} id='position' name='status' >
                    <option value="null">Select</option>
                    <option value="active">Active</option>
                    <option value="notactive">Not Active</option>
                  </select>
                </div>
                
                {/* <div className='border border-orange-600 rounded mt-2 bg-orange-950'>
                 <label className='block text-white p-2 text-sm font-light'>Pool<span className="text-orange-600 font-semibold">{percentage}%</span> coin</label>
               </div> */}
                  {(position === 'active') ? (
                  <>
                      <div className=''>
                        <label className='block text-white pt-4 pb-1'>Stack</label>
                        <select className='bg-zinc-800 border border-zinc-700 px-2 py-1 rounded w-full text-white' value={stack} id='stack' name='stack' onChange={(e) => setStack(e.target.value)}>
                          <option value={false}>No</option>
                          <option value={true}>Yes</option>
                        </select>
                      </div>
                      
                     
                  </>
                ) :''}
               
               </div>
                
               <p className={`  ${!(position === 'notactive' || position === 'null' || position == '') ? 'hidden' : ''} w-full p-2 rounded-md my-2 text-white capitalize text-sm text-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ...`}>
               If you have not taken advantage of stacking. So first you must be an active user.
                </p>
             
                {(stack == 'true') ? (
                        <>
                          <div>
                            < label className='block text-white pt-4 pb-1'>Select A pool </label>
                            <select className='bg-zinc-800 border border-zinc-700 px-2 py-1 rounded w-full text-white' value={pool} id='pool' name='pool' onChange={(e) => setPool(e.target.value)}>
                              <option value="">Select</option>
                              {options.map((name, index) => (
                                <option key={index} value={name}>
                                  {name}
                                </option>
                              ))}

                            </select>
                            <div className=''>
                              <p className='text-gray-400 text-sm '>This pool give a  <span className='text-cyan-600'>{per}%</span> APR</p>
                              <p className='text-gray-400 text-sm '>You can stack minimum <span className='text-cyan-600'>${stackmin}</span>&nbsp;& Max <span className='text-cyan-600'>${stackmax}</span></p>

                            </div>
                            <div className=''>
                              < label className='block text-white pt-4 pb-1'>How much do you want to stack? </label>
                              <div className='flex'>
                                <div disabled className={`border border-slate-600 rounded-sm h-8 flex w-1/4 ${((point / 100 * 10) > stackmin) ? '' : 'notallow '}`}>
                                  <div className={`flex disabled:opacity-15 relative w-full ${(percentage === '10') ? 'bg-cyan-600' : ''}`}>
                                    <input
                                      type="checkbox"
                                      value="10"
                                      checked={percentage === '10'}
                                      onChange={handleCheckboxChange}
                                      className={`w-full h-8  opacity-0 absolute left-0 top-0 ${((point / 100 * 10) > stackmin) ? '' : 'hidden'}`}
                                    />
                                    <span className='m-auto text-white'>10%</span>
                                  </div>
                                </div>

                                <div disabled className={`border border-slate-600 rounded-sm h-8 flex w-1/4 ${((point / 100 * 50) > stackmin) ? '' : 'notallow '}`}>
                                  <div className={`flex relative w-full ${(percentage === '50') ? 'bg-cyan-600' : ''}`}>
                                    <input
                                      type="checkbox"
                                      value="50"
                                      checked={percentage === '50'}
                                      onChange={handleCheckboxChange}
                                      className={`w-full h-8  opacity-0 absolute left-0 top-0 ${((point / 100 * 50) > stackmin) ? '' : 'hidden'}`}
                                    />
                                    <span className='m-auto text-white'>50%</span>
                                  </div>
                                </div>

                                <div disabled className={`border border-slate-600 rounded-sm h-8 flex w-1/4 ${((point / 100 * 75) > stackmin) ? '' : 'notallow '}`}>
                                  <div className={`flex relative w-full ${(percentage === '75') ? 'bg-cyan-600' : ''}`}>
                                    <input
                                      type="checkbox"
                                      value="75"
                                      checked={percentage === '75'}
                                      onChange={handleCheckboxChange}
                                      className={`w-full h-8  opacity-0 absolute left-0 top-0 ${((point / 100 * 75) > stackmin) ? '' : 'hidden'}`}
                                    />
                                    <span className='m-auto text-white'>75%</span>
                                  </div>
                                </div>
                                <div disabled className={`border border-slate-600 rounded-sm h-8 flex w-1/4 ${((point / 100 * 100) > stackmin) ? '' : 'notallow '}`}>
                                  <div className={`flex relative w-full ${(percentage === '100') ? 'bg-cyan-600' : ''}`}>
                                    <input
                                      type="checkbox"
                                      value="100"
                                      checked={percentage === '100'}
                                      onChange={handleCheckboxChange}
                                      className={`w-full h-8  opacity-0 absolute left-0 top-0 ${((point / 100 * 100) > stackmin) ? '' : 'hidden'}`}
                                    />
                                    <span className='m-auto text-white'>100%</span>
                                  </div>
                                </div>


                              </div>
                              <p className={` ${((point / 100 * 10) > stackmin) ? 'hidden' : ((point / 100 * 50) > stackmin) ? 'hidden' : ((point / 100 * 75) > stackmin) ? 'hidden' : ((point / 100 * 100) > stackmin) ? 'hidden' : 'text-red-600'} text-sm `}>You are not aligeble for this pool </p>
                              <div className=''>
                                <p className='text-gray-400 text-sm '>You have stack your <span className='text-orange-400' >
                                  {(point / 100 * percentage).toFixed(2)}</span> coin</p>
                              </div>
                            </div>
                          </div>
                        </>
                      ) : ''}
                {/* <div className='border border-orange-600 rounded mt-2 bg-orange-950'>
                 <label className='block text-white p-2 text-sm font-light'>You stack your <span className="text-orange-600 font-semibold">{percentage}%</span> coin</label>
               </div> */}
               </>
               ):''}
               {(modelid == 'poolmodel') ? (
                <>
                <div className=''>
                <label className='block text-white pt-4 pb-1'>Pool Name</label>
                <input value={symbol} onChange={(e) => setSymbol(e.target.value)} type='text' id='symbol' name='symbol' className='bg-transparent border border-zinc-700 px-2 py-1 rounded w-full text-white' />
              </div>
              <div className=''>
              <label className='block text-white pt-4 pb-1'>Capacity</label>
              <input value={totalvalue} onChange={(e) => setTotalvalue(e.target.value)} type='text' id='totalvalue' name='totalvalue' className='bg-transparent border border-zinc-700 px-2 py-1 rounded w-full text-white' />
            </div>
            <div className=''>  
              <p className=" text-xs text-gray-500">Minimum Stack <span className="text-orange-600">{minstack}</span></p>
              <p className=" text-xs text-gray-500">Maximum Stack <span className="text-orange-600">{maxstack}</span></p>
              <p className=" text-xs text-gray-500">APR% <span className="text-orange-600">{per}</span></p>
              <p className=" text-xs text-gray-500">Duretion = <span className="text-orange-600">{duration}</span></p>
            </div>
            
            </>
               ):''}
              
                {/* <div className=''>
                  <label className='block text-white pt-4 pb-1'>Status</label>
                  <select className='bg-zinc-800 border border-zinc-700 px-2 py-1 rounded w-full text-white' value={status} onChange={(e) => setStatus(e.target.value)} id='status' name='status' >
                    <option value="null">Select</option>
                    <option value="active">Active</option>
                    <option value="notactive">Not Active</option>
                  </select>
                </div> */}

               {(modelid == 'usermodel') ? (
                 <button  onClick={() => userSubmit()} className="mx-auto  mt-5 mb-4 btn bg-cyan-600 py-1 px-4 rounded-full font-light text-white flex place-items-center  ">{currentItem ? "User Update" : "User Create"}</button>
               ) :(modelid == 'demomodel') ?  (
                <button  onClick={() => demoSubmit()} className="mx-auto  mt-5 mb-4 btn bg-cyan-600 py-1 px-4 rounded-full font-light text-white flex place-items-center  ">{currentItem ? "Demo Update" : "Demo Create"}</button>
               ) : (
                <button  onClick={() => poolSubmit()} className="mx-auto  mt-5 mb-4 btn bg-cyan-600 py-1 px-4 rounded-full font-light text-white flex place-items-center  ">{currentItem ? "Pool Update" : "Pool Create"}</button>
               )}
              </div>
              <div>
              </div>
            </form >
          </div>
        </div>
    ) : null
  
  );
}

export default ItemModal


// isOpen ? (
//     <div className={`admin_form w-full mx-auto modal-overlay ${isAnimating ? 'fade-in' : 'fade-out'}`}>
//       <div className='example_box xl:w-[500px] md:w-[500px] p-0'>
//         <div className='p-2 text-white bg-gray-900  rounded-t-xl border-b border-zinc-700 flex justify-between'>
//           <p className='m-0 text-start '>Update Form</p>
//             <span className='' onClick={closeModal}>Close</span>
//         </div>
//         <form className='text-start p-4 pt-0'>
//           <div>
//             <div className=''>
//               <label className='block text-white pt-4 pb-1'>Title</label>
//               <input value={title} onChange={(e) => setTitle(e.target.value)} type='text' id='title' name='title' className='bg-transparent border border-zinc-700 px-2 py-1 rounded w-full text-white' />

//             </div>
//             <div className=''>
//               <label className='block text-white pt-4 pb-1'>Description</label>
//               <textarea value={description} onChange={(e) => setDescription(e.target.value)} type='text' id='description' name='description' className='bg-transparent border border-zinc-700 px-2 py-1 rounded w-full text-white' />

//             </div>
//             <div className=''>
//               <label className='block text-white pt-4 pb-1'>Route</label>
//               <input value={route} onChange={(e) => setRoute(e.target.value)} type='text' id='route' name='title' className='bg-transparent border border-zinc-700 px-2 py-1 rounded w-full text-white' />
//             </div>
//             <div className=''>
//               <label className='block text-white pt-4 pb-1'>Status</label>
//               <select className='bg-zinc-800 border border-zinc-700 px-2 py-1 rounded w-full text-white' value='' id='position' name='position' >
//                 <option value="null">Select</option>
//                 <option value="active">Active</option>
//                 <option value="notactive">Not Active</option>
//               </select>
//             </div>

//             <button  onClick={handleUpdate} className="mx-auto  mt-5 mb-4 btn bg-cyan-600 py-1 px-4 rounded-full font-light text-white flex place-items-center  ">Update</button>
//           </div>

//           <div>
       

//           </div>




//         </form >
//       </div>
//     </div>
// ) : null