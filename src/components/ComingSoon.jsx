import React from 'react'
import { Link } from 'react-router'
const ComingSoon = () => {
  return (
    <div className='w-full h-screen bg-beige flex flex-col items-center justify-center'>
      <h1 className='text-black text-4xl font-bold mb-4'>Coming Soon</h1>
      <p className='text-black mb-2'>Meanwhile, you can contact us</p>
      <Link to="/contact" className='text-black underline'>@here</Link>
    </div>
  )
}

export default ComingSoon
