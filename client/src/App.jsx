import "./App.css";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  const location = useLocation();
  const isAdminPage = location.pathname === "/admin";
  return (
    <>
      <Navbar />
      <Outlet />
      {!isAdminPage && <Footer />}
    </>
  );
}

export default App;
