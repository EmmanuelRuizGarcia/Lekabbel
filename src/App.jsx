import { useEffect } from "react";
import Aos from "aos";

import "./App.css";

import Header from "./componets/Header/Header";
import Footer from "./componets/Footer/Footer";

function App() {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <>
      <Header />
      <main></main>
      <Footer />
    </>
  );
}

export default App;
