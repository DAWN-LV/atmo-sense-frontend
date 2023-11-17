// Need to do with auth and home 
import AboutUs from "@/pages/AboutUs";
import GetStarted from "@/pages/GetStarted";
import Home from "@/pages/home/Home";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home/>} />
        <Route path="/getStarted" element={<GetStarted/>} />
        <Route path="/AboutUs" element={<AboutUs/>} />
        <Route path="/" element={<Navigate to="/home" />} /> 
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;

