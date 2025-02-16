import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../Context/ShopContext'
import { assets } from '../assets/assets';
import Title from '../Components/Title';
import ProductItem from '../Components/ProductItem';

const Collection = () => {
  const {products,search,showSearch}=useContext(ShopContext);
  const [showfilter,setShowFilter]=useState(false);
  const [filterProducts,setFilterpProducts]=useState([]);
  const [category,setCategory]=useState([]);
  const [subCategory,setSubCategory]=useState([]);
  const [sortType,setSortType]=useState('relevant');

  const toggleCategory=(e)=>{
    if(category.includes(e.target.value)){
       setCategory(prev=>prev.filter(item=>item!==e.target.value))
    }else{
      setCategory(prev=>[...prev,e.target.value])
    }
  }

  // useEffect(()=>{
  //    setFilterpProducts(products);
  // },[])

  const sortProducts=()=>{
    let fpcopy=filterProducts.slice();
    switch(sortType){
      case 'low-high':setFilterpProducts(fpcopy.sort((a,b)=>(a.price-b.price)));break;
      case 'high-low':setFilterpProducts(fpcopy.sort((a,b)=>(b.price-a.price)));break;
      default:applyFilter();break;
    }
  }
  


  const togglesubCategory=(e)=>{
    if(subCategory.includes(e.target.value)){
       setSubCategory(prev=>prev.filter(item=>item!==e.target.value))
    }else{
      setSubCategory(prev=>[...prev,e.target.value])
    }
  }

  const applyFilter=()=>{
    let productscopy=products.slice();
    if(showSearch && search){
      productscopy=productscopy.filter(item=>item.name.toLowerCase().includes(search.toLowerCase()))
    }
    if(category.length>0){
      productscopy=productscopy.filter(item=>category.includes(item.category));
    }
    if(subCategory.length>0){
      productscopy=productscopy.filter(item=>subCategory.includes(item.subCategory))
    }
    setFilterpProducts(productscopy)
  }

 useEffect(()=>{
     applyFilter();
  },[subCategory,category,search,showSearch,products])

  useEffect(()=>{
    applyFilter();
  },[category,subCategory])
  
  useEffect(()=>{
    sortProducts();
  },[sortType])
  
  return (
    <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t'>
      {/* filter options */}
      <div className='min-w-60'>
        <p onClick={()=>setShowFilter(!showfilter)} className='my-2 text-xl flex items-center cursor-pointer gap-2'>filters
          <img className={`h-3 sm:hidden ${showfilter? 'rotate-90' : ''}`} src={assets.dropdown_icon} alt="" />
        </p>
        {/* category filter */}
        <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showfilter?'':'hidden'} sm:block`}>
          <p className='mb-3 text-sm font-medium'> CATEGORIES</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-600'>
            <p className='flex gap-2'>
              <input type="checkbox" className='w-3'  value={'Women'} onChange={toggleCategory}/>Women
            </p>
            <p className='flex gap-2'>
              <input type="checkbox" className='w-3'  value={'Men'} onChange={toggleCategory}/>Men
            </p>
            <p className='flex gap-2'>
              <input type="checkbox" className='w-3'  value={'Kids'} onChange={toggleCategory}/>Kids
            </p>

          </div>
        </div>
        {/* subcategory filter */}
        <div className={`border border-gray-300 pl-5 py-3 my-6 ${showfilter?'':'hidden'} sm:block`}>
          <p className='mb-3 text-sm font-medium'> CATEGORIES</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-600'>
            <p className='flex gap-2'>
              <input type="checkbox" className='w-3'  value={'Topwear'} onChange={togglesubCategory}/>Topwear
            </p>
            <p className='flex gap-2'>
              <input type="checkbox" className='w-3'  value={'BottomWear'} onChange={togglesubCategory}/>Bottomwear
            </p>
            <p className='flex gap-2'>
              <input type="checkbox" className='w-3'  value={'Winterwear'} onChange={togglesubCategory}/>Winterwear
            </p>

          </div>
          </div>
      </div>
      {/* right side */}
      <div className='flex-1'>
        <div className='flex justify-between text-base sm:text-2xl mb-4'>
          <Title text1={'ALL'} text2={'COLLECTIONS'}/>
          {/* product sort */}
          <select onChange={(e)=>setSortType(e.target.value)} className='border-2 border-gray-300 text-sm px-2' name="" id="">
            <option value="relavant">Sort by:Relevant</option>
            <option value="low-high">Sort by:Low to high</option>
            <option value="high-low">Sort by:High to low</option>

          </select>
        </div>
        {/* map products */}
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6'>
          {
            filterProducts.map((item,index)=>(
              <ProductItem key={index} name={item.name} price={item.price} id={item._id} image={item.image}/>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Collection