import { BrowserRouter, Route, Routes } from "react-router-dom"
// Protected routes: we want to protect a route{pages} that no one can't go if certain conditon not fullfill e.g. if you don't login then you can't enter in site
import  Home from "./Pages/Home"
import Success from "./Pages/Success"
import Error from "./Pages/Error"
import ProtectedRoute from "./Components/ProtectedRoute"

 {/*  anything you write except that already assigned example: /sucess = No error but /Chuha = error  */ }
const App = () => {
  return (
<BrowserRouter>
<Routes>
  {/* Every route path can be written in both small and capital first letter but by convention always write small letter*/}
  <Route path="/" element={<Home/>}  />
  <Route path="/success" element={<ProtectedRoute  element={<Success/>}/>}  />
  <Route path="/*" element={<Error/>}  />
</Routes>
</BrowserRouter>    
  )
}

export default App