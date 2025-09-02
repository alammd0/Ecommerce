import { useEffect, useState } from "react";
import Hero from "../assets/hero.avif";
import { NavLink } from "react-router-dom";
import { ProductData } from "../data/Product";
import { ProductCard } from "../components/core/home/ProductCard";

export function Home() {

  const [offsetY, setOffsetY] = useState(0);
  //   console.log(offsetY);

  useEffect(() => {
    const handleScroll = () => setOffsetY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="w-full min-h-screen">
      <section className="relative h-screen w-full flex items-center justify-center perspective-[1000px] overflow-hidden">
        <img
            src={Hero}
            alt="hero"
            className="absolute inset-0 w-full h-full object-cover"
            style={{
                transform: `translateZ(-35px) scale(5) translateY(${offsetY * 0.3}px)`,
            }}
        />
        <div className="absolute inset-0 bg-black/40"></div>
        <h1 className="relative z-10 text-5xl md:text-6xl font-bold text-white text-center drop-shadow-lg text-shadow-purple-300">
          Welcome to Alam Ecommerce
        </h1>
      </section>

      {/* Content */}
      <section className="bg-nav text-secondary min-h-screen">

        <div className="py-30 w-11/12 max-w-6xl mx-auto text-center space-y-5">
            <h2 className="text-4xl md:text-5xl font-bold font-primary">
                Fresh, Seasonal, Beautiful Product
            </h2>
            <p className="font-secondary text-[2rem] font-medium">Order Now and Get 20% off</p>
            <button className="bg-[#79253D] text-white hover:bg-[#79253D]/70 hover:scale-x-95 transition-all duration-100 font-bold py-3 px-6 rounded-full shadow-md cursor-pointer"> 
                <NavLink to="/shop" className="font-bold">
                    Shop Now
                </NavLink>
            </button>
        </div>

        {/* add Carousel section here */}
        <div className=" grid grid-cols-4 gap-20 w-10/12 mx-auto pb-28">
           {
              ProductData.map( (item) => {
                 return (
                     <ProductCard key={item.id} product={item} />
                 )
              })
           }
        </div>

      </section>
    </div>
  );
}
