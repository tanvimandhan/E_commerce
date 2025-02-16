import React from 'react'
import Title from '../components/Title';
import { assets } from '../assets/assets';
import Newsletterbox from '../components/Newsletterbox'

const About = () => {
  return (
    <div>
       <div className='text-2xl text-center pt-8 border-t'>
          <Title text1={'ABOUT'} text2={'US'}/>
       </div>
       <div className='flex flex-col md:lex-row gap-16'>
        <img src={assets.about_img} className='w-full md:max-w-[450px]' alt="" />
        
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores ipsa commodi unde minus dicta voluptas? Dolorum aperiam saepe libero nisi magni mollitia sapiente exercitationem veniam nemo, vel sit, voluptatem obcaecati?</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit fugit quae ipsa quam! Voluptatibus temporibus dolores, saepe quae fuga pariatur quidem nostrum? Optio asperiores perspiciatis velit architecto quisquam enim impedit!</p>
           <b className='text-gray-800'>Our mission</b>
           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem dignissimos omnis asperiores numquam cum a deserunt quae odit! Autem necessitatibus praesentium odit consequatur quas ullam excepturi aliquid in voluptas debitis?</p>
        </div>

       </div>
       <div className='text-xl py-4'>
        <Title text1={'WHY'} text2={'CHOOSE US'}/>
       </div>
       <div className='flex flex-col md:flex-row twxt-sm mb-20'>
         <div className='border px-10 md:px-16 py-8 am:py-20 flex flex-col gap-5'>
            <b>Quality assurance</b>
            <p className='text-gray-600'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. In cum voluptatum quidem nihil est! Mollitia atque aliquid voluptate praesentium magnam illum repellendus amet, cumque itaque recusandae quae, saepe molestias maxime?</p>
         </div>
         <div className='border px-10 md:px-16 py-8 am:py-20 flex flex-col gap-5'>
            <b>convenience</b>
            <p className='text-gray-600'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. In cum voluptatum quidem nihil est! Mollitia atque aliquid voluptate praesentium magnam illum repellendus amet, cumque itaque recusandae quae, saepe molestias maxime?</p>
         </div>
         <div className='border px-10 md:px-16 py-8 am:py-20 flex flex-col gap-5'>
            <b>exceptional customer service</b>
            <p className='text-gray-600'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. In cum voluptatum quidem nihil est! Mollitia atque aliquid voluptate praesentium magnam illum repellendus amet, cumque itaque recusandae quae, saepe molestias maxime?</p>
         </div>
       </div>
       <Newsletterbox/>
    </div>
    
    
  )
}

export default About