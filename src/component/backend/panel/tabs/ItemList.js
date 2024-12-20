import React, { useEffect, useState } from 'react'
import edit from '../../../../images/editing.png'
import delet from '../../../../images/delet.png'

function ItemList({ items, onEdit, onDelete }) {

  const [fetchedData, setFetchedData] = useState(items);
  const [email, setEmail] = useState(null);


  console.log('data', email);

  useEffect(() => {
    if (fetchedData.length > 0 && fetchedData[0].email) {
      setEmail(fetchedData[0].email); // Set email from the first item
    }
  }, []);

  return (
    <>

      <table className="custom-table w-full">
        <thead className='bg-gray-900'>

          {items.slice(0, 1).map((item) => (
            <tr>
              <th className="border-zinc-700 border text-white font-light text-sm p-2">ID</th>
              {item.title ? (
                <>
                  <th className="border-zinc-700 border text-white font-light text-sm p-2 text-start">Title</th>
                  <th className="border-zinc-700 border text-white font-light text-sm p-2 text-start">Description</th>
                  <th className="border-zinc-700 border text-white font-light text-sm p-2">Route Link</th>
                  <th className="border-zinc-700 border text-white font-light text-sm p-2">Skill</th>
                  <th className="border-zinc-700 border text-white font-light text-sm p-2">Status</th>
                </>
              ) : item.email ? (
                <>
                  <th className="border-zinc-700 border text-white font-light text-sm p-2 text-start">Name</th>
                  <th className="border-zinc-700 border text-white font-light text-sm p-2">Email</th>
                  <th className="border-zinc-700 border text-white font-light text-sm p-2">Pool</th>
                  <th className="border-zinc-700 border text-white font-light text-sm p-2">Point</th>
                  <th className="border-zinc-700 border text-white font-light text-sm p-2">Stack</th>
                  <th className="border-zinc-700 border text-white font-light text-sm p-2">Per(%)</th>
                  <th className="border-zinc-700 border text-white font-light text-sm p-2">Position</th>
                </>
              ) : (
                <>
                  <th className="border-zinc-700 border text-white font-light text-sm p-2 text-start">Name</th>
                  <th className="border-zinc-700 border text-white font-light text-sm p-2">Capacity</th>
                  <th className="border-zinc-700 border text-white font-light text-sm p-2">Min Stack</th>
                  <th className="border-zinc-700 border text-white font-light text-sm p-2">Max Stack</th>
                  <th className="border-zinc-700 border text-white font-light text-sm p-2">Per(%)</th>

                  <th className="border-zinc-700 border text-white font-light text-sm p-2">Duration</th>
                  <th className="border-zinc-700 border text-white font-light text-sm p-2">Status</th>
                </>


              )
              }

              <th className="border-zinc-700 border text-white font-light text-sm p-2">Action</th>
            </tr>

          ))}

        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.id}>

              <td className='border-zinc-700 border p-2 text-gray-300 text-sm  text-center'><span className='text-white'>{item.id}</span></td>
              {item.title ? (
                <>
                  <td className='border-zinc-700 border p-2 text-gray-400 text-sm textwraptit'>{item.title}</td>
                  <td className='border-zinc-700 border p-2 text-gray-400 text-sm textwrapdec'>{item.description}</td>
                  <td className='border-zinc-700 border p-2 text-gray-400 text-sm '>{item.route}</td>
                  <td className='border-zinc-700 border p-2 text-gray-400 text-sm text-center'>{item.skill}%</td>
                  {(item.status === 'active') ? (
                    <td className='border-zinc-700 border p-2 text-gray-400 text-sm text-center'><span className='bg-green-900  w-fit text-[12px] rounded-md px-2  capitalize border border-green-700 text-green-400'>Active</span></td>
                  ) : (
                    <td className='border-zinc-700 border p-2 text-gray-400 text-sm text-center'><span className='text-rose-800 font-semibold bg-rose-400  w-fit text-[12px] rounded-md px-2  capitalize border border-rose-500'>Inactive</span></td>
                  )}
                </>
              ) : item.email ? (
                <>
                  <td className='border-zinc-700 border p-2 text-gray-400 text-sm textwraptit'>{item.name}</td>
                  <td className='border-zinc-700 border p-2 text-gray-400 text-sm textwraptit'>{item.email}</td>
                  <td className='border-zinc-700 border p-2 text-gray-400 text-sm textwraptit'>{item.pool}</td>
                  <td className='border-zinc-700 border p-2 text-gray-400 text-sm textwraptit'>{item.point}</td>
                  {/* <td className='border-zinc-700 border p-2 text-gray-400 text-sm textwraptit'>{item.stack}</td> */}
                  {(item.stack == 'true') ? (
                    <><td className='border-zinc-700 border p-2 text-gray-400 text-sm textwraptit'><span className='w-3 h-3 rounded-full bg-green-700 border border-green-500 block mx-auto'></span></td></>
                  ) : (item.stack == 'false') ? (
                    <><td className='border-zinc-700 border p-2 text-gray-400 text-sm textwraptit'><span className='w-3 h-3 rounded-full bg-red-700 border border-red-500 block mx-auto'></span></td></>
                  ) : ''}
                  <td className='border-zinc-700 border p-2 text-gray-400 text-sm textwraptit text-center'>{item.percentage}%</td>
                  {(item.position === 'active') ? (
                    <td className='border-zinc-700 border p-2 text-gray-400 text-sm text-center'><span className='bg-green-900  w-fit text-[12px] rounded-md px-2  capitalize border border-green-700 text-green-400'>Active</span></td>
                  ) : (
                    <td className='border-zinc-700 border p-2 text-gray-400 text-sm text-center'><span className='text-rose-800 font-semibold bg-rose-400  w-fit text-[12px] rounded-md px-2  capitalize border border-rose-500'>Inactive</span></td>
                  )}
                </>
              ) : (
                <>

                  <td className='border-zinc-700 border p-2 text-gray-400 text-sm textwraptit'>{item.symbol}</td>
                  <td className='border-zinc-700 border p-2 text-gray-400 text-sm textwraptit'>{item.totalvalue}</td>
                  <td className='border-zinc-700 border p-2 text-gray-400 text-sm textwraptit text-center'>{item.minstack}</td>
                  <td className='border-zinc-700 border p-2 text-gray-400 text-sm textwraptit text-center'>{item.maxstack}</td>
                  <td className='border-zinc-700 border p-2 text-gray-400 text-sm textwraptit text-center'>{item.per}</td>
                  <td className='border-zinc-700 border p-2 text-gray-400 text-sm textwraptit text-center'>{item.duration}</td>
                  <td className='border-zinc-700 border p-2 text-gray-400 text-sm text-center'><span className='bg-green-900  w-fit text-[12px] rounded-md px-2  capitalize border border-green-700 text-green-400'>Active</span></td>
                </>
              )}
              <td className='border-zinc-700 border p-2 text-gray-400 text-sm '>
                <div className={`flex`}>
                  <button  className={`btn w-4 me-2  ${item.minstack ? 'opacity-20 cursor-not-allowed' :''}` }onClick={() => onEdit(item)}><img className='' src={edit} /></button>
                  <button  className={`btn w-4 me-2  ${item.minstack ? 'opacity-20 cursor-not-allowed' :''}` }onClick={() => onDelete(item.id)}><img className='' src={delet} /></button>
                </div>
              </td>

            </tr>
          ))}
        </tbody>
      </table>


    </>
  )
}




export default ItemList