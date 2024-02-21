import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Signup from "../Pages/Signup";
import Forgot from "../Pages/Forgot";
import Dashboard from "../AdminPages/Dashboard";
import { Navigate } from "react-router-dom";
import MovieDetails from "../Pages/MovieDetails";

import MovieCard from "../Pages/MovieCard";

const AppRoutes = [
  // User Routes
  {
    path: "/",
    element: <Home />,
    name: "Home",
  },
  {
    path: "/login",
    element: <Login />,
    name: "Login",
  },
  {
    path: "/signup",
    element: <Signup />,
    name: "Sign Up",
  },
  {
    path: "/movie/:movieName",
    element: <MovieDetails />,
    name: "Movie Details",
  },
  {
    path: "/Forgot",
    element: <Forgot />,
    name: "Forgot",
  },
  {
    path: "/view-all",
    element: <MovieCard />,
    name: "Show All Movie",
  },
  {
    path: "/*",
    element: <Navigate to="/" />,
    name: "Home",
  },


  {
    path: "/admin",
    element: <Dashboard />,
    name: "Dashboard",
  },
];

export default AppRoutes;
