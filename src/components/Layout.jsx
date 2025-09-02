import { Outlet } from "react-router-dom";
import { Appbar } from "./common/Appbar";


export function Layout(){
    return (
        <div>
            <Appbar />
            <Outlet />
            {/* add Footer section here */}
        </div>
    )
}