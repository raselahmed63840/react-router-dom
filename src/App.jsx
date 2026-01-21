import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { Home } from "./pages/Home";
import { Movie } from "./pages/Movie";
import { Contact } from "./pages/Contact";
import { About } from "./pages/About";
const App = () => {
  // const router = createBrowserRouter([
  //   {
  //     path: "/",
  //     element: <Home />,
  //   },
  //   {
  //     path: "/movie",
  //     element: <Movie />,
  //   },
  //   {
  //     path: "/contact",
  //     element: <Contact />,
  //   },
  // ]);

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/movie" element={<Movie />} />
        <Route path="/contact" element={<Contact />} />
      </Route>,
    ),
  );

  return <RouterProvider router={router} />;
};

export default App;
