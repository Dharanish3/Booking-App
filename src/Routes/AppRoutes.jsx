// User
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Signup from "../Pages/Signup";
import Forgot from "../Pages/Forgot";
import { Navigate } from "react-router-dom";
import MovieDetails from "../Pages/MovieDetails";
import MovieCard from "../Pages/MovieCard";
import Profile from "../Components/Profile";
import UserContextComponents from "../Utils/UserContextComponents";
import BookingContextComponent from "../Utils/BookingContextComponent";

// Admin
import Dashboard from "../AdminPages/Dashboard";
import AdminLogin from "../AdminPages/AdminLogin";
import AdminProtectedRoutes from "./AdminProtectedRoutes";
import MovieCreate from "../AdminPages/Movies/MovieCreate";
import MovieIndex from "../AdminPages/Movies/MovieIndex";
import MovieEdit from "../AdminPages/Movies/MovieEdit";
import Booking from "../Pages/Booking";
import UserProtectedRoutes from "./UserProtectedRoutes";
import YourBooking from "../Components/YourBooking";
import TheaterIndex from "../AdminPages/Theater/TheaterIndex";
import TheaterAdd from "../AdminPages/Theater/TheaterAdd";
import TheaterEdit from "../AdminPages/Theater/TheaterEdit";
import ShowIndex from "../AdminPages/Show/ShowIndex";
import AddShows from "../AdminPages/Show/AddShows";

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
    path: "/user-profile",
    element: (
      <UserContextComponents>
        <Profile />
      </UserContextComponents>
    ),
    name: "UserProfile",
  },
  {
    path: "/yourbooking",
    element: (
      <UserContextComponents>
        <YourBooking />
      </UserContextComponents>
    ),
    name: "yourbooking",
  },
  {
    path: "/movie/:movieName",
    element: (
      <BookingContextComponent>
        <MovieDetails />
      </BookingContextComponent>
    ),
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
    path: "/booking/:_id",
    element: (
      <UserProtectedRoutes>
        {" "}
        <BookingContextComponent>
          <Booking />
        </BookingContextComponent>
      </UserProtectedRoutes>
    ),
    name: "Booking ",
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
  {
    path: "/admin/movie-edit/:_id",
    element: <MovieEdit />,
    name: "Movie Index",
  },
  {
    path: "/admin/theater/",
    element: <TheaterIndex />,
    name: "Theater Index",
  },
  {
    path: "/admin/theater-add",
    element: <TheaterAdd />,
    name: "Theater Add",
  },
  {
    path: "/admin/theater-edit/:_id",
    element: <TheaterEdit/>,
    name: "Theater Edit",
  },
  {
    path: "/admin/show-list",
    element: <ShowIndex/>,
    name: "Show",
  },
  {
    path: "/admin/show-add",
    element: <AddShows/>,
    name: "Show",
  },
];

export default AppRoutes;
