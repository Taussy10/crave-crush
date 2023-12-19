import React from "react";
import { BiSolidStar } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { addToCart } from "../../Redux/CartSlice";


const FoodCard = ({id, name, img, price, desc, rating }) =>{
const dispatch = useDispatch();






  return (
    <>
      <div className=" font-bold w-[250px] p-5 bg-white flex flex-col gap-2 rounded-lg">
        <img
          src={img}
          alt=""
          className=" w-auto  h-[130px] hover:scale-110 rounded-lg cursor-grab
           transition-all duration-500 ease-in-out
          "
        />
        <div className=" flex justify-between">
          <h1>{name}</h1>
          <span className=" text-green-600">₹{price}</span>
        </div>
        <div className=" text-sm font-normal">
          <p>{desc.slice(0, 50)}...</p>
          <div className=" flex justify-between">
            <span className=" flex items-center gap-2 font-bold">
              <BiSolidStar className=" text-yellow-500" /> {rating}
            </span>
            <button
            onClick={() => {
              dispatch(addToCart({id, name, img, price, desc, rating, qty:1 }))
            }}
              className="bg-green-500 border rounded-lg   p-1 text-white hover:bg-green-600"
            >
              Add to cart
            </button>
            
          </div>
        </div>
      </div>
    </>
  );
};

export default FoodCard;


//  bg-green-500 border rounded-lg   p-1 text-white hover:bg-green-600"

  {/*What's the use of: ctrl+alt+F4 in context of VS code react.jsx  */}

    // returning js that's why {} , if jsx then ()