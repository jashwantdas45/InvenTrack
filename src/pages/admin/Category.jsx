import { Trash2, FolderPlus, Tag } from "lucide-react";

export default function Category({category,setCategory}){
    function handleSubmit(e){
        e.preventDefault();
        const input = e.target[0];
        if (!input.value.trim()) return;
        let data={
            CategoryName: input.value.trim(),
        }
        console.log(data);
        setCategory([...category,data]);
        input.value = "";
    }

    function handleDelete(indexToDelete) {
        setCategory(category.filter((_, index) => index !== indexToDelete));
    }

    return(
        <div className="max-w-6xl mx-auto">
            <div id="categoryHeading" className="mb-8">
                <h1 className="text-3xl font-bold text-slate-800 tracking-tight">Category Management</h1>
                <p className="text-slate-500 mt-2 text-sm">Add and manage new categories in your inventory.</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Form Column */}
                <div id="categoryForm" className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 relative overflow-hidden h-fit">
                    <div className="absolute -top-24 -right-24 w-48 h-48 bg-indigo-500/5 rounded-full blur-3xl pointer-events-none"></div>
                    
                    <div className="flex items-center gap-3 mb-6 relative z-10">
                        <div className="p-2 bg-indigo-50 text-indigo-600 rounded-xl border border-indigo-100">
                            <FolderPlus className="w-5 h-5" />
                        </div>
                        <h2 className="text-lg font-semibold text-slate-800">Create Category</h2>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-4 relative z-10">
                        <label className="flex flex-col gap-2">
                            <span className="text-sm font-semibold text-slate-700">Category Name</span>
                            <input 
                                type="text" 
                                required
                                className="px-4 py-2.5 text-slate-800 bg-slate-50/50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all duration-200 placeholder-slate-400" 
                                placeholder="e.g. Electronics, Clothing" 
                            />
                        </label>
                        <button type="submit" className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2.5 px-4 rounded-xl shadow-sm shadow-indigo-200 hover:shadow-indigo-300 transition-all duration-200 flex items-center justify-center gap-2">
                            Add Category
                        </button>
                    </form>
                </div>

                {/* List Column */}
                <div className="lg:col-span-2">
                    <div id="categoryList" className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
                        <div className="px-6 py-5 border-b border-slate-200 bg-slate-50/50 flex justify-between items-center">
                            <h2 className="text-lg font-semibold text-slate-800">All Categories</h2>
                            <span className="bg-indigo-100 text-indigo-700 text-xs font-semibold px-2.5 py-1 rounded-full">
                                {category.length} Total
                            </span>
                        </div>

                        <div className="p-6">
                            {category.length > 0 ? (
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {category.map((item,index)=>(
                                        <div key={index} className="flex items-center justify-between p-4 bg-slate-50 border border-slate-100 hover:border-slate-200 rounded-xl transition-all duration-200 group">
                                            <div className="flex items-center gap-3">
                                                <div className="p-2 bg-white text-slate-500 group-hover:text-indigo-600 rounded-lg border border-slate-200 shadow-sm transition-colors duration-200">
                                                    <Tag className="w-4 h-4" />
                                                </div>
                                                <span className="font-semibold text-slate-700 group-hover:text-slate-800 transition-colors duration-200">
                                                    {item.CategoryName}
                                                </span>
                                            </div>
                                            <button 
                                                type="button" 
                                                onClick={() => handleDelete(index)}
                                                className="p-2 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-200" 
                                                title="Delete category"
                                            >
                                                <Trash2 className="w-4 h-4" />
                                            </button>
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <div className="py-12 text-center">
                                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-slate-50 flex items-center justify-center border border-slate-100">
                                        <Tag className="w-8 h-8 text-slate-300" />
                                    </div>
                                    <p className="text-base font-medium text-slate-700">No categories found</p>
                                    <p className="text-sm text-slate-500 mt-1">Get started by adding a category from the form.</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}