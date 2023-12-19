import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate} from 'react-router-dom'
import FoodCard from './Foods/FoodCard'
import Success from '../Pages/Success'
import CartItem from './Cart/CartItem'

const ProtectedRoute = ({ element }) => {
  const cartItems = useSelector((state) => state.cart.cart);
  return cartItems.length >0 ? element :<Navigate 
  to={"/"} />
}

export default ProtectedRoute