import { useEffect, useState } from "react"
import { ProductData } from "../data/Product";
import { ProductCard } from "../components/core/home/ProductCard";


export function Shop() {
    const [searchQuery, setSearchQuery] = useState('');
    const [searchData, setSearchData] = useState(ProductData)
    const [activeTab, setActiveTab] = useState('All');

    useEffect( () => {
        const q = searchQuery.trim().toLowerCase();

        const results = ProductData.filter((item) => {
            if (!item) return false;

            const matchesTab =
                activeTab === "All" ? true : (item.type ?? "").toLowerCase() === activeTab.toLowerCase();
            
            // console.log(item.type);
            
            const matchesSearch =
                q === "" ? true : (item.name ?? "").toLowerCase().includes(q);

            return matchesTab && matchesSearch;
        });

        setSearchData(results);

    }, [searchQuery, ProductData]);

    function handleTabChange(tab) {
        setActiveTab(tab);
    }

    return (
        <div className="mt-30">
            <div className="flex flex-col gap-20 mb-20">
                {/* Shop Header */}
                <div className="flex flex-col w-10/12 mx-auto gap-10">
                    {/* Search Section */}
                    <div className="">
                        <input 
                            type="text"
                            placeholder="Search..."
                            value={searchQuery}
                            className="w-full text-sm bg-section outline-none px-2 py-4 border-1 border-black/20 focus:border-primary rounded-xl"
                            onChange={(e) => setSearchQuery(e.target.value)}/>
                    </div>

                    {/* here Add Tab section */}
                    <div>
                        <div className="flex gap-10">
                            <div onClick={() => handleTabChange('All')} className={`${activeTab === 'All' ? 'bg-black text-white' : 'bg-white text-black'} rounded-full px-10 py-2 cursor-pointer`}>
                                All
                            </div>
                            <div onClick={() => handleTabChange('Men')} className={`${activeTab === 'Men' ? 'bg-black text-white' : 'bg-white text-black'} rounded-full px-10 py-2 cursor-pointer`}>
                                Men
                            </div>
                            <div onClick={() => handleTabChange('Women')} className={`${activeTab === 'Women' ? 'bg-black text-white' : 'bg-white text-black'} rounded-full px-10 py-2 cursor-pointer`}>
                                Women
                            </div>
                        </div>  
                    </div>
                </div>

                {/* Here Main Content */}
                <div className="grid grid-cols-4 gap-20 w-10/12 mx-auto"> 
                    {
                        searchData.map((data, index) => {
                            return (
                                <ProductCard key={index} product={data} />
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}