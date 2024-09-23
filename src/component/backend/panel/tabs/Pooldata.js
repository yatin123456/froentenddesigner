import React, { useState, useEffect } from 'react'

import axios from 'axios';
import ItemList from "../tabs/ItemList";
import ItemModal from "../tabs/ItemModal";

function Pooldata() {

  const [items, setItems] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentItem, setCurrentItem] = useState(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const fetchItems = async () => {
    try {
      const response = await axios.get("https://66cea862901aab24841f1914.mockapi.io/Poollist");
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
      const response = await axios.post("https://66cea862901aab24841f1914.mockapi.io/Poollist", newItem);
      setItems([...items, response.data]);
      handleCloseModal();
    } catch (error) {
      console.error("Error creating item", error);
    }
  };

  // Update an item
  const handleUpdateItem = async (updatedItem) => {
    try {
      const response = await axios.put(`https://66cea862901aab24841f1914.mockapi.io/Poollist/${updatedItem.id}`, updatedItem);
      setItems(items.map((item) => (item.id === updatedItem.id ? response.data : item)));
      handleCloseModal();
    } catch (error) {
      console.error("Error updating item", error);
    }
  };

  // Delete an item
  const handleDeleteItem = async (id) => {
    try {
      await axios.delete(`https://66cea862901aab24841f1914.mockapi.io/Poollist/${id}`);
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
        <h1 className='text-white '>Pool Data</h1>
        <button className='m-0 text-white bg-cyan-600 px-2 rounded-sm' onClick={() => handleOpenModal()}>Add New</button>
      </div>
      <div className='example_box p-0 text-start rounded-md overflow-hidden'>


        <div className=''>
          <ItemList items={items} onEdit={handleOpenModal} onDelete={handleDeleteItem} />
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


    </>
  )
}

export default Pooldata