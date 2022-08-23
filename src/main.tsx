import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { persistor, store } from "./app/store";
import { ThemeProvider } from "./contexts/theme";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider initialTheme={"dark"}>
          <App />
        </ThemeProvider>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
