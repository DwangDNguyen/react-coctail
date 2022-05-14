import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <section className="section error-page">
      <div className="error-container">
        <h1>oops! Dead End</h1>
        <Link to="/">
          <button className="btn btn-primary">back home</button>
        </Link>
      </div>
    </section>
  );
};

export default Error;
