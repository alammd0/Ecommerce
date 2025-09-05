
export function ProductCard({ product }) {
    // console.log(product)
    return (
        <div className="h-[500px] w-[300px] bg-white rounded-lg shadow-md hover:scale-95 transition-all duration-100 cursor-pointer">
            <div>
                <img src={product.img} alt="product" className="w-full h-full object-cover" />  
            </div>

            <div className="p-5 bg-white rounded-lg shadow-md space-y-3 text-">
                <div className="flex gap-2 flex-col">
                    <p className="text-secondary font-secondary">{product.type}</p>
                    <h2 className="text-xl font-semibold">T-Shirt Name{" "}{product.id}</h2>
                    <p className="text-sm">{product.price}</p>
                </div>

                <div className="flex items-center gap-4">
                    <div className="relative group">
                        <div className="bg-black rounded h-5 w-5 flex items-center justify-center border-1 border-black/20"></div>
                        <div  className="absolute -top-8 left-1/2 -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition">Black</div>
                    </div>

                    <div className="relative group">
                        <div className="bg-orange-200 rounded h-5 w-5 flex items-center justify-center border-1 border-black/20"></div>
                        <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition">Orange</div>
                    </div>

                    <div className="relative group">
                        <div className="bg-white rounded h-5 w-5 flex items-center justify-center  border-1 border-black/20"></div>
                        <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition">White</div>
                    </div>

                    {/* <div className="bg-orange-200 rounded h-5 w-5 flex items-center justify-center border-1 border-black/20"></div>
                    <div className="bg-white rounded h-5 w-5 flex items-center justify-center  border-1 border-black/20"></div> */}

                </div>

                <div className="flex items-center gap-2 text-sm">
                    <div className="bg-white rounded h-5 w-5 flex items-center justify-center  border-1 border-black/20 px-3 py-3 hover:scale-110 transition-all duration-100 hover:border-1 hover:border-black/20 hover:shadow-md hover:shadow-fuchsia-300">XS</div>
                    <div className="bg-white rounded h-5 w-5 flex items-center justify-center  border-1 border-black/20 px-3 py-3 hover:scale-110 transition-all duration-100 hover:border-1 hover:border-black/20 hover:shadow-md hover:shadow-fuchsia-300">S</div>
                    <div className="bg-white rounded h-5 w-5 flex items-center justify-center  border-1 border-black/20 px-3 py-3 hover:scale-110 transition-all duration-100 hover:border-1 hover:border-black/20 hover:shadow-md hover:shadow-fuchsia-300">M</div>
                    <div className="bg-white rounded h-5 w-5 flex items-center justify-center  border-1 border-black/20 px-3 py-3 hover:scale-110 transition-all duration-100 hover:border-1 hover:border-black/20 hover:shadow-md hover:shadow-fuchsia-300" >L</div>
                    <div className="bg-white rounded h-5 w-5 flex items-center justify-center  border-1 border-black/20 px-3 py-3 hover:scale-110 transition-all duration-100 hover:border-1 hover:border-black/20 hover:shadow-md hover:shadow-fuchsia-300">XL</div>
                </div>
            </div>
        </div>
    )
}