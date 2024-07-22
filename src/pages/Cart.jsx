import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom';
import { CartItem } from '../component/CartItem';
import toast from 'react-hot-toast';
import { clearCart } from '../redux/Slices/cartSlice';

export const Cart = () => {
    const [totalAmount, setTotalAmount] = useState(0);

    const { cart } = useSelector((state) => state);

    const dispatch = useDispatch();
    useEffect(() => {
        setTotalAmount(cart.reduce((acc, curr) => acc + curr.price, 0));
    }, [cart])

    const navigate = useNavigate();
    const checkout = () => {
        navigate("/");
        toast.success("Thanks For Shopping");
        dispatch(clearCart(cart));
    }
    return (
        <div>

            {
                cart.length === 0 ? (
                    <div>
                        <h1>Cart Empty</h1>
                        <Link to={"/"}>
                            <button>
                                Shop Now
                            </button>
                        </Link>
                    </div>
                ) : (

                    <div className='flex justify-center gap-40 mr-[30vw]'>

                        <div className='flex flex-col justify-between'>
                            {
                                cart.map((item, index) => (
                                    <CartItem key={item.id} item={item} itemIndex={index} />
                                ))
                            }
                        </div>

                        <div className='flex flex-col gap-[40vh] ml-[80vw] fixed'>
                            <div className='mt-[5vh] flex flex-col items-start gap-5'>
                                <div className='text-green-600 font-semibold'>
                                    <div className='ml-[5px]'>YOUR CART</div>
                                    <div className='text-6xl'>SUMMARY</div>
                                </div>


                                <p className='font-bold ml-1'>
                                    <span>Total Item : {cart.length}</span>
                                </p>
                            </div>

                            <div className='flex flex-col items-start mb-16 ml-2 gap-5'>
                                <p className='font-semibold text-xl'>Total Amount : <span className='font-bold'>${totalAmount}</span></p>

                                <button 
                                onClick={checkout}
                                className="px-16 py-3 rounded-full relative bg-slate-700 text-white text-sm hover:shadow-2xl hover:shadow-white/[0.1] transition duration-200 border border-slate-600">
                                    <div className="absolute inset-x-0 h-px w-1/2 mx-auto -top-px shadow-2xl  bg-gradient-to-r from-transparent via-teal-500 to-transparent" />
                                    <span className="relative z-20">
                                        Checkout Now
                                    </span>
                                </button>
                            </div>


                        </div>

                    </div>
                )
            }


        </div>
    )
}


