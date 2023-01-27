import { About } from "./components/About/About";
import { ClientSection } from "./components/ClientSection/ClientSection";
import { Contact } from "./components/Contact/Contact";
import { Copyright } from "./components/Copyright/Copyright";
import { CycleSection } from "./components/CycleSection/CycleSection";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { News } from "./components/News/News";

function App() {
  return (
    <>
      <Header />
      <CycleSection />
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
