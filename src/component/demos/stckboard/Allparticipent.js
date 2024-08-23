import React from 'react'
import Banner from '../../pagebanner/Banner'


function Allparticipent() {
    return (
        <>
         <Banner heading="pool:- TaksOn NFT" coheading="Participants"/>
            <div className='container mx-auto'>
                <div className='my-5'>
                    <div className='example_box text-start'>
                        <h5 className='text-white text-xl'><span className='text-orange-500 font-semibold' >$100000</span>&nbsp;Pool Capacity</h5>
                        <p className='text-sm text-zinc-300 mt-1 leading-5'>Win extra $ by completing offers and climbing the leaderboard! From July 1st to July 31st, complete as many offers as you can. The top 10 participants share a $100 prize pool!</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Allparticipent