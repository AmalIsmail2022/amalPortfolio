import Header from "./components/header/Header";
import Home from "./components/home/home";
import About from "./components/about/about"
import Skills from "./components/skills/skills";
import Services from "./components/services/services"
import Qualification from "./components/qualification/qualification";
import Contact from "./components/contact/contact";
import Footer from "./components/footer/footer";
import Scrollup from "./components/scrollup/scrollup";
import Work from "./components/work/work";
function App() {
  return (
 <>
    <Header />
    <main className="main">
        <Home />
        <About />
        <Skills />
        <Services />
        <Qualification />
        <Work />
        <Contact />
      </main>
      <Footer />
      <Scrollup />

   </>
  );
}

export default App;
