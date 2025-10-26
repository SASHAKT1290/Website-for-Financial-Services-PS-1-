import React from 'react'

const WhatWeDoH = () => {
  return (
    <div>
      <div className='bg-beige'>
        <div className='flex flex-col items-center'>
          <div>
            <p className='mt-3 text-5xl pt-10 pb-3 font-medium font-semibold text-black'>What We Do</p>
          </div>
          <div className='border-2 border-amber-400 shadow rounded-2xl w-45 m-5'>

          </div>
        </div>
      </div>
      <div className='m-5 flex flex-col'>

        <div className="card w-96 bg-base-100 card-xl shadow-sm bg-sand w-full items-center mt-2">
          <div className=''>
            <img src="https://t4.ftcdn.net/jpg/08/34/26/69/360_F_834266922_yG4cgGtcJ7UtAKPPvN4aie2Sc1qxRZzh.jpg" className='w-100 h-70 lg:w-150 lg:h-100 rounded-2xl mt-5'></img>
          </div>
          <div className="card-body">
            <p className='text-black font-bold text-center'>At, Saanvi Financial Services our mission is to provide our clients with the best solutions in wealth building. We are driven to provide clients with simple, unbiased and uncluttered guidance that adds value to their quality of life and results in actionable solutions.</p>

            <p className='text-black font-bold text-center mt-2'>At Saanvi Financial Services, we offer our services through personal counsel with each of our clients after understanding their needs. Our approach is to enable our client's to understand their investments, have knowledge of investment products, and that they make proper progress towards achieving their financial needs in life.</p>
          </div>
        </div>
      </div>


    </div>
  )
}

export default WhatWeDoH
