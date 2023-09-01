import { useEffect } from "react";
import Aos from "aos";

import "./App.css";

import Header from "./componets/Header/Header";

function App() {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <>
      <Header />
    </>
  );
}

export default App;
