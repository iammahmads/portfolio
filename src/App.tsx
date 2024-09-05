import "./App.css";
import About from "./components/about";
import Contact from "./components/contact";
import Footer from "./components/footer";
import Header from "./components/header";
import Hero from "./components/hero";
import Portfolio from "./components/portfolio";
import SocialSidebar from "./components/socialSidebar";

function App() {

  return (
    <>
      <Header />
      <Hero />
      <About />
      <Portfolio />
      <Contact />
      <Footer />
      <SocialSidebar />
    </>
  );
}

export default App;
