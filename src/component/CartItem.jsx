import React from 'react';
import toast from 'react-hot-toast';
import { MdDelete } from "react-icons/md";
import { useDispatch } from 'react-redux';
import { remove } from '../redux/Slices/cartSlice';

export const CartItem = ({ item }) => {
    const dispatch = useDispatch();
    const deleteHandler = () => {
        dispatch(remove(item));
        toast.error("Item Removed");
    };

    return (
        <div className='flex flex-col md:flex-row justify-between w-full border-slate-600 border-b-2 mb-4'>
            <div className='relative flex p-4 items-center gap-4'>
                <div className='w-[120px] flex-shrink-0'>
                    <img 
                        className='w-full h-auto object-cover' 
                        src={item.image} 
                        alt='item'
                    />
                </div>
                <div className='ml-4 flex flex-col'>
                    <h1 className='font-bold text-lg'>{item.title}</h1>
                    <h1 className='text-gray-600 text-sm'>{item.description.split(" ").slice(0, 10).join(" ") + "..."}</h1>
                    <div className='flex items-center justify-between mt-4'>
                        <p className='text-xl font-semibold text-green-500'>${item.price}</p>
                        <div 
                            className='text-black cursor-pointer hover:bg-red-500 rounded-full p-2'
                            onClick={deleteHandler}
                        >
                            <MdDelete size={20} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
