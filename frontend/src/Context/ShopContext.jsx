import { createContext, useEffect, useState } from "react";
// import { products } from "../assets/assets";
import React from "react";
import { ToastContainer,toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const ShopContext = createContext({
    products: [],
    currency: "$",
    delivery_fee: 10
});

const ShopContextProvider = ({ children }) => {
    const currency = "$";
    const delivery_fee = 10;
    const backendUrl=import.meta.env.VITE_BACKEND_URL
    const [search,setSearch]=useState('');
    const [showSearch,setShowSearch]=useState(false);
    const [cartItems,setCartItems]=useState({});
    const [products,setProducts]=useState([]);
    const [token,setToken]=useState('')
    const navigate=useNavigate();

    const addTocart=async(itemId,Size)=>{
        
       let cartData=structuredClone(cartItems);
       if(!Size){
        toast.error('select product size');
        return;
       }
       if(cartData[itemId]){
        if(cartData[itemId][Size]){
            cartData[itemId][Size]+=1;
        }else{
            cartData[itemId][Size]=1;
        }
       }else{
        cartData[itemId]={};
        cartData[itemId][Size]=1;
       }
       setCartItems(cartData);
       if(token){
          try{
            await axios.post(backendUrl+'/api/cart/add',{itemId,Size},{headers:{token}})
          }catch(error){
            console.log(error);
            toast.error(error.message)

          }
       }
       
    }
   const getCartcount=()=>{
    let totalcount=0;
    for(const items in cartItems){
        for(const item in cartItems[items]){
            try{
                if(cartItems[items][item]>0){
                    totalcount+=cartItems[items][item];
                }
            }catch(error){
                console.log(error);
                toast.error(error.message)
            }
        }
    }return totalcount;
   }
   const updateQuantity=async(itemId,Size,quantity)=>{
      let cartdata=structuredClone(cartItems);
      cartdata[itemId][Size]=quantity;
       setCartItems(cartdata);
       if(token){
        try{
            await axios.post(backendUrl+'/api/cart/update',{itemId,Size,quantity},{headers:{token}})
        }catch(error){
            console.log(error);
            toast.error(error.message)
        }
       }
    }
    const getcartAmount=()=>{
        let total=0;
        for(const items in cartItems){
            let itemInfo=products.find((product)=>product._id===items);
            for(const item in cartItems[items]){
                try{
                    if(cartItems[items][item]>0){
                        total+= itemInfo.price * cartItems[items][item];
                    }
                }catch(error){
                    console.log(error);
                    toast.error(error.message)
                }
            }
        }return total;
    }
    const getProductsData=async()=>{
        try{
            const response=await axios.get(backendUrl+'/api/product/list')
            //console.log(response.data);
            if(response.data.success){
                setProducts(response.data.products);
            }else{
                toast.error(response.data.message);
            }
        }catch(error){
             console.log(error);
             toast.error(error.message)
        }
    }
    const getUserCart=async(token)=>{
        try{
           const response=await axios.post(backendUrl+'/api/cart/get',{},{headers:{token}})
           if(response.data.success){
            setCartItems(response.data.cartdata)
           }
        }catch(error){
            console.log(error);
            toast.error(error.message)
        }
    }
    useEffect(()=>{
        getProductsData()
    },[])

    useEffect(()=>{
        if(!token && localStorage.getItem('token')){
            setToken(localStorage.getItem('token'));
            //getUserCart(localStorage.getItem('token'))
        } 
    },[])

    const value = {
        products,
        currency,
        delivery_fee,search,setSearch,showSearch,setShowSearch,addTocart,cartItems,getCartcount,
        updateQuantity,getcartAmount,navigate,backendUrl,token,setToken,setCartItems
    };
    return (
        <ShopContext.Provider value={value}>
            {children}
        </ShopContext.Provider>
    );
};

export default ShopContextProvider;
