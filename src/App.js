import { Route, Routes } from "react-router-dom";
import { About } from "./components/About/About";
import { ClientSection } from "./components/ClientSection/ClientSection";
import { Contact } from "./components/Contact/Contact";
import { Copyright } from "./components/Copyright/Copyright";
import { CycleSection } from "./components/CycleSection/CycleSection";
import { Home } from "./components/Home/Home";
import { Login } from "./components/Login/Login";
import { News } from "./components/News/News";

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cycles' element={<CycleSection />} />
        <Route path='/about' element={<About />} />
        <Route path='/client' element={<ClientSection />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/news' element={<News />} />
        <Route path='/login' element={<Login />} />
      </Routes>
      <Copyright />
    </>

  );
}

export default App;
