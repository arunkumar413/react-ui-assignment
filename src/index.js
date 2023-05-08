import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { store } from './stateManagement/store'
import { Provider } from 'react-redux'

import App from "./App";
import { RouterProvider } from "react-router-dom";
import { AppRouter } from "./AppRouter";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(

  
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={AppRouter} >
        <App />
      </RouterProvider>
    </Provider>
  </StrictMode>
);
