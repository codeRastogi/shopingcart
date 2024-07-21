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
    <div>
        <div>
        <p>{post.title}</p>
        </div>

        <div>
            <p>{post.description}</p>
        </div>

        <div className='w-[100px]'>
            <img src={post.image} alt="" />
        </div>

        <div>
            <p>{post.price}</p>
        </div>



        {
          cart.some((p)=> p.id === post.id)?(
          <button onClick={removeHandler}>
            Remove Item
          </button>):(
            <button onClick={addHandler}>
              Add to Cart
            </button>)
        }
        
        
    </div>
  )
}

export default Product