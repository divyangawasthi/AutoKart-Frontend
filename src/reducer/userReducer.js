import Cookies from "universal-cookie";
const cookies = new Cookies();

const UserReducer = (state, action) => {
  switch (action.type) {
    case "SET_LOADING":
      return {
        ...state,
        isLoading: true,
      };

    case "SET_USER_DETAILS":
      var user = action.payload;
      var user_email = user.email;
      var isUserAdmin = user.admin;
      return {
        ...state,
        main_user: [
          user.firstName,
          user.lastName,
          user.email,
          user.password,
          user.admin,
        ],
        user_email,
        isUserAdmin,
        user: action.payload,
      };

    case "API_ERROR":
      return {
        ...state,
        isLoading: false,
        isError: true,
      };

    case "SET_USER_DETAILS_LOADING":
      return {
        ...state,
        isSingleUserLoading: true,
      };

    case "SET_ALL_USERS":
      return {
        ...state,
        users: action.payload,
      };

    case "SET_ALL_USERS_IN_ARRAY":
      let user2 = action.payload;
      let userObject = {
        id: user2.id,
        firstName: user2.firstName,
        lastName: user2.lastName,
        email: user2.email,
        password: user2.password,
        admin: user2.admin,
      };

      return {
        ...state,
        users: [...state.users, userObject],
      };
    default:
      return state;
  }
};

export default UserReducer;
