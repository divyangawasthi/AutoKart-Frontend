import { createContext, useContext, useEffect, useReducer } from "react";
import Cookies from "universal-cookie";
import axios from "axios";
import reducer from "../reducer/userReducer";

const UserContext = createContext();
const cookies = new Cookies();

const API = "http://localhost:8081/user/" + cookies.get("token");

const initialState = {
  users: [],
  main_user: [],
  isSingleUserLoading: false,
};

const UserProvider = ({ children }) => {
  const getAllUsers = async () => {
    state.users = [];
    try {
      const url = "http://localhost:8081/user/get-all";
      const res = await axios.get(url);
      const users = await res.data;
      if (users.length == 0) {
        state.users = [];
        return;
      }
      for (let i = 0; i < users.length; i++) {
        addToLocalUsersArray(users[i]);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const getUserDetails = async (url) => {
    try {
      const res = await axios.get(url);
      const user = await res.data;
      dispatch({ type: "SET_USER_DETAILS", payload: user });
    } catch (error) {
      // console.log(error);
    }
  };

  const addToLocalUsersArray = (user) => {
    dispatch({ type: "SET_ALL_USERS_IN_ARRAY", payload: user });
  };

  useEffect(() => {
    // getAllUsers();
    getUserDetails(API);
  }, []);

  return (
    <UserContext.Provider value={{ ...state, getAllUsers }}>
      {children}
    </UserContext.Provider>
  );
};

const useUserContext = () => {
  return useContext(UserContext);
};

export { UserProvider, UserContext, useUserContext };
