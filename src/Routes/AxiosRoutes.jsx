const ApiRoutes = {
  SIGN_IN: {
    path: "/user/login",
    authenticate: false,
  },

  SIGN_UP: {
    path: "/user/sign-up",
    authenticate: false,
  },
  GET_USER: {
    path: "/user/home",
    authenticate: false,
  },
  FORGOT: {
    path: "/forgot-password",
    authenticate: false,
  },
};

export default ApiRoutes;
