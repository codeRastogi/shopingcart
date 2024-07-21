import React from 'react'
import { IoCartOutline } from "react-icons/io5";
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
const NavBar = () => {
  const{cart} = useSelector((state) => state);
  return (
    <div className='flex items-center justify-center'>
        <div className='flex flex-row justify-between w-[80%]'>
            <NavLink to={"/"}>
            <img src='../logo.png' width={100} alt='logo'/>
            </NavLink>

            <NavLink to={"/"}>
            <p>Home</p>
            </NavLink>

            <NavLink to={"/cart"}>
            <div>
            <span>{cart.length}</span>
            <IoCartOutline/>
            </div>
            
            </NavLink>
            
            
        </div>

    </div>
  )
}

export default NavBar