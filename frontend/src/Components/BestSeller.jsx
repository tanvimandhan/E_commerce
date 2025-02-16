import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../Context/ShopContext'
import Title from './Title';
import ProductItem from './ProductItem';

const BestSeller = () => {
    const {products}=useContext(ShopContext);
    const [bestseller,setBestSeller]=useState([]);
    useEffect(()=>{
        const bestProduct=products.filter((item)=>(item.bestseller));
        //console.log(products);
        setBestSeller(bestProduct.slice(0,5))
    },[products])
  return (
    <div className='my-10'>
        <div className='text-center text-3xl py-8'>
            <Title text1={'BEST'} text2={'SELLER'}/>
            <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
            🌟 Best Sellers – Loved by You! 🌟

Our best-selling pieces are here! These customer-favorite styles are flying off the shelves—trendy, comfortable, and effortlessly stylish. Whether it's classic staples, statement outfits, or must-have accessories, these picks have been tried, tested, and adored.

Get yours before they’re gone! Shop now and stay ahead in style. ✨💃</p>
        </div>
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
            {
                bestseller.map((item,index)=>(
                    <ProductItem key={index} id={item._id} name={item.name} image={item.image} price={item.price}/>
                ))
            }
        </div>

    </div>
  )
}

export default BestSeller