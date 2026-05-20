import { Trash2, ShoppingBag, Plus } from "lucide-react";

export default function Orders({order,setOrder}){

    function handleSubmit(e){
        e.preventDefault();
        let data={
            CustomerName: e.target[0].value.trim(),
            ProductName: e.target[1].value.trim(),
            Quantity: parseInt(e.target[2].value, 10),
            Date: e.target[3].value,
        }
        
        setOrder([...order,data]);
        e.target.reset(); // Reset all form inputs
    }

    function handleDelete(indexToDelete) {
        setOrder(order.filter((_, index) => index !== indexToDelete));
    }

    return(
        <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div id="orderHeader" className="mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-bold text-slate-800 tracking-tight">Order Management</h1>
                    <p className="text-slate-500 mt-1 text-sm">Add, track, and manage customer orders in one place.</p>
                </div>
            </div>
           
            {/* Main Form Section */}
            <div id="orderForm" className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 md:p-8 relative overflow-hidden">
                {/* Decorative blob */}
                <div className="absolute -top-24 -right-24 w-64 h-64 bg-indigo-500/5 rounded-full blur-3xl pointer-events-none"></div>
                
                <div className="flex items-center gap-3 mb-6 relative z-10">
                    <div className="p-2 bg-indigo-50 text-indigo-600 rounded-xl border border-indigo-100">
                        <ShoppingBag className="w-5 h-5" />
                    </div>
                    <h2 className="text-lg font-semibold text-slate-800">Add New Order</h2>
                </div>

                <form className="space-y-6 relative z-10" onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <label className="flex flex-col gap-2">
                            <span className="text-sm font-semibold text-slate-700">Customer Name</span>
                            <input 
                                type="text" 
                                required 
                                className="px-4 py-2.5 text-slate-800 bg-slate-50/50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all duration-200 placeholder-slate-400" 
                                placeholder="e.g. John Doe" 
                            />
                        </label>
                        <label className="flex flex-col gap-2">
                            <span className="text-sm font-semibold text-slate-700">Product Name</span>
                            <input 
                                type="text" 
                                required 
                                className="px-4 py-2.5 text-slate-800 bg-slate-50/50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all duration-200 placeholder-slate-400" 
                                placeholder="e.g. Mechanical Keyboard" 
                            />
                        </label>
                        <label className="flex flex-col gap-2">
                            <span className="text-sm font-semibold text-slate-700">Quantity</span>
                            <input 
                                type="number" 
                                required 
                                min="1" 
                                className="px-4 py-2.5 text-slate-800 bg-slate-50/50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all duration-200 placeholder-slate-400" 
                                placeholder="1" 
                            />
                        </label>
                        <label className="flex flex-col gap-2">
                            <span className="text-sm font-semibold text-slate-700">Date</span>
                            <input 
                                type="date" 
                                required 
                                className="px-4 py-2.5 text-slate-800 bg-slate-50/50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all duration-200 text-slate-600" 
                            />
                        </label>
                    </div>
                    
                    <div className="mt-6 flex justify-end">
                        <button type="submit" className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2.5 px-6 rounded-xl shadow-sm shadow-indigo-200 hover:shadow-indigo-300 transition-all duration-200 flex items-center gap-2">
                            <Plus className="w-5 h-5" />
                            Add Order
                        </button>
                    </div>
                </form>
            </div>

            {/* Orders List */}
            <div id="orderList" className="mt-8 bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
                <div className="px-6 py-5 border-b border-slate-200 bg-slate-50/50 flex justify-between items-center">
                    <h2 className="text-lg font-semibold text-slate-800">Recent Orders</h2>
                    {order.length > 0 && (
                        <span className="bg-indigo-100 text-indigo-700 text-xs font-semibold px-2.5 py-1 rounded-full">
                            {order.length} Total
                        </span>
                    )}
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-white text-slate-500 text-xs uppercase tracking-wider border-b border-slate-200">
                                <th className="px-6 py-4 font-semibold">Customer Name</th>
                                <th className="px-6 py-4 font-semibold">Product Name</th>
                                <th className="px-6 py-4 font-semibold">Quantity</th>
                                <th className="px-6 py-4 font-semibold">Date</th>
                                <th className="px-6 py-4 font-semibold text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100">
                            {
                            order.map((item,index)=>(
                                <tr key={index} className="hover:bg-slate-50/80 transition-colors duration-150 group">
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-3">
                                            <div className="h-9 w-9 rounded-full bg-indigo-50 text-indigo-600 flex items-center justify-center font-semibold text-sm border border-indigo-100">
                                                {item.CustomerName ? item.CustomerName.charAt(0).toUpperCase() : 'U'}
                                            </div>
                                            <span className="font-medium text-slate-800">{item.CustomerName}</span>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 text-slate-600 font-medium">{item.ProductName}</td>
                                    <td className="px-6 py-4">
                                        <span className="px-2.5 py-1 bg-emerald-50 text-emerald-700 text-xs font-medium rounded-md border border-emerald-100">
                                            {item.Quantity} units
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 text-slate-500 text-sm">
                                        {item.Date}
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="flex gap-2 justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                                            <button 
                                                type="button" 
                                                onClick={() => handleDelete(index)}
                                                className="p-1.5 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors duration-200" 
                                                title="Delete order"
                                            >
                                                <Trash2 className="w-4 h-4"/>
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                            {order.length === 0 && (
                                <tr>
                                    <td colSpan="5" className="px-6 py-16 text-center">
                                        <div className="flex flex-col items-center justify-center text-slate-500">
                                            <div className="w-16 h-16 mb-4 rounded-full bg-slate-50 flex items-center justify-center border border-slate-100">
                                                <ShoppingBag className="w-8 h-8 text-slate-300" />
                                            </div>
                                            <p className="text-base font-medium text-slate-700">No orders found</p>
                                            <p className="text-sm mt-1">Submit the form above to add your first order.</p>
                                        </div>
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}   