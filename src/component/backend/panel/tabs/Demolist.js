import React, { useState, useEffect } from 'react'

import axios from 'axios';
import ItemList from "../tabs/ItemList";
import ItemModal from "../tabs/ItemModal";

function Demolist() {

  // const [demolist, setDemolist] = useState([]);
  const [items, setItems] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentItem, setCurrentItem] = useState(null);
  const [isAnimating, setIsAnimating] = useState(false);
  // const [title, setTitle] = useState('');
  // const [description, setDescription] = useState('');
  // const [route, setRoute] = useState('');
  // const openModal = () => {
  //   setIsModalOpen(true);
  //   setIsAnimating(true);
  // };
  // const closeModal = () => {
  //   setIsAnimating(false);
  //   setTimeout(() => {
  //     setIsModalOpen(false);
  //   }, 300);
  // };
  const fetchItems = async () => {
    try {
      const response = await axios.get("https://66e5498b5cc7f9b6273ce150.mockapi.io/demolist");
      setItems(response.data);
    } catch (error) {
      console.error("Error fetching data", error);
    }
  };

  // Open modal for creating or editing an item
  const handleOpenModal = (item = null) => {
    console.log('click')
    setCurrentItem(item);
    setIsModalOpen(true);
    setIsAnimating(true)
  };

  // Close the modal
  const handleCloseModal = () => {
    setIsModalOpen(false);
    setCurrentItem(null);
  };

  // Create a new item
  const handleCreateItem = async (newItem) => {
    try {
      const response = await axios.post("https://66e5498b5cc7f9b6273ce150.mockapi.io/demolist", newItem);
      setItems([...items, response.data]);
      handleCloseModal();
    } catch (error) {
      console.error("Error creating item", error);
    }
  };

  // Update an item
  const handleUpdateItem = async (updatedItem) => {
    try {
      const response = await axios.put(`https://66e5498b5cc7f9b6273ce150.mockapi.io/demolist/${updatedItem.id}`, updatedItem);
      setItems(items.map((item) => (item.id === updatedItem.id ? response.data : item)));
      handleCloseModal();
    } catch (error) {
      console.error("Error updating item", error);
    }
  };

  // Delete an item
  const handleDeleteItem = async (id) => {
    try {
      await axios.delete(`https://66e5498b5cc7f9b6273ce150.mockapi.io/demolist/${id}`);
      setItems(items.filter((item) => item.id !== id));
    } catch (error) {
      console.error("Error deleting item", error);
    }
  };
  useEffect(() => {
    fetchItems();
  }, []);
  return (
    <>
      <div className='flex justify-between align-middle  mb-1 mt-3 px-1  w-full'>
        <h1 className='text-white '>Demo List</h1>
        <button className='m-0 text-white bg-cyan-600 px-2 rounded-sm' onClick={() => handleOpenModal()}>Add New</button>
      </div>
      <div className='example_box p-0 text-start rounded-md overflow-hidden'>


        <div className=''>
        <ItemList items={items} onEdit={handleOpenModal} onDelete={handleDeleteItem} />
          {/* <table className="custom-table w-full">
            <thead className='bg-gray-900'>
              <tr>
                <th className='border-zinc-700 border text-white font-light text-sm p-2 ' >ID</th>
                <th className='border-zinc-700 border text-white font-light text-sm p-2 '>Title</th>
                <th className='border-zinc-700 border text-white font-light text-sm p-2  text-start'>Description</th>
                <th className='border-zinc-700 border text-white font-light text-sm p-2 '>Route Link</th>
                <th className='border-zinc-700 border text-white font-light text-sm p-2 '>Status</th>
                <th className='border-zinc-700 border text-white font-light text-sm p-2 '>Action</th>
              </tr>
            </thead>
            <tbody>
              {demolist.map((item) => (
                <tr key={item.id}>
                  <td className='border-zinc-700 border p-2 text-gray-300 text-sm  text-center'>{item.id}</td>
                  <td className='border-zinc-700 border p-2 text-gray-400 text-sm textwraptit'>{item.title}</td>
                  <td className='border-zinc-700 border p-2 text-gray-400 text-sm textwrapdec'>{item.description}</td>
                  <td className='border-zinc-700 border p-2 text-gray-400 text-sm '>{item.route}</td>
                  {(item.status === 'active') ? (
                    <td className='border-zinc-700 border p-2 text-gray-400 text-sm text-center'><span className='bg-green-900  w-fit text-[12px] rounded-md px-2  capitalize border border-green-700 text-green-400'>Active</span></td>
                  ) : (
                    <td className='border-zinc-700 border p-2 text-gray-400 text-sm text-center'><span className='text-rose-800 font-semibold bg-rose-400  w-fit text-[12px] rounded-md px-2  capitalize border border-rose-500'>Inactive</span></td>
                  )}



                  <td className='border-zinc-700 border p-2 text-gray-400 text-sm '>
                    <div className='flex '>
                      <button className='btn w-4 me-2' onClick={() => setToLocalStorage(
                        item.id,
                        item.title,
                        item.description, 
                        item.route)}><img className='' src={edit} /></button>
                      <button className='btn w-4 me-2' ><img className='' src={delet} /></button>
                    </div>
                  </td>

                </tr>
              ))}
            </tbody>
          </table> */}
        </div>

      </div>
      {isModalOpen && (
        <ItemModal
          isOpen={isModalOpen}
          animetion={isAnimating}
          onClose={handleCloseModal}
          onSubmit={currentItem ? handleUpdateItem : handleCreateItem}
          currentItem={currentItem}
        />
      )}
      {/* {isModalOpen && (
        <div className={`admin_form w-full mx-auto modal-overlay ${isAnimating ? 'fade-in' : 'fade-out'}`}>
          <div className='example_box xl:w-[500px] md:w-[500px] p-0'>
            <div className='p-2 text-white bg-gray-900  rounded-t-xl border-b border-zinc-700 flex justify-between'>
              <p className='m-0 text-start '>Update Form</p>
                <span className='' onClick={closeModal}>Close</span>
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
                  <select className='bg-zinc-800 border border-zinc-700 px-2 py-1 rounded w-full text-white' value='' id='position' name='position' >
                    <option value="null">Select</option>
                    <option value="active">Active</option>
                    <option value="notactive">Not Active</option>
                  </select>
                </div>

                <button  onClick={handleUpdate} className="mx-auto  mt-5 mb-4 btn bg-cyan-600 py-1 px-4 rounded-full font-light text-white flex place-items-center  ">Update</button>
              </div>

              <div>
           

              </div>




            </form >
          </div>
        </div>
      )} */}

    </>
  )
}

export default Demolist