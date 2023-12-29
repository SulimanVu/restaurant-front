import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./global.scss";
import { store } from "./redux/store.ts";
import { Provider } from "react-redux";
import { StyledEngineProvider } from '@mui/material/styles';

ReactDOM.createRoot(document.getElementById("root")!).render(
  <StyledEngineProvider injectFirst>
    <Provider store={store}>
      <App />
    </Provider>
</StyledEngineProvider>
);
