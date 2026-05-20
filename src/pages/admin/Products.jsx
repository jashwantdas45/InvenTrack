import { useState } from "react";
import { Trash2, Package, Plus, Pencil, X } from "lucide-react";

export default function Products({product,setProduct,category}){
     const [editingIndex, setEditingIndex] = useState(null);
     const [name, setName] = useState("");
     const [image, setImage] = useState("");
     const [price, setPrice] = useState("");
     const [selectedCategory, setSelectedCategory] = useState("");

     function handleSubmit(e){
        e.preventDefault();
        let data={
            name: name.trim(),
            image: image.trim(),
            price: parseFloat(price),
            category: selectedCategory,
        }
        
        if (editingIndex !== null) {
            // Update existing product
            const updated = [...product];
            updated[editingIndex] = data;
            setProduct(updated);
            setEditingIndex(null);
        } else {
            // Add new product
            setProduct([...product, data]);
        }
        
        // Reset states
        setName("");
        setImage("");
        setPrice("");
        setSelectedCategory("");
     }

     function handleEditClick(index) {
        const prod = product[index];
        setEditingIndex(index);
        setName(prod.name);
        setImage(prod.image || "");
        setPrice(prod.price);
        setSelectedCategory(prod.category || "");
     }

     function handleCancelEdit() {
        setEditingIndex(null);
        setName("");
        setImage("");
        setPrice("");
        setSelectedCategory("");
     }

     function handleDelete(indexToDelete) {
        setProduct(product.filter((_, index) => index !== indexToDelete));
        // If we are currently editing the product being deleted, reset editing state
        if (editingIndex === indexToDelete) {
            handleCancelEdit();
        }
     }

     return(
         <div className="max-w-6xl mx-auto">
             <div id="productHeader" className="mb-8">
                 <h1 className="text-3xl font-bold text-slate-800 tracking-tight">Product Management</h1>
                 <p className="text-slate-500 mt-2 text-sm">Add and manage new products in your inventory.</p>
            </div>
            
            <div id="productForm" className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 md:p-8 relative overflow-hidden">
                {/* Decorative background blob */}
                <div className="absolute -top-24 -right-24 w-64 h-64 bg-indigo-500/5 rounded-full blur-3xl pointer-events-none"></div>
                
                <div className="flex items-center gap-3 mb-6 relative z-10">
                    <div className="p-2 bg-indigo-50 text-indigo-600 rounded-xl border border-indigo-100">
                        <Package className="w-5 h-5" />
                    </div>
                    <h2 className="text-lg font-semibold text-slate-800">
                        {editingIndex !== null ? "Edit Product" : "Add New Product"}
                    </h2>
                </div>

                <form className="space-y-6 relative z-10" onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <label className="flex flex-col gap-2">
                            <span className="text-sm font-semibold text-slate-700">Product Name</span>
                            <input 
                                type="text" 
                                required
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="px-4 py-2.5 text-slate-800 bg-slate-50/50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all duration-200 placeholder-slate-400" 
                                placeholder="e.g. Mechanical Keyboard" 
                            />
                        </label>
                        <label className="flex flex-col gap-2">
                            <span className="text-sm font-semibold text-slate-700">Image URL</span>
                            <input 
                                type="url" 
                                value={image}
                                onChange={(e) => setImage(e.target.value)}
                                className="px-4 py-2.5 text-slate-800 bg-slate-50/50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all duration-200 placeholder-slate-400" 
                                placeholder="https://images.unsplash.com/..." 
                            />
                        </label>
                        <label className="flex flex-col gap-2">
                            <span className="text-sm font-semibold text-slate-700">Price (USD)</span>
                            <input 
                                type="number" 
                                required
                                min="0.01"
                                step="0.01"
                                value={price}
                                onChange={(e) => setPrice(e.target.value)}
                                className="px-4 py-2.5 text-slate-800 bg-slate-50/50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all duration-200 placeholder-slate-400" 
                                placeholder="0.00" 
                            />
                        </label>
                        <label className="flex flex-col gap-2 relative">
                            <span className="text-sm font-semibold text-slate-700">Category</span>
                            <div className="relative">
                                <select 
                                    required 
                                    value={selectedCategory}
                                    onChange={(e) => setSelectedCategory(e.target.value)}
                                    className="w-full px-4 py-2.5 text-slate-800 bg-slate-50/50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all duration-200 cursor-pointer appearance-none"
                                >
                                    <option value="" disabled className="text-slate-400">Select Category</option>
                                    {category.map((item,index)=>(
                                        <option key={index} value={item.CategoryName}>{item.CategoryName}</option>
                                    ))}
                                </select>
                                <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none text-slate-500">
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                                </div>
                            </div>
                        </label>
                    </div>
                    
                    <div className="mt-6 flex justify-end gap-3">
                        {editingIndex !== null && (
                            <button 
                                type="button" 
                                onClick={handleCancelEdit}
                                className="bg-slate-100 hover:bg-slate-200 text-slate-600 font-medium py-2.5 px-6 rounded-xl transition-all duration-200 flex items-center gap-2"
                            >
                                <X className="w-4 h-4" />
                                Cancel
                            </button>
                        )}
                        <button type="submit" className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2.5 px-6 rounded-xl shadow-sm shadow-indigo-200 hover:shadow-indigo-300 transition-all duration-200 flex items-center gap-2">
                            {editingIndex !== null ? (
                                <>
                                    <Pencil className="w-4 h-4" />
                                    Update Product
                                </>
                            ) : (
                                <>
                                    <Plus className="w-5 h-5" />
                                    Add Product
                                </>
                            )}
                        </button>
                    </div>
                </form>
            </div>

            <div id="productList" className="mt-8 bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
                <div className="px-6 py-5 border-b border-slate-200 bg-slate-50/50 flex justify-between items-center">
                    <h2 className="text-lg font-semibold text-slate-800">Added Products</h2>
                    {product.length > 0 && (
                        <span className="bg-indigo-100 text-indigo-700 text-xs font-semibold px-2.5 py-1 rounded-full">
                            {product.length} Total
                        </span>
                    )}
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-white text-slate-500 text-xs uppercase tracking-wider border-b border-slate-200">
                                <th className="px-6 py-4 font-semibold w-24">Image</th>
                                <th className="px-6 py-4 font-semibold">Name</th>
                                <th className="px-6 py-4 font-semibold">Price</th>
                                <th className="px-6 py-4 font-semibold">Category</th>
                                <th className="px-6 py-4 font-semibold text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100">
                            {
                            product.map((item,index)=>(
                                <tr key={index} className={`transition-colors duration-150 group ${editingIndex === index ? "bg-indigo-50/30" : "hover:bg-slate-50/80"}`}>
                                    <td className="px-6 py-4">
                                        <div className="w-12 h-12 rounded-lg border border-slate-200 overflow-hidden bg-white flex items-center justify-center shadow-sm">
                                            {item.image ? (
                                                <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                                            ) : (
                                                <Package className="w-6 h-6 text-slate-300" />
                                            )}
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 font-medium text-slate-800">{item.name}</td>
                                    <td className="px-6 py-4 text-slate-600 font-semibold">${parseFloat(item.price).toFixed(2)}</td>
                                    <td className="px-6 py-4">
                                        <span className="px-2.5 py-1 bg-indigo-50 text-indigo-700 text-xs font-medium rounded-md border border-indigo-100">
                                            {item.category || "Uncategorized"}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="flex gap-2 justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                                            <button 
                                                type="button" 
                                                onClick={() => handleEditClick(index)}
                                                className="p-1.5 text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors duration-200" 
                                                title="Edit Product"
                                            >
                                                <Pencil className="w-4 h-4"/>
                                            </button>
                                            <button 
                                                type="button" 
                                                onClick={() => handleDelete(index)}
                                                className="p-1.5 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors duration-200" 
                                                title="Delete Product"
                                            >
                                                <Trash2 className="w-4 h-4"/>
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                            {product.length === 0 && (
                                <tr>
                                    <td colSpan="5" className="px-6 py-16 text-center">
                                        <div className="flex flex-col items-center justify-center text-slate-500">
                                            <div className="w-16 h-16 mb-4 rounded-full bg-slate-50 flex items-center justify-center border border-slate-100">
                                                <Package className="w-8 h-8 text-slate-300" />
                                            </div>
                                            <p className="text-base font-medium text-slate-700">No products found</p>
                                            <p className="text-sm mt-1">Submit the form above to add your first product.</p>
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