import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./global.scss";
import { store } from "./redux/store.ts";
import { Provider } from "react-redux";
import { StyledEngineProvider } from '@mui/material/styles';

ReactDOM.createRoot(document.getElementById("root")!).render(
  <StyledEngineProvider injectFirst>
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
</StyledEngineProvider>

);
