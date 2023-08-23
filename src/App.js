import React, { useEffect } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Flipkart from "./Flipkart/Flipkart";
import Search from "./Flipkart/Search";
import Navbar from "./components/Navbar";
import Pagination from "./components/Pagination";

function App() {
  useEffect(() => {
    return () => {};
  }, []);
  return (
    <div className="App">
      <div className="app-layout">
        <Navbar />
        <Search />
        <Flipkart />
        {/* <Pagination /> */}
      </div>
    </div>
  );
}

export default App;
