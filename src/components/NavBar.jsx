import { Search, Package, LayoutDashboard } from 'lucide-react';
import { Link, NavLink } from 'react-router-dom';

export default function NavBar() {
  return (
    <nav className="bg-white border-b border-slate-200 shadow-sm px-6 py-4 flex items-center justify-between sticky top-0 z-50">
      {/* Left side: Logo & Search */}
      <div className="flex items-center space-x-8">
        <Link to="/" className="flex items-center space-x-2.5">
          <div className="p-1.5 bg-indigo-50 text-indigo-600 rounded-lg border border-indigo-100 shadow-sm">
            <Package className="w-5 h-5" />
          </div>
          <span className="text-lg font-bold text-slate-800 tracking-tight">InvenTrack</span>
        </Link>
        
        <div className="hidden md:flex items-center bg-slate-50 rounded-xl px-3 py-2 border border-slate-200 focus-within:ring-2 focus-within:ring-indigo-500/20 focus-within:border-indigo-500 transition-all duration-200">
          <Search className="w-4 h-4 text-slate-400" />
          <input 
            type="text" 
            placeholder="Quick search..." 
            className="bg-transparent border-none focus:outline-none ml-2 text-sm text-slate-600 placeholder-slate-400 w-48"
          />
        </div>
      </div>

      {/* Navigation Links */}
      <div className="flex items-center space-x-6">
        <NavLink 
          to="/" 
          end
          className={({ isActive }) => 
            `text-sm font-semibold transition-colors duration-200 ${
              isActive ? "text-indigo-600" : "text-slate-500 hover:text-indigo-600"
            }`
          }
        >
          Home
        </NavLink>
        
        <NavLink 
          to="/admin" 
          className={({ isActive }) => 
            `flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-200 ${
              isActive 
                ? "bg-indigo-600 text-white shadow-sm shadow-indigo-200" 
                : "bg-slate-50 text-slate-600 border border-slate-200 hover:bg-slate-100 hover:text-slate-800"
            }`
          }
        >
          <LayoutDashboard className="w-4 h-4" />
          Dashboard Panel
        </NavLink>
      </div>
    </nav>
  );
}

