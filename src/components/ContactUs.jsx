import React from 'react'

const ContactUs = () => {
  return (
    <div className='mb-10'>
      <div className='bg-beige'>
        <div className='flex flex-col items-center'>
          <div>
            <p className='mt-3 text-5xl pt-10 pb-3 font-medium font-semibold text-black'>Contact Us</p>
          </div>
          <div className='border-2 border-amber-400 shadow rounded-2xl w-45 m-5'>

          </div>
        </div>
      </div>
      <div className='flex flex-col lg:flex-row items-center justify-around mt-5'>

        <div className='bg-sand rounded-xl'><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d228.97404864185694!2d85.285526537241!3d23.33081942773718!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f4e178891cd32b%3A0x9ec89df1a3614390!2sOur%20Content%20Cafe%20-%20Digital%20Marketing%20Agency%20in%20Ranchi%20%7C%20Website%20Development%20%7C%20Video%20Editing%20%7C%20Graphic%20Design.!5e0!3m2!1sen!2sin!4v1752089940557!5m2!1sen!2sin" allowFullScreen loading="lazy" className='h-120 w-80 lg:h-120 lg:w-170 p-2' referrerPolicy="no-referrer-when-downgrade">
        </iframe></div>
        <div className='flex flex-col'>
          <div className="mt-10 lg:mt-0 lg:items-center lg:justify-center h-full text-3xl">

            <h1 className='text-black font-bold text-center px-8 justify-between'>
              Saanvi Financial Services
            </h1>
            <h2 className='mt-4 text-black text-lg text-center'>
              Sail City Rd, Bhaskar Path, New Pundag, Masibari, Ranchi, Jharkhand 834004
            </h2>
            <h2 className='mb-4 text-black text-lg text-center'>
              Phone No.- 9999999999
            </h2>
            <h2 className='mb-4 text-black text-lg text-center'>
              Email: abcd@gmail.com
            </h2>
          </div>
        </div>

      </div>
    </div>
  )
}

export default ContactUs
