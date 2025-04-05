import React from 'react'
import Title from '../Components/Title';
import { assets } from '../assets/assets';
import Newsletterbox from '../Components/Newsletterbox';

const About = () => {
  return (
    <div>
       <div className='text-2xl text-center pt-8 border-t'>
          <Title text1={'ABOUT'} text2={'US'}/>
       </div>
       <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img src={assets.about_img} className='w-full md:max-w-[450px]' alt="" />
        
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
          <p>Welcome to out website, your go-to online destination for fashion that speaks your style. We bring you a curated collection of trendy, comfortable, and affordable clothing — all just a few clicks away.</p>
          <p>Fashion isn’t just what we sell — it’s what we live, breathe, and celebrate every day."</p>
           <b className='text-gray-800'>Our mission</b>
           <p>Here, we believe fashion is more than just what you wear — it’s how you express yourself.
           Our mission is simple: to make stylish, high-quality clothing accessible to everyone through a seamless and personalized online shopping experience.</p>
        </div>

       </div>
       <div className='text-4xl py-4'>
        <Title text1={'WHY'} text2={'CHOOSE US'}/>
       </div>
       <div className='flex flex-col md:flex-row text-sm mb-20'>
         <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
            <b>Quality assurance</b>
            <p className='text-gray-600'>We handpick every product with attention to fabric, design, and durability. Our clothing goes through strict quality checks so you can shop with confidence, knowing you’re getting top-tier fashion that lasts — no compromises.</p>
         </div>
         <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
            <b>Convenience</b>
            <p className='text-gray-600'>From effortless browsing to quick checkout, our website is designed for a smooth and stress-free shopping experience. Filter products by category, gender, price, and more — all in just a few clicks. Plus, enjoy fast delivery and multiple payment options, including Stripe and Cash on Delivery.</p>
         </div>
         <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
            <b>Exceptional customer service</b>
            <p className='text-gray-600'>Your satisfaction is our priority. Our support team is always ready to assist you with size guides, order tracking, returns, and more. Whether it’s a question or concern, we believe in quick responses, friendly help, and real solutions — every time.</p>
         </div>
       </div>
       <Newsletterbox/>
    </div>
    
    
  )
}

export default About