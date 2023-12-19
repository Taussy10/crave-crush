import {AiFillDelete} from "react-icons/ai";
import { AiOutlinePlusCircle } from "react-icons/ai";
import {GrSubtractCircle  } from "react-icons/gr";
import Data from '../../Data/Data'
import FoodData from "../../Data/Data";
import { useState } from "react";
import { useDispatch } from "react-redux";
import {removeFromCart,incrementQty, decrementQty } from "../../Redux/CartSlice"


// Here we have to work with data{adding removing numbers}that's why did'nt use tranlate method to delte the cart instead deleted the data so cart also deleted
const CartItem = ({id, img ,name,price,qty  }) => {
  const dispatch = useDispatch();
  return (
    // I don't know what is leading-2 but it made look better so used it 
    <div className=  "    h-[70px]  w-[350px] leading-2 flex gap-2 mb-4  shadow-md rounded-lg p-2   
    ">
{/* Image */}
<div className="   " >
  <img className= " w-[50px]  h-[50px] " src= {img} alt="" />
</div>

{/* Features */}
<div className="">
  {/* upper    */}
  <div className="  flex justify-between gap-[6.75rem]">
      <AiFillDelete onClick={()=>  dispatch(removeFromCart({id,name,price,img,qty})) }  className=" absolute right-4 hover:text-red-500 "/> 
  <h1 className="   text-gray-800 font-semibold">{name.slice(0, 15)}...</h1>

  </div>
{/* Lower */}
  <div className=" flex justify-between ">
    <span className=" text-green-500"> ₹{price}</span>
    {/* Inc/Dec comp */}
    <div className=" flex   absolute right-0 items-center "> 

{/* Add/Remove section */}
    <div className=" flex  items-center  mr-2 "> 
    <AiOutlinePlusCircle onClick={()=> dispatch(incrementQty({id}))}  className=" font-bold   text-gray-700 mx-1 rounded-lg  cursor-pointer hover:bg-green-500 "/> 

   <span className="  font-semibold  text-green-500    ">{qty}</span> 
   <GrSubtractCircle 
onClick={()=> qty > 1 ? dispatch(decrementQty({id})) :(qty=1)}   className="  mx-1     font-bold  rounded-lg hover:bg-red-500 cursor-pointer "/>

   </div>
    </div>
  </div>
</div>
</div>









    // <div className=" font-bold w-[250px] p-5    bg-white flex flex-col gap-2 
    //  rounded-lg
    // ">
    // <img  src='' alt="sdfsd"
    // className=" w-auto  h-[130px] hover:scale-110 rounded-lg cursor-grab
    //  transition-all duration-500 ease-in-out"/>

    // <div className="  flex justify-between">
    //   <h1>{name}</h1>
    //   {/* ctrl+alt+4 for rupee */}
    //   <span className=" text-green-600">
    //     ₹{}</span>
    // </div>
    // <div className=" text-sm font-normal">
    //   <p>{}...</p>

    // <div className=" flex justify-between">
    //   <span className=" flex items-center  gap-2 font-bold"><BiSolidStar className=" text-yellow-500"/> {}</span>
    //   <button className=" bg-green-500 border rounded-lg   p-1 text-white hover:bg-green-600">Add to cart</button>
    //   </div>
    // </div>
    // </div>
  )
}

export default CartItem