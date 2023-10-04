import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Home from "./components/Home/Home";
import PageNotFoud from "./components/PageNotFound/PageNotFound";
import MovieDetail from "./components/MovieDetail/MovieDetail";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./features/store";
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <PageNotFoud />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/movie/:imdbID",
        element: <MovieDetail />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={appRouter} />
    </Provider>
  </React.StrictMode>
);
