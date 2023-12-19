import { useEffect,useState } from "react"
import { PropagateLoader } from "react-spinners"
// If cart is empty: No items has bought else this
const Success = () => {
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    setTimeout(() => {
     setLoading(false)  
    }, 3000);
  }) 
  return (
    
    <div className=" flex gap-5 flex-col  justify-center    bg-neutral-800  items-center      h-screen ">
      {loading ? <PropagateLoader color="#36d7b7" />:    
      
      ( <div> 
      <h2 className=" font-semibold text-center mb-2 text-3xl text-white">Order Sucessful</h2>
      <p className="text-xl  text-white ">Your order has been placed sucessfully</p>
    </div>
   ) 
  }
  </div>    )
}

export default Success