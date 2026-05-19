import { ArrowRight, BarChart2, Box, Shield, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import dashboardMockup from '../../assets/dashboard_mockup.png';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-32 px-6 lg:px-8">
        <div className="absolute top-0 inset-x-0 h-64 bg-gradient-to-b from-indigo-50 to-transparent"></div>
        <div className="
        max-w-7xl mx-auto relative z-10 text-center">
          <div className="inline-flex items-center space-x-2 bg-indigo-50 text-indigo-700 px-4 py-2 rounded-full mb-8 shadow-sm border border-indigo-100">
            <span className="flex h-2 w-2 rounded-full bg-indigo-600 animate-pulse"></span>
            <span className="text-sm font-semibold tracking-wide uppercase">Introducing InvenTrack 2.0</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8 text-gray-900">
            Smart Inventory Management<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
              Made Simple.
            </span>
          </h1>
          
          <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto mb-10 font-light leading-relaxed">
            Take control of your stock, automate your workflows, and boost your bottom line with our intuitive and powerful inventory tracking platform.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Link to="/admin" className="px-8 py-4 bg-indigo-600 text-white font-bold rounded-xl shadow-lg shadow-indigo-200 hover:-translate-y-1 hover:shadow-xl transition-all duration-300 flex items-center group w-full sm:w-auto justify-center">
              Go to Dashboard
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <button className="px-8 py-4 bg-white text-gray-700 font-bold rounded-xl border border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition-all duration-300 w-full sm:w-auto">
              Book a Demo
            </button>
          </div>

          <div className="mt-16 sm:mt-24 w-full px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
            <div className="relative rounded-2xl p-2 sm:p-4 bg-white/40 ring-1 ring-black/5 backdrop-blur-sm shadow-2xl overflow-hidden hover:scale-[1.02] transition-transform duration-500">
              <img
                src={dashboardMockup}
                alt="InvenTrack Dashboard Mockup"
                className="rounded-xl border border-gray-100/50 object-cover w-full h-auto shadow-sm"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Everything you need to scale</h2>
            <p className="text-lg text-gray-600">Powerful features designed to help your business grow without the growing pains.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard 
              icon={<Box className="w-8 h-8 text-indigo-600" />}
              title="Real-time Tracking"
              description="Monitor your stock levels in real-time across multiple locations with unparalleled accuracy."
            />
            <FeatureCard 
              icon={<BarChart2 className="w-8 h-8 text-purple-600" />}
              title="Advanced Analytics"
              description="Make data-driven decisions with comprehensive reports and predictive inventory forecasting."
            />
            <FeatureCard 
              icon={<Zap className="w-8 h-8 text-amber-500" />}
              title="Automated Workflows"
              description="Set up low stock alerts and automated reordering to never run out of your best sellers."
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-indigo-600"></div>
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-2xl opacity-50"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-indigo-400 rounded-full mix-blend-multiply filter blur-2xl opacity-50"></div>
        
        <div className="relative max-w-4xl mx-auto px-6 text-center z-10">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Ready to transform your business?</h2>
          <p className="text-indigo-100 text-xl mb-10">Join thousands of businesses already using InvenTrack to streamline their operations.</p>
          <button className="px-8 py-4 bg-white text-indigo-600 font-bold rounded-xl shadow-xl hover:scale-105 transition-all duration-300">
            Start Your Free Trial
          </button>
        </div>
      </section>
    </div>
  );
}

function FeatureCard({ icon, title, description }) {
  return (
    <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100 hover:border-indigo-100 hover:shadow-lg transition-all duration-300 group hover:-translate-y-1">
      <div className="bg-white w-16 h-16 rounded-xl flex items-center justify-center shadow-sm mb-6 group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 leading-relaxed">
        {description}
      </p>
    </div>
  );
}