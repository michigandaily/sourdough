import React from "react";
import { render } from "react-dom";

window.onload = () => {
  const node = document.getElementById("app");
  render(<App />, node);
};

export default function App() {
  return <>Hello, world!</>;
}
