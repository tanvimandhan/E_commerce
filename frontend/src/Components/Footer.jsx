import React from 'react'
import { assets } from '../assets/assets'
const Footer = () => {
  return (
    <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
        <div>
            <img src={assets.logo} alt="" className='mb-5 w-32'/>
            <p className='w-full md:w-2/3 text-gray-500'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere aut doloremque exercitationem aspernatur eius ad commodi ipsam ut architecto, atque recusandae culpa assumenda eligendi dolorum soluta esse hic provident totam.
            </p>
        </div>
        <div>
            <p className='text-xl font-medium mb-5'>COMPANY</p>
            <ul className='flex flex-col gap-1 text-gray-600'>
                <li>HOME</li>
                <li>ABOUT US</li>
                <li>DELIVERY</li>
                <li>PRIVACY POLICY</li>
            </ul>
        </div>
        <div>
            <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
            <ul className='flex flex-col gap-1 text-gray-600'>
                <li>+9123456778</li>
                <li>contact@gmail.com</li>
            </ul>
        </div>
        <div>
            <hr /> 
            <p className='py-5 text-sm text-center'>copyright 2024 forever.com allrights reserved</p>
        </div>
    </div>
  )
}

export default Footer