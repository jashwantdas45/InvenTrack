import SideBar from "../../components/SideBar";
import Category from "./Category";
import Orders from "./Orders";
import Products from "./Products";
import Dashboard from "./Deshboard";
import {Routes, Route} from "react-router-dom";
import { User, LogOut } from "lucide-react";
import { useState, useEffect } from "react";

export default function Admin(){
  const [product, setProduct] = useState(() => {
    const saved = localStorage.getItem("inventrack_products");
    return saved ? JSON.parse(saved) : [];
  });
  const [order, setOrder] = useState(() => {
    const saved = localStorage.getItem("inventrack_orders");
    return saved ? JSON.parse(saved) : [];
  });
  const [category, setCategory] = useState(() => {
    const saved = localStorage.getItem("inventrack_categories");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("inventrack_products", JSON.stringify(product));
  }, [product]);

  useEffect(() => {
    localStorage.setItem("inventrack_orders", JSON.stringify(order));
  }, [order]);

  useEffect(() => {
    localStorage.setItem("inventrack_categories", JSON.stringify(category));
  }, [category]);
  return(
    <div className="flex flex-col h-screen bg-slate-50 text-slate-800 font-sans">
      <div className="hidden">
        <SideBar/>
      </div>
      <div id="topBar" className="bg-white border-b border-slate-200 px-6 py-3 flex justify-between items-center z-10">
        <div className="flex items-center gap-2 text-xs font-semibold text-slate-400 uppercase tracking-wider">
          <span>Admin Panel</span>
          <span>/</span>
          <span className="text-indigo-600">Workspace</span>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 px-3 py-1.5 bg-slate-50 border border-slate-200 rounded-lg text-xs font-semibold text-slate-600 shadow-sm">
            <User className="w-3.5 h-3.5 text-indigo-500" />
            <span>Administrator</span>
          </div>
        </div>
      </div>
     <div id="adminConntainer" className="flex flex-1 overflow-hidden">
        <div className="sidePennal w-64 hidden md:flex flex-shrink-0 z-0">
          <SideBar/>
        </div>
        <div className="mainPannel flex-1 p-6 md:p-8 overflow-y-auto w-full">
        <Routes>
          <Route path="" element={<Dashboard product={product} order={order} /> }/>
          <Route path="/Products" element={<Products product={product} setProduct={setProduct} category={category}/> }/>
          <Route path="/Category" element={<Category category={category} setCategory={setCategory}/> }/>
          <Route path="/Orders" element={<Orders order={order} setOrder={setOrder}/> }/>
          
        
        </Routes>
        </div>
     </div>

    </div>
  )
}