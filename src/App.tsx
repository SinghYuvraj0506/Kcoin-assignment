import "./App.css";
import Navbar from "./Components/Navbar";
import Currency from "./Pages/Currency";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="w-screen font-inter bg-[#EFF2F5] h-max">
        <Navbar />
        <Routes>
          <Route path="*" element={ <Navigate to={"/bitcoin"}/>}/>
          <Route path="/:slug" element={ <Currency />}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
