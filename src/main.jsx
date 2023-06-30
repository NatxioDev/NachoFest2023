import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "../theme";

import "./index.css";
// import Header from "./components/Header.jsx";
import Countdown from "./components/Countdown.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <Countdown />
    </ChakraProvider>
  </React.StrictMode>
);
