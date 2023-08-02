import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import { useEffect } from "react";

export default function Layout() {
 useEffect(()=>{
  AOS.init()
 },[])
 return (<>
      
        <Header />
        <Outlet />
        <Footer />

    </>
  );
}
