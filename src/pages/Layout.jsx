import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Layout() {
  return (
    <>
      <main
        style={{
    
          
          display:"flex"
        ,
        flexDirection:"column"
      
        }}
      >
        <Header />
        <Outlet />
        <Footer />
      </main>
    </>
  );
}
