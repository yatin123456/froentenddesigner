
import React, { useState, useEffect } from "react";


function ItemModal({ isOpen, onClose, onSubmit, currentItem, animetion }) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [route, setRoute] = useState("");
    const [status, setStatus] = useState("")
    
    useEffect(() => {
      if (currentItem) {
        setTitle(currentItem.title);
        setDescription(currentItem.description);
        setRoute(currentItem.route);
        setStatus(currentItem.status);
      } else {
        setTitle("");
        setDescription("");
        setRoute("")
        setStatus("")
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
                <div className=''>
                  <label className='block text-white pt-4 pb-1'>Status</label>
                  <select className='bg-zinc-800 border border-zinc-700 px-2 py-1 rounded w-full text-white' value={status} onChange={(e) => setStatus(e.target.value)} id='position' name='position' >
                    <option value="null">Select</option>
                    <option value="active">Active</option>
                    <option value="notactive">Not Active</option>
                  </select>
                </div>

                <button  onClick={handleSubmit} className="mx-auto  mt-5 mb-4 btn bg-cyan-600 py-1 px-4 rounded-full font-light text-white flex place-items-center  ">{currentItem ? "Update" : "Create"}</button>
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