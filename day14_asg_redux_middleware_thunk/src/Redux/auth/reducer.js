import { loadData, saveData } from "../../utils/localStorage";
import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS } from "./action";

const token = loadData("token");

const init = {
  isAuth: token ? true : false,
  token: token || "",
  isError: false,
  isLoading: false,
};

export const authReducer = (state = init, { type, payload }) => {
  switch (type) {
    case LOGIN_REQUEST: {
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    }
    case LOGIN_SUCCESS: {
      saveData("token", payload);
      return {
        ...state,
        isAuth: true,
        token: payload,
        isLoading : false,
      };
    }
    case LOGIN_FAILURE:{
        return{
            ...state,
            isAuth : false,
            token : "",
            isError : true,
            isLoading : false,
        }
    }
    default :
    return state
  }
};
