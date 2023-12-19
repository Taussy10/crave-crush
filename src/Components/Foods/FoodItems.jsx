import FoodCard from "./FoodCard";
import FoodData from "../../Data/Data";
import { useSelector } from "react-redux";

const FoodItems = () => {
  // state.category from categorySlice and category is coming from store{to get reducer{cetegory}}
  let category = useSelector((state) => state.category.category)
  let search = useSelector((state)=>state.search.search )
  console.log(search);
  
  return (
    // Saare card to flex kr diya
    <div
      className=" flex flex-wrap  gap-10
     mx-10 justify-center my-10
    " >
      

      {/* {FoodData.filter((food) => {
        if (category === "All") {
          return food;
        } else {
          return category === food.category; // Fix the assignment to comparison
        } */}
  {
  FoodData.filter((food)=>{
    if (category === "All") {
      return food.name.toLowerCase().includes(search.toLowerCase()); 
    }else{
    return  category === food.category && food.name.toLowerCase().includes(search.toLowerCase()); 
    }
    // .map((food)=>(we use round brackets cause we want to use JSX) )
  }).map((food)=>(
    <FoodCard
    key={food.id}
    id={food.id}
    img={food.img}
    name={food.name}
    price={food.price}
    desc={food.desc}
    rating={food.rating}
    //  category={food.category}
  />
  ))
 } 
    </div>
  );
};

export default FoodItems;
