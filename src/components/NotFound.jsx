import React from "react";
import { Link } from "react-router-dom";
import Errorimg from "../assets/images/error.png";

export default function NotFound() {
  return (
    <section className="container my-5">
      <div className="row">
        <div className="col-8 m-auto text-center">
          <h2 className="text-success pt-5">Page Not Found</h2>
          <img className="my-3" src={Errorimg} />
          <Link to='/'>
            <button className="btn btn-outline-success">Back To Home</button>
          </Link>
        </div>
      </div>
    </section>
  );
}
