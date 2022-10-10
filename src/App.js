import "./App.css";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import { StrictMode } from "react";

function App() {
  return (
    <>  
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
    
    </>
  );
}

export default App;
