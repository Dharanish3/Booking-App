// User
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Signup from "../Pages/Signup";
import Forgot from "../Pages/Forgot";
import { Navigate } from "react-router-dom";
import MovieDetails from "../Pages/MovieDetails";
import MovieCard from "../Pages/MovieCard";

// Admin
import Dashboard from "../AdminPages/Dashboard";
import AdminLogin from "../AdminPages/AdminLogin";
import AdminProtectedRoutes from "./AdminProtectedRoutes";
import MovieCreate from "../AdminPages/Movies/MovieCreate";
import MovieIndex from "../AdminPages/Movies/MovieIndex";

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

  // Admin
  {
    path: "/admin/dashboard",
    element: <Dashboard />,
    name: "Dashboard",
  },
  {
    path: "/admin/login",
    element: <AdminLogin />,
    name: "Admin Login",
  },
  {
    path: "/admin/movie-create",
    element: <MovieCreate />,
    name: "Movie Create",
  },
  {
    path: "/admin/movieslist",
    element: <MovieIndex />,
    name: "Movie Index",
  },
];

export default AppRoutes;
