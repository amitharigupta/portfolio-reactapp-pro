import Header from "./components/Header";
import Home from "./components/Home";
import Work from "./components/Work";
import Experience from "./components/Experience";
import Service from "./components/Service";
import Testimonial from "./components/Testimonial";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { Toaster } from "react-hot-toast";

function App() {

  return (
    <>
      <Header />
      <Home />
      <Work />
      <Experience />
      <Service />
      <Testimonial />
      <Contact />
      <Footer />
      <Toaster />
    </>
  )
}

export default App
