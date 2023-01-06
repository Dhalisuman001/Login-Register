import axios from "axios";
import { useContext, useReducer } from "react";
import { UserContext } from "../Context/GlobalState";
import BaseUrl from "../util/BaseUrl";

const useFetch = () => {
  const { setUser } = useContext(UserContext);
  const initialState = {
    userData: {},
    error: "",
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case "SUCCESS":
        return {
          userData: action.value,
          error: "",
        };

      case "ERROR":
        return {
          userData: {},
          error: action.error,
        };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  // header data
  let option = {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
    },
  };

  const getData = async (url, input) => {
    try {
      const { data } = await axios.post(
        `${BaseUrl}/api/users/${url}`,
        input,
        option
      );

      localStorage.setItem("userInfo", JSON.stringify(data));
      dispatch({ type: "SUCCESS", value: data });
      setUser(localStorage.getItem("userInfo"));
    } catch (error) {
      // console.log(error?.response?.data?.message);
      dispatch({ type: "ERROR", error: error?.response?.data?.message });
    }
  };
  return { getData, state };
};

export default useFetch;
