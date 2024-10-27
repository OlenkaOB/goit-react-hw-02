// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";
import Feedback from "../Feedback/Feedback";
import Option from "../Options/Options";

const App = () => {
  return (
    <>
      <div>
        <h1>Sip Happens Café</h1>
        <p>
          Please leave your feedback about our service by selecting one of the
          options below.
        </p>
        <Feedback />
        <Option options={options} />
      </div>
    </>
  );
};

export default App;
