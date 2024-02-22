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
    path: "/user/home",
    authenticate: false,
  },

  MOVIE_GET: {
    path: "/user/movie-list",
    authenticate: false,
  },

  MOVIE_GET_NAME: {
    path: "/user/movie",
    authenticate: false,
  },

  FORGOT: {
    path: "/forgot-password",
    authenticate: false,
  },




  // Admin
  ADMIN_SIGN_IN : {
    path: "/admin/login",
    authenticate: false,
  }
};

export default ApiRoutes;
