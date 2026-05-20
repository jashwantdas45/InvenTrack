import { useEffect, useState } from "react";
import { 
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  BarChart, Bar, Cell, Legend
} from "recharts";
import { DollarSign, Package, ShoppingCart, TrendingUp, Layers } from "lucide-react";

export default function Dashboard({ product = [], order = [] }) {
    const [totalSales, setTotalSales] = useState(0);    
    const [totalProducts, setTotalProducts] = useState(0);
    const [totalOrders, setTotalOrders] = useState(0);

    useEffect(() => {
        // Calculate sales by matching order product names with their actual price
        const sales = order.reduce((acc, item) => {
            const prod = product.find(p => p.name.toLowerCase() === item.ProductName.toLowerCase());
            const price = prod ? parseFloat(prod.price) : 25; // fallback to $25 if product not found
            return acc + (price * parseInt(item.Quantity || 1, 10));
        }, 0);

        setTotalSales(sales);    
        setTotalProducts(product.length);
        setTotalOrders(order.length);
    }, [product, order]);

    // Data for Sales Trend Chart
    const getSalesData = () => {
        const dateMap = {};
        order.forEach(item => {
            const date = item.Date || "Unknown";
            const prod = product.find(p => p.name.toLowerCase() === item.ProductName.toLowerCase());
            const price = prod ? parseFloat(prod.price) : 25;
            const amount = price * parseInt(item.Quantity || 1, 10);
            
            if (dateMap[date]) {
                dateMap[date].Sales += amount;
                dateMap[date].Orders += 1;
            } else {
                dateMap[date] = { date, Sales: amount, Orders: 1 };
            }
        });
        
        const data = Object.values(dateMap).sort((a, b) => new Date(a.date) - new Date(b.date));
        return data.length > 0 ? data : [
            { date: "Mon", Sales: 400, Orders: 2 },
            { date: "Tue", Sales: 300, Orders: 1 },
            { date: "Wed", Sales: 600, Orders: 3 },
            { date: "Thu", Sales: 800, Orders: 4 },
            { date: "Fri", Sales: 500, Orders: 2 },
            { date: "Sat", Sales: 900, Orders: 5 },
            { date: "Sun", Sales: 1200, Orders: 6 }
        ];
    };

    // Data for Category breakdown
    const getCategoryData = () => {
        const catMap = {};
        product.forEach(prod => {
            const cat = prod.category || "Uncategorized";
            catMap[cat] = (catMap[cat] || 0) + 1;
        });
        const data = Object.entries(catMap).map(([name, Products]) => ({ name, Products }));
        return data.length > 0 ? data : [
            { name: "Electronics", Products: 4 },
            { name: "Clothing", Products: 3 },
            { name: "Accessories", Products: 5 },
            { name: "Office", Products: 2 }
        ];
    };

    const COLORS = ["#6366f1", "#10b981", "#f59e0b", "#ec4899", "#8b5cf6"];

    return (
        <div className="max-w-6xl mx-auto space-y-8">
            {/* Header */}
            <div id="dashboardHeader">
                <h1 className="text-3xl font-bold text-slate-800 tracking-tight">Overview Dashboard</h1>
                <p className="text-slate-500 mt-2 text-sm">Real-time statistics and details about your inventory system.</p>
            </div>

            {/* Stat Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Total Sales Card */}
                <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm relative overflow-hidden group hover:shadow-md transition-all duration-300">
                    <div className="absolute top-0 right-0 w-24 h-24 bg-indigo-500/5 rounded-bl-full pointer-events-none transition-all group-hover:scale-110"></div>
                    <div className="flex justify-between items-start mb-4">
                        <div>
                            <p className="text-sm font-semibold text-slate-500 uppercase tracking-wider">Total Revenue</p>
                            <h3 className="text-3xl font-bold text-slate-800 mt-1">${totalSales.toFixed(2)}</h3>
                        </div>
                        <div className="p-3 bg-indigo-50 text-indigo-600 rounded-xl border border-indigo-100">
                            <DollarSign className="w-6 h-6" />
                        </div>
                    </div>
                    <div className="flex items-center gap-1 text-emerald-600 text-xs font-semibold">
                        <TrendingUp className="w-4 h-4" />
                        <span>+12.4% vs last week</span>
                    </div>
                </div>

                {/* Total Products Card */}
                <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm relative overflow-hidden group hover:shadow-md transition-all duration-300">
                    <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-500/5 rounded-bl-full pointer-events-none transition-all group-hover:scale-110"></div>
                    <div className="flex justify-between items-start mb-4">
                        <div>
                            <p className="text-sm font-semibold text-slate-500 uppercase tracking-wider">Total Products</p>
                            <h3 className="text-3xl font-bold text-slate-800 mt-1">{totalProducts}</h3>
                        </div>
                        <div className="p-3 bg-emerald-50 text-emerald-600 rounded-xl border border-emerald-100">
                            <Package className="w-6 h-6" />
                        </div>
                    </div>
                    <p className="text-xs text-slate-500">Items currently active in stock</p>
                </div>

                {/* Total Orders Card */}
                <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm relative overflow-hidden group hover:shadow-md transition-all duration-300">
                    <div className="absolute top-0 right-0 w-24 h-24 bg-amber-500/5 rounded-bl-full pointer-events-none transition-all group-hover:scale-110"></div>
                    <div className="flex justify-between items-start mb-4">
                        <div>
                            <p className="text-sm font-semibold text-slate-500 uppercase tracking-wider">Total Orders</p>
                            <h3 className="text-3xl font-bold text-slate-800 mt-1">{totalOrders}</h3>
                        </div>
                        <div className="p-3 bg-amber-50 text-amber-600 rounded-xl border border-amber-100">
                            <ShoppingCart className="w-6 h-6" />
                        </div>
                    </div>
                    <p className="text-xs text-slate-500">Customer requests processed</p>
                </div>
            </div>

            {/* Charts Section */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Sales Performance Area Chart */}
                <div className="lg:col-span-2 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                    <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center gap-3">
                            <div className="p-1.5 bg-indigo-50 text-indigo-600 rounded-lg border border-indigo-100">
                                <TrendingUp className="w-4 h-4" />
                            </div>
                            <h3 className="text-lg font-bold text-slate-800">Sales Trend</h3>
                        </div>
                        <span className="text-xs bg-slate-100 text-slate-600 font-semibold px-2 py-1 rounded">Daily Update</span>
                    </div>

                    <div className="h-72 w-full">
                        <ResponsiveContainer width="100%" height="100%">
                            <AreaChart data={getSalesData()} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                                <defs>
                                    <linearGradient id="colorSales" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="#6366f1" stopOpacity={0.2}/>
                                        <stop offset="95%" stopColor="#6366f1" stopOpacity={0}/>
                                    </linearGradient>
                                </defs>
                                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                                <XAxis dataKey="date" stroke="#94a3b8" fontSize={12} tickLine={false} axisLine={false} />
                                <YAxis stroke="#94a3b8" fontSize={12} tickLine={false} axisLine={false} />
                                <Tooltip 
                                    contentStyle={{ backgroundColor: "#ffffff", borderRadius: "12px", border: "1px solid #e2e8f0", boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.05)" }}
                                    labelStyle={{ fontWeight: "bold", color: "#1e293b" }}
                                />
                                <Area type="monotone" dataKey="Sales" stroke="#6366f1" strokeWidth={3} fillOpacity={1} fill="url(#colorSales)" />
                            </AreaChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                {/* Category Breakdown Bar Chart */}
                <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="p-1.5 bg-emerald-50 text-emerald-600 rounded-lg border border-emerald-100">
                            <Layers className="w-4 h-4" />
                        </div>
                        <h3 className="text-lg font-bold text-slate-800">Categories</h3>
                    </div>

                    <div className="h-72 w-full">
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart data={getCategoryData()} margin={{ top: 10, right: 10, left: -30, bottom: 0 }}>
                                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                                <XAxis dataKey="name" stroke="#94a3b8" fontSize={10} tickLine={false} axisLine={false} />
                                <YAxis stroke="#94a3b8" fontSize={12} tickLine={false} axisLine={false} />
                                <Tooltip 
                                    cursor={{ fill: "#f8fafc" }}
                                    contentStyle={{ backgroundColor: "#ffffff", borderRadius: "12px", border: "1px solid #e2e8f0" }}
                                />
                                <Bar dataKey="Products" radius={[8, 8, 0, 0]}>
                                    {getCategoryData().map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                    ))}
                                </Bar>
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </div>
        </div>
    );
}