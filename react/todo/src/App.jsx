import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import Footer from "./components/footer";
import Header from "./components/header";
import Item from "./components/item";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="full-screen">
        <Header />
        <Item />
        <Footer />
      </div>
    </>
  );
}

export default App;
