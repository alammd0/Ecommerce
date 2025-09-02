import { NavLink, useLocation } from "react-router-dom"
import { NavbarData } from "../../data/Navbar"

export function Appbar() {

    const location = useLocation()
    const currentPath = location.pathname
    console.log(currentPath)
    

    return (
        <div className="fixed top-0 left-0 w-full bg-nav px-3 py-5 shadow-md z-50 border-b-1 border-gray-400">
            <div className="w-10/12 mx-auto flex items-center justify-between font-primary">
                <div className="flex items-center text-xl text-primary font-bold">
                    <NavLink to="/">Alam Ecommerce</NavLink>
                </div>
                <div className="flex items-center gap-14 text-secondary font-normal">
                    {
                        NavbarData.map( (item, index) => (
                            <NavLink className={currentPath === item.path ? "text-primary font-bold text-shadow-2xs text-shadow-fuchsia-300" : "text-secondary font-normal"} to={item.path} key={index}>{item.name}</NavLink>
                        ))
                    }
                </div>
                <div className="flex items-center gap-14 text-secondary font-normal">
                    <NavLink to="/cart">Cart</NavLink>
                </div>
            </div>
        </div>
    )
}