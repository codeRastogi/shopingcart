import React from 'react'
import toast from 'react-hot-toast';
import {FcDeleteDatabase} from 'react-icons/fc'
import { useDispatch } from 'react-redux'
import { remove } from '../redux/Slices/cartSlice';

export const CartItem = ({item}) => {

    const dispatch = useDispatch();
    const deleteHandler = () => {
        dispatch(remove(item));
        toast.error("Item Removed");
    }
  return (
    <div>

        <div>

            <div className='w-[100px]'>
                <img src={item.image} alt='item'/>
            </div>

            <div>
                <h1>{item.title}</h1>
                <h1>{item.description}</h1>

                <div>

                    <p>{item.price}</p>

                    <button onClick={deleteHandler}>
                        <FcDeleteDatabase/>
                    </button>

                </div>
            </div>


        </div>

    </div>
  )
}
