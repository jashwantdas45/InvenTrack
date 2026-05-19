import SideBar from "../../components/SideBar";
import Category from "./Category";
import Orders from "./Orders";
import Products from "./Products";
import Dashboard from "./Deshboard";
import {Routes, Route} from "react-router-dom";
import { User, LogOut } from "lucide-react";
import { useState } from "react";

export default function Admin(){
  let [product,setProduct] = useState([]);
  let [orders,setOrders] = useState([]);
  let [category,setCategory] = useState([]);
  return(
    <div className="flex flex-col h-screen bg-gray-50 text-gray-800 font-sans">
      <div className="hidden">
        <SideBar/>
      </div>
      <div id="topBar" className="bg-white border-b border-gray-200 px-6 py-4 flex justify-between items-center shadow-sm z-10">
        <span className="flex flex-col">
          <h2 className="text-xl font-bold text-gray-900 tracking-tight">InvenTrack</h2>
          <p className="text-sm text-gray-500 font-medium">Admin Dashboard</p>
        </span>

        <span className="flex gap-4">
          <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-lg font-semibold shadow-md transition-colors duration-200 ease-in-out">
            <User className="w-5 h-5" /> Account
          </button>
        </span>
        
      </div>
     <div id="adminConntainer" className="flex flex-1 overflow-hidden">
        <div className="sidePennal w-64 hidden md:flex flex-shrink-0 z-0">
          <SideBar/>
        </div>
        <div className="mainPannel flex-1 p-6 md:p-8 overflow-y-auto w-full">
        <Routes>
          <Route path="" element={<Dashboard/> }/>
          <Route path="/Products" element={<Products product={product} setProduct={setProduct}/> }/>
          <Route path="/Category" element={<Category/> }/>
          <Route path="/Orders" element={<Orders/> }/>
          
        
        </Routes>
        </div>
     </div>

    </div>
  )
}