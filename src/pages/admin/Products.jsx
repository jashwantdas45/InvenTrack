import { Delete } from "lucide-react";
export default function Products({product,setProduct}){

     function hendleSubmit(e){
        e.preventDefault();
        let data={
            name: e.target[0].value,
            image: e.target[1].value,
            price: e.target[2].value,
            category: e.target[3].value,
        }
        console.log(data);
        setProduct([...product,data]);
     }
    return(
        <div className="max-w-5xl mx-auto">
            <div id="productHeader" className="mb-8">
                <h1 className="text-3xl font-bold text-gray-800 tracking-tight">Product Management</h1>
                <p className="text-gray-500 mt-2">Add new products to your inventory.</p>
           </div>
           
           <div id="productForm" className="bg-white/90 backdrop-blur-xl rounded-2xl shadow-xl shadow-slate-200/40 border border-white p-6 md:p-8 relative overflow-hidden">
            {/* Subtle decorative gradient blob */}
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>
            
            <form className="space-y-6 relative z-10" onSubmit={hendleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <label className="flex flex-col gap-2.5">
                        <span className="text-sm font-semibold text-slate-700">Product Name</span>
                        <input type="text" className="px-4 py-3 text-slate-800 bg-slate-50/50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 transition-all duration-300 placeholder-slate-400" placeholder="e.g. Mechanical Keyboard" />
                    </label>
                    <label className="flex flex-col gap-2.5">
                        <span className="text-sm font-semibold text-slate-700">Image URL</span>
                        <input type="text" className="px-4 py-3 text-slate-800 bg-slate-50/50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 transition-all duration-300 placeholder-slate-400" placeholder="https://..." />
                    </label>
                    <label className="flex flex-col gap-2.5">
                        <span className="text-sm font-semibold text-slate-700">Price (USD)</span>
                        <input type="number" className="px-4 py-3 text-slate-800 bg-slate-50/50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 transition-all duration-300 placeholder-slate-400" placeholder="0.00" />
                    </label>
                    <label className="flex flex-col gap-2.5 relative">
                        <span className="text-sm font-semibold text-slate-700">Category</span>
                        <select className="px-4 py-3 text-slate-800 bg-slate-50/50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 transition-all duration-300 cursor-pointer appearance-none">
                            <option>Category1</option>
                            <option>Category2</option>
                            <option>Category3</option>
                        </select>
                        <div className="absolute inset-y-0 right-0 top-7 flex items-center pr-4 pointer-events-none text-slate-500">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                        </div>
                    </label>
                </div>
                
                <div className="mt-8 flex justify-end">
                    <button type="submit" className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold py-3 px-8 rounded-xl shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 transition-all duration-300 transform hover:-translate-y-1">
                        Add Product
                    </button>
                </div>
            </form>
           </div>
           <div id="productList" className="mt-12 bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-100 bg-gray-50/50">
                <h2 className="text-lg font-semibold text-gray-800">Added Products</h2>
            </div>
            <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="bg-gray-50 text-gray-500 text-sm uppercase tracking-wider">
                            <th className="px-6 py-4 font-medium border-b border-gray-100">Image</th>
                            <th className="px-6 py-4 font-medium border-b border-gray-100">Name</th>
                            <th className="px-6 py-4 font-medium border-b border-gray-100">Price</th>
                            <th className="px-6 py-4 font-medium border-b border-gray-100">Category</th>
                            <th className="px-6 py-4 font-medium border-b border-gray-100">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                        {
                        product.map((item,index)=>(
                            <tr key={index} className="hover:bg-gray-50/50 transition-colors duration-150">
                                <td className="px-6 py-4">
                                    <div className="w-12 h-12 rounded-lg border border-gray-200 overflow-hidden bg-white flex items-center justify-center">
                                        {item.image ? <img src={item.image} alt={item.name} className="w-full h-full object-cover" /> : <span className="text-xs text-gray-400">No Img</span>}
                                    </div>
                                </td>
                                <td className="px-6 py-4 font-medium text-gray-800">{item.name}</td>
                                <td className="px-6 py-4 text-gray-600">${item.price}</td>
                                <td className="px-6 py-4">
                                    <span className="px-3 py-1 bg-blue-50 text-blue-600 text-xs font-semibold rounded-full border border-blue-100">{item.category}</span>
                                </td>
                                <td className="px-6 py-4">
                                    <div className="flex gap-2">
                                        <button className="flex items-center justify-center px-4 py-2 text-sm font-medium text-blue-600 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors duration-200" title="Edit Product">
                                            Edit
                                        </button>
                                        <button className="flex items-center justify-center p-2 text-sm font-medium text-red-600 bg-red-50 hover:bg-red-100 rounded-lg transition-colors duration-200" title="Delete Product">
                                            <Delete className="w-5 h-5"/>
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                        {product.length === 0 && (
                            <tr>
                                <td colSpan="5" className="px-6 py-12 text-center text-gray-500">
                                    No products added yet. Submit the form above to add your first product.
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