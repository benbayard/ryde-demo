import React, { PropTypes } from "react";

import "./header.css";

import { UserInformation } from "./user-information.jsx";

export const Header = ({ userName }) => {
  return (
    <header className="global-header">
      <p className="uber-logo">Uber</p>
      <UserInformation {...{ userName }} />
    </header>
  );
};

Header.propTypes = {
  userName: PropTypes.string.isRequired
};
