import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import { Movie } from "./pages/Movie";
import { Contact } from "./pages/Contact";
import AppLayout from "./component/layout/AppLayout";
import About from "./pages/About";
import GetAPIData from "./api/GetAPIData";
import MovieDetails from "./component/ui/MovieDetails";
import GetMovieDetails from "./api/GetMovieDetails";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/movie",
          element: <Movie />,
          loader: GetAPIData,
        },
        {
          path: "/movie/:movieID",
          element: <MovieDetails />,
          loader: GetMovieDetails,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
        {
          path: "/about",
          element: <About />,
        },
      ],
    },
  ]);

  // const router = createBrowserRouter(
  //   createRoutesFromElements(
  //     <Route>
  //       <Route path="/" element={<Home />} />
  //       <Route path="/about" element={<About />} />
  //       <Route path="/movie" element={<Movie />} />
  //       <Route path="/contact" element={<Contact />} />
  //     </Route>,
  //   ),
  // );

  return <RouterProvider router={router} />;
};

export default App;
