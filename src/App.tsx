import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { initializeWindowSizeStore } from "@state/windowSizeStore";
import "./App.css";
import Dojos from "@pages/Dojos/";
import Home from "@pages/Home/";
import Navbar from "@components/Navbar";
import Bio from "@pages/Bio";
import Aikiken from "@pages/Aikiken";
import Media from "@pages/Media";
import News from "@pages/News";
import Activities from "@pages/Activities";
import Contact from "@pages/Contact";

function App() {
  // Initialize window size store
  useEffect(() => {
    const cleanup = initializeWindowSizeStore();

    return () => {
      cleanup();
    };
  }, []);

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="dojos" element={<Dojos />} />
          <Route path="bio" element={<Bio />} />
          <Route path="aikiken" element={<Aikiken />} />
          <Route path="media" element={<Media />} />
          <Route path="news" element={<News />} />
          <Route path="activities" element={<Activities />} />
          <Route path="contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
