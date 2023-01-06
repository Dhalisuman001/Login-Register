import React from "react";
import { NavLink } from "react-router-dom";

const Toggle = ({ toggle }) => {
  return (
    <>
      {toggle ? (
        <NavLink className="link-container" to={"/register"}>
          Don't have an account? Signup
        </NavLink>
      ) : (
        <NavLink className="link-container" to={"/login"}>
          Already have an account? Signin
        </NavLink>
      )}
    </>
  );
};

export default Toggle;
