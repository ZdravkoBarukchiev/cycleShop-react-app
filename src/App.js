import { Route, Routes } from "react-router-dom";
import { About } from "./components/About/About";
import { ClientSection } from "./components/ClientSection/ClientSection";
import { Contact } from "./components/Contact/Contact";
import { Copyright } from "./components/Copyright/Copyright";
import { CycleSection } from "./components/CycleSection/CycleSection";
import { Footer } from "./components/Footer/Footer";
import { Home } from "./components/Home/Home";
import { News } from "./components/News/News";

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cycles' element={<CycleSection />} />
        <Route path='/about' element={<About />} />
      </Routes>
      <About />
      <ClientSection />
      <News />
      <Contact />
      <Footer />
      <Copyright />
    </>

  );
}

export default App;
