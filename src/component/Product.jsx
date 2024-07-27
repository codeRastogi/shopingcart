import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { add, remove } from '../redux/Slices/cartSlice';
import toast from 'react-hot-toast';

const Product = ({ post }) => {
  const { cart } = useSelector((state) => state);
  const dispatch = useDispatch();

  const removeHandler = () => {
    dispatch(remove(post));
    toast.error("Item Removed from Cart");
  };

  const addHandler = () => {
    dispatch(add(post));
    toast.success("Item Added to Cart");
  };

  return (
    <div className='bg-white flex flex-col items-center justify-between
      hover:scale-105 transition duration-300 ease-in-out rounded-xl gap-3 p-4 m-5 shadow-md
      hover:shadow-xl hover:bg-gray-100'>
      <div className='flex items-center justify-center w-full'>
        <p className='text-gray-700 font-semibold text-lg text-center truncate w-full mt-1'>{post.title}</p>
      </div>

      <div className='w-full'>
        <p className='text-gray-400 font-normal text-xs text-left truncate'>{post.description.split(" ").slice(0, 10).join(" ") + "..."}</p>
      </div>

      <div className='w-full flex justify-center'>
        <img className='h-36 w-auto object-contain' src={post.image} alt={post.title} />
      </div>

      <div className='w-full flex mt-2 items-center justify-between'>
        <div>
          <p className='text-green-500 font-semibold'>${post.price}</p>
        </div>

        {
          cart.some((p) => p.id === post.id) ? (
            <button 
              className='select-none rounded-full border border-gray-900 py-2 px-4 text-center align-middle font-sans text-xs font-bold uppercase text-gray-900 transition-all hover:opacity-75 focus:ring focus:ring-gray-300 active:opacity-85 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none'
              onClick={removeHandler}>
              Remove Item
            </button>
          ) : (
            <button 
              className='select-none rounded-full border border-gray-900 py-2 px-4 text-center align-middle font-sans text-xs font-bold uppercase text-gray-900 transition-all hover:opacity-75 focus:ring focus:ring-gray-300 active:opacity-85 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none'
              onClick={addHandler}
            >
              Add to Cart
            </button>
          )
        }
      </div>
    </div>
  );
};

export default Product;
