import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import "../App.css";

const Home = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState();
  const logOut = (e) => {
    e.preventDefault();
    navigate("/login");
  };
  useEffect(() => {
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
          Hey, {userData?.name?.givenName || userData?.displayName}
        </div>
        <br />
        <div className="about">
          <p>
            Education is the most powerful catalyst for mental, physical and
            social wellbeing. Kolkata Hormone Foundation conducts patient
            education programs to incorporate lifestyle modification practices
            which promote a genuine sense of integration & harmony among
            diabetic patient. It is also the objective of the foundation, to
            encourage practising doctors to keep themselves updated on current
            developments in medical practice (specially in the field of
            Diabetology & Endocrinology), so as to maintain a high professional
            standard.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
