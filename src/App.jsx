import NavBar from "./components/NavBar"
import Footer from "./components/Footer"

import Home from "./pages/Home/Home"
import Admin from "./pages/admin/Admin"
import { BrowserRouter,Routes,Route } from "react-router-dom"

export default function App(){
  return(
    <BrowserRouter>
    <NavBar/>
    <Routes >
     <Route path="/" element={<Home/>}/>
     <Route path="/admin/*" element={<Admin/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
  )
}