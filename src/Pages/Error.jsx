/* If somone is write out of router 
example: http://localhost:5173/Chuha
then error should be given*/



const Error = () => {
  return (
    <div>Error</div>
  )
}

export default Error




// import { useRouteError } from "react-router-dom"

// const Error = () => {
//   const error = useRouteError();
//   console.log(error);
//   return (
//     <>Error
//     <h1>Oops It is an Error</h1>
//     <p>
//       <i>{error.statusText||error.message}</i>
//     </p>
//     </>
//   )
// }

// export default Error;