import React, { useContext } from "react";
import { Navigate } from "react-router";
import "../App.css";
import { UserContext } from "../Context/GlobalState";

const Home = () => {
  const { setUser, user } = useContext(UserContext);
  const logOut = (e) => {
    e.preventDefault();
    localStorage.removeItem("userInfo");
    setUser(null);
  };

  if (!user) {
    return <Navigate to={"/login"} />;
  }
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
        <div id="typewriter">Our Goal</div>
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

export default Home;
