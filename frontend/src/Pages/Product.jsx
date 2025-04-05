import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../Context/ShopContext';
import { assets } from '../assets/assets';
import Relatedproducts from '../Components/Relatedproducts';

const Product = () => {
  const {productId}=useParams();
  const {products,currency,addTocart}=useContext(ShopContext);
  const [productData,setProductData]=useState(false);
  const [image,setImage]=useState('');
  const [Size,setSize]=useState('');

  const fetchProductData=async()=>{
      products.map((item)=>{
        if(item._id===productId){
          setProductData(item);
          
          setImage(item.image[0])
          return null;
        }
      })
  }
  useEffect(()=>{
    fetchProductData();
  },[products,productId])
  
  return productData?(
    <div className='border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100'>
      {/* product data */}
      <div className='flex gap-12 sm:gap-12 felx-col sm:flex-row'>
        {/* product images */}
        <div className='flex-1 flex flex-col-reverse gap-3 sm:flex-row'>
          <div className='flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full'>
            {
              productData.image.map((item,index)=>(
                <img onClick={()=>setImage(item)} src={item} key={index} className='w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer' alt="" />
              ))
            }
          </div>
          <div className='w-full sm:w-[80%]'>
            <img className='w-full h-auto' src={image} alt="" />
          </div>
        </div>

        {/* product info */}
        <div className='flex-1'>
          <h1 className='font-medium text-2xl mt-2'>{productData.name}</h1>
          <div className='flex items-center gap-1 mt-2'>
            <img className='w-3 5' src={assets.star_icon} alt="" />
            <img className='w-3 5' src={assets.star_icon} alt="" />
            <img className='w-3 5' src={assets.star_icon} alt="" />
            <img className='w-3 5' src={assets.star_icon} alt="" />
            <img className='w-3 5' src={assets.star_dull_icon} alt="" />
            <p className='pl-2'>(122)</p>
          </div>
          <p className='mt-5 text-3xl font-medium'>{currency}{productData.price}</p>
          
          <p className='mt-5 text-gray-500 md:w-4/5'>{productData.description}</p>
          <div className='flex flex-col gap-4 my-8'>
            <p>Select size</p>
            <div className='flex gap-2'>
              {productData.sizes.map((item,index)=>(
              <button onClick={()=>setSize(item)} className={`border py-2 px-4 bg-gray-100 ${item===Size?'border-orange-500':''}`} key={index}>{item}</button>
            ))}</div>
          </div>
          <button onClick={()=>addTocart(productData._id,Size)} className='bg-black text-white px-8 py-3 text:sm active:bg-gray-700'>ADD TO CART</button>
          <hr className='mt-8 sm:w-4/5'/>
          <div className='text-sm text-gray-500 mt-5 flex flex-col gap-1'>
            <p>100% original</p>
            <p>cash on delivery available</p>
            <p>Exchange policy available</p>
          </div>
          
        </div>

      </div>
      {/* description and review section */}
      <div className='mt-20'>
        <div className='flex '>
          <b className='border px-5 py-3 text-sm'>Description</b>
          <p className='border px-5 py-3 text-sm'>Reviews(122)</p>
        </div>
        <div className='flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500'>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt odio in tempore quam sint quia cupiditate culpa eaque earum placeat voluptatum iste ab atque nihil dicta dolore, consectetur expedita incidunt.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui reprehenderit fugiat laboriosam possimus ex deleniti pariatur hic at. Repellat sequi hic laborum sit eligendi dolore eum ipsam! Deleniti, consequuntur vitae.w</p>
        </div>

      </div>
      {/* display related products */}
      <Relatedproducts category={productData.category} subCategory={productData.subCategory}/>
    </div>
  ):<div className='opacity-0'></div>
}

export default Product