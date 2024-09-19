import { useState } from "react";
import Sidebar from "./components/sidebar/sidebar";
import Header from "./components/Header/Header";
import About from "./components/Header/About";
import "./App.css";
function App() {
  const [activeLink, setActiveLink] = useState('hero');

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };
  return (
    <div className="w-full min-h-screen bg-dark relative flex flex-col justify-between">
      <div className="w-full flex-grow">
        <div className="w-full min-h-screen lg:h-screen bg-gradient-to-br from-gray-100 via-gray-200 to-white text-gray-800 flex flex-col lg:flex-row items-start justify-between p-4 lg:p-0 rounded-2xl shadow-lg overflow-hidden">
          <div className="w-full lg:w-16 h-full bg-transparent flex lg:flex-col gap-4 lg:gap-0">
          <Sidebar activeLink={activeLink} onLinkClick={handleLinkClick}/>
          </div>
          <Header />
          <About activeLink={activeLink}/>
      
        </div>
      </div>
    </div>
  );
}

export default App;
