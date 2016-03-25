import React, { PropTypes } from "react";

import "./user-information.css";

export const UserInformation = ({userName}) => {
  return (
    <section
      className="user-information"
    >
      <span className="icon-user"/>
      <span className="user-name">{userName}</span>
      <span className="icon-caret-down" />
    </section>
  );
};

UserInformation.displayName = "UserInformation";

UserInformation.propTypes = {
  userName: PropTypes.string.isRequired
};
