import React from "react";
import { Link } from "react-router-dom";

export default function landing() {
  return (
    <>
      <div style={{ marginLeft: "35px" }}>Welcome to the Pokemon shop </div>

      <Link
        to="/logout"
        className="btn btn-secondary"
        style={{ float: "left" }}
      >
        Log out
      </Link>
    </>
  );
}

{
  /* <b style= {{ fontSize: "x-large", color: "royalblue" }}></b> */
}
