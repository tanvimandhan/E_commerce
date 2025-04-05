import React from 'react'
import Title from '../Components/Title'
import { assets } from '../assets/assets'
import Newsletterbox from '../Components/Newsletterbox'

const Contact = () => {
  return (
    <div>
      <div className='text-center text-2xl pt-10 border-t'>
        <Title text1={'CONTACT'} text2={'US'}/>
      </div>
      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28'>
        <img src={assets.contact_img} className='w-full md:max-w-[480px]' alt="" />
        <div className='flex flex-col justify-center items-start gap-6'>
          <p className='font-semibold text-xl text-gray-600'>Our store</p>
          <p className='text-gray-500'>54700 willims shilton <br />suite washington</p>
          <p className='text-gray-500'>Tel:(3698)2873 <br />email:ere2gmail.com</p>
          <p className='fonr-semibold text-xl text-gray-500'>carrers at forever</p>
          <p className='text-gray-500'>Learn more about our teams and job openings</p>
          <button className='border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500'>explore jobs</button>
          
        </div>
      </div>
      <Newsletterbox/>
    </div>
    
  )
}

export default Contact