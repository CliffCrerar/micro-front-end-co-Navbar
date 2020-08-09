import React from "react";
import { BrowserRouter, Link } from "react-router-dom";
import "./root.component.css";

export default function Root(props) {
  // return <section>{props.name} is mounted!</section>;
  return (
    <BrowserRouter>
      <nav className="nav">
        <Link to="/page-one" className="link">
          Page 1
        </Link>
        <Link to="/page-two" className="link">
          Page 2
        </Link>
      </nav>
    </BrowserRouter>
  );
}
