import React from 'react'
import edit from '../../../../images/editing.png'
import delet from '../../../../images/delet.png'

function ItemList({ items, onEdit, onDelete }) {
  return (
   <>
     <table className="custom-table w-full">
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
              {items.map((item) => (
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
                      <button className='btn w-4 me-2' onClick={() => onEdit(item)}><img className='' src={edit} /></button>
                      <button className='btn w-4 me-2' onClick={() => onDelete(item.id)}><img className='' src={delet} /></button>
                    </div>
                  </td>

                </tr>
              ))}
            </tbody>
          </table></>
  )
}

export default ItemList