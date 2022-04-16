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
        style={{
          textAlign: "center",
          fontSize: "10px",
          padding: "10px",
          color: "rgba(255,255,255,0.4)",
        }}
      >
        Created with <Heart size={10} strokeWidth={0} fill="#e74c3c" /> By <a href="https://twitter.com/zubairself" noopener noreferrer>Zubair</a>
        <div style={{ display: 'flex', alignItems: "center", justifyContent: "center" }}>
          <a class="github-button" href="https://github.com/syedzubairahmed001/eid-wish" noopener noreferrer data-color-scheme="no-preference: light; light: dark_high_contrast; dark: dark;" data-size="large" data-show-count="true" aria-label="Star syedzubairahmed001/eid-wish on GitHub">Star</a>
        </div>
      </footer>
    </ThemeProvider>
  );
}

export default App;
