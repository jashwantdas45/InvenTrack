import { Box } from "lucide-react";

export default function Footer(){
  return (
    <footer className="w-full bg-white border-t border-slate-200 py-6 mt-12">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        
        {/* Branding & Logo */}
        <div className="flex items-center gap-2">
          <div className="p-1.5 bg-indigo-50 text-indigo-600 rounded-lg border border-indigo-100">
            <Box className="w-4 h-4" />
          </div>
          <span className="font-semibold text-slate-800 tracking-tight text-sm">
            InvenTrack <span className="text-xs font-normal text-slate-400">v1.0</span>
          </span>
        </div>

        {/* Copyright Text */}
        <p className="text-xs text-slate-400 text-center sm:text-left">
          &copy; {new Date().getFullYear()} InvenTrack. All rights reserved. Made for seamless management.
        </p>

        {/* Footer Quick Links */}
        <div className="flex items-center gap-5 text-xs font-medium text-slate-500">
          <a href="#" className="hover:text-indigo-600 transition-colors duration-200">Staging</a>
          <a href="#" className="hover:text-indigo-600 transition-colors duration-200">Docs</a>
          <a href="#" className="hover:text-indigo-600 transition-colors duration-200">Support</a>
        </div>

      </div>
    </footer>
  );
}
