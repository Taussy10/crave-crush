import { FaShoppingCart } from "react-icons/fa";
import { AiOutlineCloseCircle } from "react-icons/ai";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


const Cart = () => {
// How does cart show and hidden is working: you may think that bro why why when I click on close button or cart button then it close/open because we use the useState hook that helps to change the state of cart wherever you use the function it will close the cart even on where My Order written  
// 1{C}. intialState activeCart = false
const [activeCart, setActiveCart] = useState(false)
const cartItems = useSelector((state) => state.cart.cart) 

// variableName totalQty  and parameter=callBack function totalQty is two diffrent thing{learn about scope}
// 0 is intialState
const totalQty = cartItems.reduce((totalQty,item) => totalQty + item.qty, 0  )
const totalPrice  = cartItems.reduce((totalPrice,item) => totalPrice + item.qty* item.price,0   )
const navigate = useNavigate();



  console.log(cartItems);
  return (
    <>
    
    {/* This is biggest div for cart that starts making cart */}
    {/*2{C}  */}
    <div className= {`    fixed right-0 top-0 w-full md:w-[20vw]  h-full  bg-white   p-5  mb-3" ${activeCart ?"translate-x-0": "translate-x-full "} transition-all duration-500 z-50 `  } >

{/* This is for upper part of cart where My Order written */}
      <div  className="    flex  justify-between  items-center mx-2  p-2    " >

        <span  className=" text-xl font-bold text-gray-800">My Order</span>
        {/* 2{C} When I click cross button then cart false basically cart close  */}
        <AiOutlineCloseCircle onClick={()=> setActiveCart(false)} className=" border-gray-600 hover:text-red-600  cursor-pointer  "/>
      </div>
      
{/* This is middle part of cart */}
{
  cartItems.length >0 ? cartItems.map((food)=>{
    return <CartItem  key={food.id} 
    id={food.id} 
    name={food.name} 
    price={food.price} 
    img={food.img} 
    qty={food.qty} 
    rating={food.rating}   />
   }): <h2 className=" flex   justify-center    text-center  text-2xl font-bold text-gray-600 ">Add something in Cart</h2>
}



{/* This is for bottom part of cart */}
    <div className="   flex flex-col fixed  bottom-0 mb-2">
    <span className=" text-sm font-semibold text-gray-800">Items: {totalQty}</span>
    <span className=" text-sm font-semibold text-gray-800">Total Amount: ₹{totalPrice}</span>
    {/*md:w-[20vw] : when the screen matches minimum 768px then this will apply otherwise
      w-[100vw]    */}

      {/* Always write page name for navigate in smallcase not UpperCase although both are correct but follow convention of writing smallcase */}
    <button onClick={() => navigate("success")  }  className="  text-2xl  text-white bg-green-500 rounded-lg w-[90vw] md:w-[18vw]    h-10  
      ">Place Order</button>
    </div>
    </div>
    {/* 2{B} when i click shoppingCart button it becomes true which basically means show cart  */}
    <FaShoppingCart onClick={() => setActiveCart(true) } className={` rounded-full  shadow-md   text-5xl p-3  fixed   bottom-10 right-4   bg-white 
    
    ${totalQty > 0  && " animate-bounce delay-500  transition-all"  }  `}  />
    </>
  )
}
// {console.log('hello');}
export default Cart