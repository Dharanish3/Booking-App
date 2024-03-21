const ApiRoutes = {
  SIGN_IN: {
    path: "/user/login",
    authenticate: true,
  },

  SIGN_UP: {
    path: "/user/sign-up",
    authenticate: false,
  },

  GET_USER: {
    path: "/user/profile",
    authenticate: true,
  },

  MOVIE_CREATE: {
    path: "/user/movie-list",
    authenticate: false,
  },
  MOVIE_DELETE: {
    path: "/user/movie",
    authenticate: false,
  },
  MOVIE_EDIT: {
    path: "/user/movie-edit",
    authenticate: false,
  },

  MOVIE_GET: {
    path: "/user/movie-list",
    authenticate: false,
  },
  MOVIE_GET_ID: {
    path: "/user/movie",
    authenticate: false,
  },
  MOVIE_GET_NAME: {
    path: "/user/movies",
    authenticate: false,
  },

  

  FORGOT: {
    path: "/forgot-password",
    authenticate: false,
  },

  // Admin
  ADMIN_SIGN_IN: {
    path: "/admin/login",
    authenticate: true,
  },


  Image : {
    path: "http://localhost:3000/images"
    
  },



  
};

export default ApiRoutes;
