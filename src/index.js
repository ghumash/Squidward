import { lazy } from "react";
import ReactDOM from "react-dom/client";
import { Routes, Route, HashRouter } from "react-router-dom";
import { store } from "./redux/store";
import { Provider } from "react-redux";

import MainLayout from "./layouts/MainLayout";
import Main from "./pages/Main";

const NotFound = lazy(() =>
  import(/* webpack: "ErrorPage" */ "./pages/NotFound")
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <HashRouter>
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="/main" element={<Main />} />
          <Route path="/not-found" element={<NotFound />} />
        </Route>
      </Routes>
    </Provider>
  </HashRouter>
);
