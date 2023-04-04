import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { About } from "./components/About/About";
import { Cart } from "./components/Cart/Cart";
import { ClientSection } from "./components/ClientSection/ClientSection";
import { Contact } from "./components/Contact/Contact";
import { Copyright } from "./components/Copyright/Copyright";
import { CycleSection } from "./components/CycleSection/CycleSection";
import { Home } from "./components/Home/Home";
import { Login } from "./components/Login/Login";
import { News } from "./components/News/News";
import { Register } from "./components/Register/Register";
import { AuthContext } from "./contexts/authContext/authContext";
import { Logout } from "./Logout/Logout";

function App() {
  const [loginData, setLoginData] = useState({});
  const userLogin = (userData) => {
    setLoginData(userData);
  };
  const userLogout = () => {
    setLoginData({});
  };
  return (
    <>
      <AuthContext.Provider value={{ loginData, userLogin, userLogout }}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cycles' element={<CycleSection />} />
          <Route path='/about' element={<About />} />
          <Route path='/client' element={<ClientSection />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/news' element={<News />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/logout' element={<Logout />} />
        </Routes>
        <Copyright />
      </AuthContext.Provider>
    </>

  );
}
export default App;
