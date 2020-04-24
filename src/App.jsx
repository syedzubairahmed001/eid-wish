import React, { useState } from "react";
import { Box, makeStyles, Grid, Typography } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./theme/theme-light";
import Wish from "./containers/Wish/Wish";
import { Heart } from "react-feather";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [url, setUrl] = useState("");

  const handleUrlChange = (e) => {
    const value = e.target.value;
    setUrl(value);
  };
  return (
    <ThemeProvider theme={theme}>
      <Wish />
      <footer
        style={{ textAlign: "center", fontSize: "10px", padding: "10px" }}
      >
        created with <Heart size={10} strokeWidth={0} fill="#e74c3c" /> by{" "}
        <a href="https://github.com/syedzubairahmed001">Syed Zubair Ahmed</a>
      </footer>
    </ThemeProvider>
  );
}

export default App;
