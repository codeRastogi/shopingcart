import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {add, remove} from '../redux/Slices/cartSlice'
import toast from 'react-hot-toast';
const Product = ({post}) => {
const {cart} = useSelector((state) => state);
const dispatch = useDispatch();

const removeHandler = () => {
    dispatch(remove(post))
    toast.error("Item Removed from Cart")
  }

const addHandler = () => {
  dispatch(add(post))
  toast.success("Item Added into Cart Added")
}
  return (
    <div className='bg-white flex flex-col items-center justify-between
    hover:scale-110 transition duration-300 ease-in
     rounded-xl gap-3 p-4 mt-10 ml-5 shadow-md
    hover:shadow-slate-600 hover:shadow-2xl hover:bg-white'>
        <div className='flex items-center justify-center'>
        <p className='text-gray-700 font-semibold text-lg text-left truncate w-40 mt-1'>{post.title}</p>
        </div>

        <div>
            <p className='w-40 text-gray-400 font-normal text-[10px] text-left'>{post.description.split(" ").slice(0, 10).join(" ") + "..."}</p>
        </div>

        <div className=''>
            <img className='h-[180px]' src={post.image} alt="" />
        </div>

        <div className='w-full flex mt-2 items-center justify-between'>
        <div>
            <p className='text-green-500 font-semibold'>${post.price}</p>
        </div>



        {
          cart.some((p)=> p.id === post.id)?(
          <button 
          className='select-none rounded-full border border-gray-900 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-gray-900 transition-all hover:opacity-75 focus:ring focus:ring-gray-300 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none'
          onClick={removeHandler}>
            Remove Item
          </button>):(
            <button 
            className='select-none rounded-full border border-gray-900 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-gray-900 transition-all hover:opacity-75 focus:ring focus:ring-gray-300 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none'
            onClick={addHandler}
            
            >
              Add to Cart
            </button>)
        }
        </div>
        
        
        
    </div>
    
  )
}

export default Product