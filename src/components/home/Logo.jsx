import React from "react";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to="/">
      <img src="/Images/logo.png" alt="Tracka Logo" className="h-10 w-auto" />
    </Link>
  );
};

export default Logo;
