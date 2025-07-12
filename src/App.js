import { useState } from "react";
import "./App.css";
import About from "./Components/About";
import Navbar from "./Components/Navbar";
import Alerts from "./Components/Alerts";
import TextForm from "./Components/TextForm";
// import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  };
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "black";
      document.body.style.color = "white";
      showAlert(`${mode ==='light'? 'dark':'light'} mode has been enable`, "success");
      document.title = `Text Utilss - ${mode ==='light'? 'dark':'light'} Mode`;
    } else {
      setMode("light");
      document.body.style.backgroundColor = "";
      document.body.style.color = "";
      showAlert(`${mode ==='dark'? 'light':'dark'} mode has been enable`, "success");
      document.title = `Text Utilss - ${mode ==='light'? 'dark':'light'} Mode`;
    }
  };
  return (
    // <BrowserRouter>
    //   <Navbar
    //     logoText="Level-X"
    //     AboutText="About Us"
    //     mode={mode}
    //     toggleMode={toggleMode}
    //   />
    //   <Alerts alerts={alert} />
    //   <Routes>
    //     <Route exact path="/about" element={<About />} />
    //     <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Text Area" />} />
    //   </Routes>
    // </BrowserRouter>
    <>
      <Navbar
        logoText="Level-X"
        AboutText="About Us"
        mode={mode}
        toggleMode={toggleMode}
      />
      <Alerts alerts={alert} />
      <TextForm showAlert={showAlert} heading="Text Area" />
      <About />

    </>
  );
}

export default App;
