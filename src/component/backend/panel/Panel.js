import React, { useState } from 'react'
import Demolist from './tabs/Demolist';
import UserData from './tabs/UserData';
import Pooldata from './tabs/Pooldata';

function Panel() {

  const [tabs, setTabs] = useState('')

  const setTab = (e) => {
    setTabs(e.target.id);
  };
  console.log(tabs);
  return (
    <div className='mainbg'>
      <div className='container mx-auto py-5'>
        <div className='flex-wrap'>
          <button onClick={setTab} id='demolist' className=" btn bg-cyan-600 py-1 px-4 rounded-full me-2 mb-2 font-light text-white   ">Demo List</button>
          <button onClick={setTab} id='userdata' className=" btn bg-cyan-600 py-1 px-4 rounded-full me-2 mb-2 font-light text-white   ">User Data</button>
          <button onClick={setTab} id='pooldata' className=" btn bg-cyan-600 py-1 px-4 rounded-full me-2 mb-2 font-light text-white   ">Pool Data</button>

        </div>
       
        <div className='tab_wrap'>
          {(tabs == '' || tabs === 'demolist' ) ? <Demolist /> : ''}
          {(tabs === 'userdata') ? <UserData /> : ''}
          {(tabs === 'pooldata') ? <Pooldata /> : ''}
        </div>
      </div>
    </div>
  )
}

export default Panel