import Cart from "../Components/Cart/Cart";
import CategoryMenu from "../Components/CategoryMenu/CategoryMenu";
import FoodItems from "../Components/Foods/FoodItems";
import Navbar from "../Components/Navbar/Navbar";

const Home = () => {
  return (
    <>
      <Navbar />
      <CategoryMenu />
      <FoodItems />
      <Cart/>
    </>
  );
};

export default Home;
