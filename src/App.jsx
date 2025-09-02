import { Route, Routes } from "react-router-dom"
import { Appbar } from "./components/common/Appbar"
import { Home } from "./page/Home"
import { Shop } from "./page/Shop"
import { About } from "./page/About"
import { Contact } from "./page/Contact"
import { Cart } from "./page/Cart"
import { Layout } from "./components/Layout"


function App() {
  return (
    <>
       <div>
           {/* <Appbar /> */}

           {/* <Routes>
               <Route path="/" element={<Home />} />
               <Route path="/shop" element={<Shop />} />
               <Route path="/about" element={<About />} />
               <Route path="/contact" element={<Contact />} />
               <Route path="/cart" element={<Cart />} />
           </Routes> */}

           <Routes>
               <Route path="/" element={<Layout />}>
                   <Route index element={<Home />} />
                   <Route path="shop" element={<Shop />} />
                   <Route path="about" element={<About />} />
                   <Route path="contact" element={<Contact />} />
                   <Route path="cart" element={<Cart />} />
               </Route>
           </Routes>
       </div>
    </>
  )
}

export default App
