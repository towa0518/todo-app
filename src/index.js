import { StrictMode } from "react";
import ReactDOM from "react-dom";

// Chakra UI の ChakraProvider を利用できるようにする
import { ChakraProvider } from "@chakra-ui/react";

// 作成した Chakra UI の theme を import
import theme from "./theme/theme";

import App from "./components/App";

const rootElement = document.getElementById("root");

ReactDOM.render(
  <StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </StrictMode>,
  rootElement
);
