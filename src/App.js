import { Route, Routes } from "react-router-dom";
import NavBar from "./component/NavBar";
import Home from "./pages/Home";
import { Cart } from "./pages/Cart";

function App() {
  return (
    <div>
     <div className="bg-slate-900 ">
      <NavBar/>
     </div>
      <Routes>
        <Route path = "/" element = {<Home />} />
        
        <Route path = "/cart" element = {<Cart />} />
        
        
      </Routes>
    </div>
  );
}

export default App;
