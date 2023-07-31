import { useState } from "react";
import "./App.css";
import Content from "./components/Content";
import Header from "./components/Header";

function App() {
  const [theme, setTheme] = useState("light");
  const [truth, setTruth] = useState(false);
  const toggleSwitch = () => {
    if (theme === "light") {
      setTheme("dark");
      setTruth(!truth);
    } else {
      setTheme("light");
      setTruth(!truth);
    }
  };
  return (
    <div className={"App " + theme}>
      <Header theme={theme} toggleSwitch={toggleSwitch} truth={truth} />
      <Content theme={theme} truth={truth} />
    </div>
  );
}

export default App;
