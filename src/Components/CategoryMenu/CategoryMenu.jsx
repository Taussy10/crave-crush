// Category should by dynamic so that w e can work with foodItem
import { useState,useEffect } from "react"
import FoodData from "../../Data/Data"
import { useDispatch,useSelector } from "react-redux"
// import , { categorySlice } from "../../Redux/CategorySlice"
import { setCategory } from "../../Redux/CategorySlice"
const CategoryMenu = () => {
const [categories, setCategories] = useState([])
const dispatch = useDispatch()

// state.category.category = to understand state.category see CategorySLice file and .category is coming from store store has slices so we are getting from there
const selectedCategory = useSelector((state)=> state.category.category ) 

const listUniqueCategories = () => {

  const uniqueCategories = [ 
  ...new  Set(FoodData.map((food)=> food.category ))
];
setCategories(uniqueCategories);
console.log(uniqueCategories);
} 

useEffect(() => {
listUniqueCategories()
} , [] ) 




  return (
    <>
    <h1 className="m-4 font-bold text-xl">Find the best food</h1>
    <div className=" m-3 ">
    <button onClick={()=>dispatch(setCategory("All"))}  className={` px-3 py-2 border  border-black m-2 rounded-lg bg-gray-300 font-bold  hover:bg-green-500 hover:text-white ${selectedCategory === "All" && " bg-green-500 text-white" } `} >All</button>
    {categories.map((category,index)=>  {
return(
  <button onClick={()=>dispatch(setCategory(category))} key={index} className={` px-3 py-2 border  border-black m-2 rounded-lg bg-gray-300 font-bold  hover:bg-green-500 hover:text-white ${selectedCategory ===  category && " bg-green-500 text-white" } `} >{category}</button>
)
    }

)}
   
    </div>
    </>
  )
}

export default CategoryMenu