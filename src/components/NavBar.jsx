import { Bell, Search, User, Package } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function NavBar() {
  return (
    <nav className="bg-white border-b border-gray-100 shadow-sm px-6 py-3 flex items-center justify-between">
      {/* Left side: Logo & Search */}
      <div className="flex items-center space-x-6">
        <Link to="/" className="flex items-center space-x-2">
          <Package className="w-6 h-6 text-indigo-600" />
          <span className="text-lg font-bold text-gray-800">InvenTrack</span>
        </Link>
        
        <div className="hidden md:flex items-center bg-gray-50 rounded-lg px-3 py-1.5 border border-gray-100">
          <Search className="w-4 h-4 text-gray-400" />
          <input 
            type="text" 
            placeholder="Search..." 
            className="bg-transparent border-none focus:outline-none ml-2 text-sm text-gray-600 placeholder-gray-400"
          />
        </div>
      </div>

      {/* Navigation Links */}
      <div className="flex items-center space-x-6">
        <Link to="/" className="text-gray-600 hover:text-indigo-600 font-medium text-sm transition-colors">Home</Link>
        
        <Link to="/admin" className="text-gray-600 hover:text-indigo-600 font-medium text-sm transition-colors">Admin</Link>
      </div>

      {/* Right side: User Profile & Notifications */}
      <div className="flex items-center space-x-4  bg-indigo-600 px-4 py-2 rounded">
        <Link to="/dashboard" className="text-gray-600 font-medium text-sm transition-colors text-white">Dashboard</Link>
      </div>
    </nav>
  );
}

