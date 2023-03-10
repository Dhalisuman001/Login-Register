import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";

import "../App.css";
import BaseUrl from "../util/BaseUrl";

const HomePage = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState();
  const logOut = (e) => {
    e.preventDefault();
    navigate("/login");
  };
  useEffect(() => {
    fetch(`${BaseUrl}/auth/login/success`, {
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
        setUserData(resObject.user);
        console.log(resObject.user);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="main-div">
      <div className="div1">
        <div className="banner--image">
          <img
            width="100%"
            height="400"
            alt=""
            src="https://img.freepik.com/free-vector/education-horizontal-typography-banner-set-with-learning-knowledge-symbols-flat-illustration_1284-29493.jpg?w=2000"
          />
        </div>
      </div>
      <br />
      <div className="div2">
        <button className="btn-l" onClick={logOut}>
          Logout
        </button>
        <div id="typewriter">
          Welcome, {userData?.displayName || userData?.givenName}
        </div>
        <br />
        <div className="about">
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis
            magnam nihil, modi necessitatibus illum deleniti animi dolore quasi
            deserunt quo nobis nisi corrupti quisquam delectus, architecto
            doloremque dolores minus eveniet enim voluptatem hic dolor!
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
