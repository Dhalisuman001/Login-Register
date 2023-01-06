import { useState } from "react";

const useSocial = () => {
  const [userData, setUserDate] = useState({});

  const getSocialAuth = async () => {
    fetch("http://localhost:8080/auth/login/success", {
      method: "GET",
      credentials: "include",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Credentials": true,
      },
    })
      .then((response) => {
        if (response.status === 200) return response.json();
        throw new Error("authentication has been failed!");
      })
      .then((resObject) => {
        setUserDate(resObject.user);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return { getSocialAuth, userData };
};

export default useSocial;

// const useFetch = () => {
//   const { setUser } = useContext(UserContext);
//   const initialState = {
//     userData: {},
//     error: "",
//   };

//   const reducer = (state, action) => {
//     switch (action.type) {
//       case "SUCCESS":
//         return {
//           userData: action.value,
//           error: "",
//         };

//       case "ERROR":
//         return {
//           userData: {},
//           error: action.error,
//         };
//       default:
//         return state;
//     }
//   };

//   const [state, dispatch] = useReducer(reducer, initialState);

//   // header data
//   let option = {
//     headers: {
//       "Content-Type": "application/json",
//     },
//   };

//   const getData = async (url, input) => {
//     try {
//       const { data } = await axios.post(
//         `http://localhost:8080/api/users/${url}`,
//         input,
//         option
//       );

//       localStorage.setItem("userInfo", JSON.stringify(data));
//       dispatch({ type: "SUCCESS", value: data });
//       setUser(localStorage.getItem("userInfo"));
//     } catch (error) {
//       // console.log(error?.response?.data?.message);
//       dispatch({ type: "ERROR", error: error?.response?.data?.message });
//     }
//   };
//   return { getData, state };
// };

// export default useFetch;
