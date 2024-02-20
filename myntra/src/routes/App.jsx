/** @format */
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import "../index.css";
import FetchInitialData from "../components/FetchInitialData";
function App() {
  return (
    <>
      <FetchInitialData />
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
