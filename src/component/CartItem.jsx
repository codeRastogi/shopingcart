import React from 'react'
import toast from 'react-hot-toast';
import { MdDelete } from "react-icons/md";
import { useDispatch } from 'react-redux'
import { remove } from '../redux/Slices/cartSlice';

export const CartItem = ({item}) => {

    const dispatch = useDispatch();
    const deleteHandler = () => {
        dispatch(remove(item));
        toast.error("Item Removed");
    }
  return (
    <div className='flex justify-between w-[40vw] border-slate-600 border-b-2'>

  <div className='relative flex w-full p-6 items-center gap-3'>

    
    <div className='w-[120px] flex-shrink-0'>
      <img 
        className='w-full h-auto' 
        src={item.image} 
        alt='item'
      />
    </div>

    <div className='ml-4'>
      <h1 className='font-bold text-lg'>{item.title}</h1>
      <h1 className='text-gray-600'>
        {item.description.split(" ").slice(0, 15).join(" ") + "..."}
      </h1>
      <div className='flex mt-6 items-center justify-between w-[80%]'>
        <p className='text-xl font-semibold text-green-500'>${item.price}</p>
        <div 
          className='ml-4 text-black cursor-pointer  hover:bg-red-500 rounded-full p-1 hover:ease-in-out' 
          onClick={deleteHandler}
        >
          <MdDelete size={20}/>
        </div>
      </div>
    </div>
    
  </div>

</div>
  )
}
