import { Link } from "react-router-dom";
import { LayoutDashboard, Package, ShoppingCart, Box } from "lucide-react";

export default function SideBar(){
    return(
        <aside className="w-full h-full bg-gray-900 text-white flex flex-col shadow-xl">
          <div id="logo" className="p-6 border-b border-gray-800 flex items-center justify-center gap-2">
            <Box className="w-8 h-8 text-blue-500" />
            <span className="text-2xl font-bold tracking-wider text-blue-500">InvenTrack</span>
          </div>
          <ul className="flex flex-col p-4 space-y-2 mt-2">
            <li>
              <Link to="/admin" className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-gray-800 hover:text-blue-400 transition-colors duration-200 font-medium">
                <LayoutDashboard className="w-5 h-5" /> Dashboard
              </Link>
            </li>
            <li>
              <Link to="/admin/products" className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-gray-800 hover:text-blue-400 transition-colors duration-200 font-medium">
                <Package className="w-5 h-5" /> Products
              </Link>
            </li>
            <li>
              <Link to="/admin/orders" className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-gray-800 hover:text-blue-400 transition-colors duration-200 font-medium">
                <ShoppingCart className="w-5 h-5" /> Orders
              </Link>
            </li>
            <li>
              <Link to="/admin/Category" className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-gray-800 hover:text-blue-400 transition-colors duration-200 font-medium">
                <Box className="w-5 h-5" />Category
              </Link>
            </li>
            
              
          
          </ul>
        </aside>
    )
}