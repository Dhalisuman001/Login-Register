import React, { useContext, useEffect, useRef, useState } from "react";
import Icon from "../Components/Icon";
import { NavLink, Navigate } from "react-router-dom";
import Toggle from "./Toggle";
import { UserContext } from "../Context/GlobalState";
import "../Styles/Styles.css";
import useFetch from "../Hooks/useFetch";
import useSocial from "../Hooks/useSocial";

const Structure = ({ toggle }) => {
  const socialAuth = useSocial();
  const { email, password, setEmail, setPassword, user } =
    useContext(UserContext);
  const [show, setShow] = useState("hide");
  const showRef = useRef();
  const { getData, state } = useFetch();
  const type = toggle ? "login" : "register";

  const isShow = () => {
    if (show === "hide") {
      setShow("show");
      showRef.current.type = "text";
    } else {
      setShow("hide");
      showRef.current.type = "password";
    }
  };

  const inputHandel = (e) => {
    e.preventDefault();
    getData(type, { email, password });
    console.log(state || state);
  };

  if (user) {
    return <Navigate to={"/"} />;
  }

  return (
    <section className="container forms">
      <div className="form login">
        <div className="form-content">
          <header> {toggle ? "Login" : "Register"}</header>
          <form onSubmit={inputHandel}>
            <div className="field input-field">
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="Email"
                className="input"
              />
            </div>

            <div className="field input-field">
              <input
                ref={showRef}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                placeholder="Password"
                className="password"
              />
              <i onClick={isShow} className={`bx bx-${show} eye-icon`}></i>
            </div>

            {toggle && (
              <NavLink className="link-container">Forgot password?</NavLink>
            )}

            <div className="field button-field">
              <button>{toggle ? "Login" : "Sign Up"}</button>
            </div>
          </form>

          <Toggle toggle={toggle} />
          <div className="link-container red">{state?.error}</div>
        </div>

        <div className="line"></div>

        <div>
          <Icon />
        </div>
      </div>
    </section>
  );
};

export default Structure;
