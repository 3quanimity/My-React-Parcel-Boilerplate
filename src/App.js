import React from "react";
import { render } from "react-dom";
// import { Router, Link } from "@reach/router";

const App = () => {
  return (
    <React.StrictMode>
      <div>App working</div>
    </React.StrictMode>
  );
};

render(<App />, document.getElementById("root"));
