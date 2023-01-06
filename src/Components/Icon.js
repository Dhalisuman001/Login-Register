import React from "react";
import BaseUrl from "../util/BaseUrl";
import { AiFillGithub } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { GrFacebook } from "react-icons/gr";

const Icon = () => {
  const googleAuth = () => {
    window.open(`${BaseUrl}/auth/google`, "_self");
  };
  const githubAuth = () => {
    window.open(`${BaseUrl}/auth/github`, "_self");
    // socialAuth();
  };
  const facebookAuth = () => {
    window.open(`${BaseUrl}/auth/facebook`, "_self");
  };
  return (
    <div
      style={{
        justifyContent: "center",
        display: "flex",
      }}
    >
      <FcGoogle size={40} style={{ margin: "15px" }} onClick={googleAuth} />
      <AiFillGithub
        color="black"
        size={40}
        style={{ margin: "15px" }}
        onClick={githubAuth}
      />
      <GrFacebook
        size={40}
        color="#0A66C2"
        style={{ margin: "15px" }}
        onClick={facebookAuth}
      />
    </div>
  );
};

export default Icon;
