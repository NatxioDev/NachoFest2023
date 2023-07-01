import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "../theme";

import "./index.css";
import Header from "./components/Header.jsx";
import Countdown from "./components/Countdown.jsx";
import Maps from "./components/Maps.jsx";
import Footer from "./components/Footer.jsx";
import Asistance from "./components/Asistance";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <Header />
      <Countdown />
      <br />
      <Maps />
      <br />
      <br />
      <Asistance />
      <Footer />
    </ChakraProvider>
  </React.StrictMode>
);
