
import React, { useState, useEffect } from "react";


function ItemModal({ isOpen, onClose, onSubmit, currentItem, animetion }) {
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
        setDuretion(currentItem.duration)
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
      }
    }, [currentItem]);
  
    const handleSubmit = () => {
      const itemData = {
        title,description, route, status
      };
      if (currentItem) {
        onSubmit({ ...currentItem, ...itemData });
      } else {
        onSubmit(itemData);
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
                {title ? (
                  <>
                  <div className=''>
                    <label className='block text-white pt-4 pb-1'>Title</label>
                    <input value={title} onChange={(e) => setTitle(e.target.value)} type='text' id='title' name='title' className='bg-transparent border border-zinc-700 px-2 py-1 rounded w-full text-white' />
                  </div>
                  <div className=''>
                    <label className='block text-white pt-4 pb-1'>Description</label>
                    <textarea value={description} onChange={(e) => setDescription(e.target.value)} type='text' id='description' name='description' className='bg-transparent border border-zinc-700 px-2 py-1 rounded w-full text-white' />
                  </div>
                  <div className=''>
                    <label className='block text-white pt-4 pb-1'>Route</label>
                    <input value={route} onChange={(e) => setRoute(e.target.value)} type='text' id='route' name='title' className='bg-transparent border border-zinc-700 px-2 py-1 rounded w-full text-white' />
                  </div>
               </>
               ) : ''}
               {email ? (
                  <>
                 <div className=''>
                 <label className='block text-white pt-4 pb-1'>Name</label>
                 <input value={name} onChange={(e) => setRoute(e.target.value)} type='text' id='name' name='name' className='bg-transparent border border-zinc-700 px-2 py-1 rounded w-full text-white' />
               </div>
                 <div className=''>
                  <label className='block text-white pt-4 pb-1'>Email</label>
                  <input value={email} onChange={(e) => setTitle(e.target.value)} type='text' id='title' name='title' className='bg-transparent border border-zinc-700 px-2 py-1 rounded w-full text-white' />
                </div>
                 <div className=''>
                 <label className='block text-white pt-4 pb-1'>Point</label>
                 <input value={point} onChange={(e) => setRoute(e.target.value)} type='text' id='point' name='point' className='bg-transparent border border-zinc-700 px-2 py-1 rounded w-full text-white' />
               </div>
                 <div className=''>
                 <label className='block text-white pt-4 pb-1'>Stack</label>
                 <input value={stack} onChange={(e) => setRoute(e.target.value)} type='text' id='stack' name='stack' className='bg-transparent border border-zinc-700 px-2 py-1 rounded w-full text-white' />
               </div>
                 <div className='border border-orange-600 rounded mt-2 bg-orange-950'>
                 <label className='block text-white p-2 text-sm font-light'>You stack your <span className="text-orange-600 font-semibold">{percentage}%</span> coin</label>
               </div>
               </>
               ):''}
               {symbol ? (
                <>
                <div className=''>
                <label className='block text-white pt-4 pb-1'>Pool</label>
                <input value={name} onChange={(e) => setRoute(e.target.value)} type='text' id='stack' name='stack' className='bg-transparent border border-zinc-700 px-2 py-1 rounded w-full text-white' />
              </div>
              <div className=''>
              <label className='block text-white pt-4 pb-1'>Capacity</label>
              <input value={totalvalue} onChange={(e) => setRoute(e.target.value)} type='text' id='stack' name='stack' className='bg-transparent border border-zinc-700 px-2 py-1 rounded w-full text-white' />
            </div>
            <div className=''>
              <p>Minimum Stack {minstack}</p>
              <p>Maximum Stack {maxstack}</p>
              <p>APR (%) {per}</p>
              <p>Duretion = {duration}</p>
            </div>
            </>
               ):''}
              
                <div className=''>
                  <label className='block text-white pt-4 pb-1'>Status</label>
                  <select className='bg-zinc-800 border border-zinc-700 px-2 py-1 rounded w-full text-white' value={status} onChange={(e) => setStatus(e.target.value)} id='position' name='position' >
                    <option value="null">Select</option>
                    <option value="active">Active</option>
                    <option value="notactive">Not Active</option>
                  </select>
                </div>

               {email ? (
                 <button  onClick={handleSubmit} className="mx-auto  mt-5 mb-4 btn bg-cyan-600 py-1 px-4 rounded-full font-light text-white flex place-items-center  ">{currentItem ? "User Update" : "Create"}</button>
               ) :title ?  (
                <button  onClick={handleSubmit} className="mx-auto  mt-5 mb-4 btn bg-cyan-600 py-1 px-4 rounded-full font-light text-white flex place-items-center  ">{currentItem ? "Demo Update" : "Create"}</button>
               ) : (
                <button  onClick={handleSubmit} className="mx-auto  mt-5 mb-4 btn bg-cyan-600 py-1 px-4 rounded-full font-light text-white flex place-items-center  ">{currentItem ? "Pool Update" : "Create"}</button>
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