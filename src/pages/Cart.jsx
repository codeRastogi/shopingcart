import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { CartItem } from '../component/CartItem';
import toast from 'react-hot-toast';
import { clearCart } from '../redux/Slices/cartSlice';

export const Cart = () => {
    const [totalAmount, setTotalAmount] = useState(0);
    const { cart } = useSelector((state) => state);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        setTotalAmount(cart.reduce((acc, curr) => acc + curr.price, 0));
    }, [cart]);

    const checkout = () => {
        navigate("/");
        toast.success("Thanks For Shopping");
        dispatch(clearCart());
    };

    return (
        <div className='p-4 md:p-8 flex flex-col items-center'>
            {cart.length === 0 ? (
                <div className='flex flex-col h-screen justify-center items-center gap-8'>
                    <h1 className='font-semibold text-2xl md:text-5xl font-mono'>Cart is Empty</h1>
                    <Link to={"/"}>
                        <button className='inline-flex overflow-hidden text-white bg-gray-900 rounded group'>
                            <span className="px-3.5 py-3 text-white bg-purple-500 group-hover:bg-green-600 flex items-center justify-center">
                                <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path>
                                </svg>
                            </span>
                            <span className="pl-4 pr-5 py-2.5 font-semibold text-sm md:text-base">Shop Now</span>
                        </button>
                    </Link>
                </div>
            ) : (
                <div className='flex flex-col md:flex-row md:space-x-16 w-full max-w-screen-lg'>
                    <div className='flex flex-col flex-grow'>
                        {cart.map((item, index) => (
                            <CartItem key={item.id} item={item} />
                        ))}
                    </div>
                    <div className='flex flex-col w-full md:w-[320px] mt-4 md:mt-0'>
                        <div className='text-green-600 font-semibold mb-4'>
                            <div className='text-2xl md:text-3xl'>YOUR CART SUMMARY</div>
                        </div>
                        <p className='font-bold mb-2'>
                            <span>Total Item: {cart.length}</span>
                        </p>
                        <p className='font-semibold text-lg md:text-xl mb-4'>Total Amount: <span className='font-bold'>${totalAmount}</span></p>
                        <button
                            onClick={checkout}
                            className="px-8 py-2 rounded-full bg-slate-700 text-white text-sm md:text-base hover:shadow-2xl hover:bg-black transition duration-200 border border-slate-600">
                            Checkout Now
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};
