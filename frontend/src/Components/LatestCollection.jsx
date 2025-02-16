import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../Context/ShopContext'
import Title from './Title';
import ProductItem from './ProductItem';

const LatestCollection = () => {
    const {products}=useContext(ShopContext);
    const [latestProducts,setLatestProducts]=useState([]);

    useEffect(()=>{
        setLatestProducts(products.slice(0,10));
    },[products])
   // console.log(products);
  return (
    <div className='my-10'>
         <div className='text-center py-8 text-3xl'>
            <Title text1={'LATEST'} text2={'COLLECTIONS'}/>
            <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
            ✨ New Arrivals – Elevate Your Wardrobe! ✨ <br />

Discover our latest collection, where timeless elegance meets modern trends. From chic casuals to statement pieces, we bring you premium fabrics, bold designs, and effortless style. Whether you're looking for everyday essentials or standout outfits, our newest drop has something for everyone. <br />

Shop now and refresh your style with confidence! 💫</p>
         </div>
         <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
         {
          latestProducts.map((item,index)=>(
            <ProductItem key={index} id={item._id} image={item.image} name={item.name}/>
          ))
         }
         </div>
         
    </div>
  )
}

export default LatestCollection