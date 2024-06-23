import React from "react";
import { Link } from "react-router-dom";
import { MenuItem, Menu } from "semantic-ui-react";
import Brand from "./Brand";
import "./index.css";

function Navbar() {
  return (
    <Menu size="huge">
      <MenuItem>
        <div className="logo">
          <Brand />
        </div>
      </MenuItem>
      <MenuItem> <i className="home icon"></i> <Link to="/">Home</Link> </MenuItem>
      <MenuItem> <Link to="/login">Login</Link> </MenuItem>
      <MenuItem> <Link to="/signup">Sign Up</Link> </MenuItem>
      <MenuItem> <Link to="/profile">Profile</Link> </MenuItem>
      <MenuItem> <Link to="/contact">Contact</Link> </MenuItem>
      <MenuItem> <Link to="/about">About</Link> </MenuItem>
    </Menu>
  );
}

export default Navbar;
