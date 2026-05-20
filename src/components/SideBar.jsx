import { NavLink } from "react-router-dom";
import { LayoutDashboard, Package, ShoppingCart, FolderOpen, Box } from "lucide-react";

export default function SideBar(){
    return(
        <aside className="w-full h-full bg-slate-900 text-slate-400 flex flex-col shadow-xl border-r border-slate-800">
          <div id="logo" className="px-6 py-5 border-b border-slate-800 flex items-center gap-2">
            <Box className="w-6 h-6 text-indigo-500" />
            <span className="text-xl font-bold tracking-tight text-white">InvenTrack</span>
          </div>
          <ul className="flex flex-col p-4 space-y-1.5 mt-4">
            <li>
              <NavLink 
                to="/admin" 
                end
                className={({ isActive }) => 
                  `flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 font-semibold text-sm ${
                    isActive 
                      ? "bg-indigo-600 text-white shadow-md shadow-indigo-600/10" 
                      : "hover:bg-slate-800 hover:text-white"
                  }`
                }
              >
                <LayoutDashboard className="w-4 h-4" /> Dashboard
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/admin/Products" 
                className={({ isActive }) => 
                  `flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 font-semibold text-sm ${
                    isActive 
                      ? "bg-indigo-600 text-white shadow-md shadow-indigo-600/10" 
                      : "hover:bg-slate-800 hover:text-white"
                  }`
                }
              >
                <Package className="w-4 h-4" /> Products
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/admin/Orders" 
                className={({ isActive }) => 
                  `flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 font-semibold text-sm ${
                    isActive 
                      ? "bg-indigo-600 text-white shadow-md shadow-indigo-600/10" 
                      : "hover:bg-slate-800 hover:text-white"
                  }`
                }
              >
                <ShoppingCart className="w-4 h-4" /> Orders
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/admin/Category" 
                className={({ isActive }) => 
                  `flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 font-semibold text-sm ${
                    isActive 
                      ? "bg-indigo-600 text-white shadow-md shadow-indigo-600/10" 
                      : "hover:bg-slate-800 hover:text-white"
                  }`
                }
              >
                <FolderOpen className="w-4 h-4" /> Category
              </NavLink>
            </li>
          </ul>
        </aside>
    )
}