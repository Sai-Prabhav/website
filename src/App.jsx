import React from "react";
import Header from "./components/Header";
import About from "./components/About";
import ProjectShowcase from "./components/ProjectShowcase";
import theme from "./theme";
import "./App.css";

function App() {
  return (
    <div
      style={{
        background: theme.colors.background,
        color: theme.colors.text,
        fontFamily: theme.fonts.main,
      }}
    >
      <Header />
      <About />
      <ProjectShowcase />
    </div>
  );
}

export default App;
