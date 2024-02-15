import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Signup from "../Pages/Signup";
import Forgot from "../Pages/Forgot";
import { Navigate } from "react-router-dom";

const AppRoutes = [
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
    path: "/Forgot",
    element: <Forgot />,
    name: "Forgot",
  },
  {
    path: "/*",
    element: <Navigate to="/" />,
    name: "Home",
  },
];

export default AppRoutes;
