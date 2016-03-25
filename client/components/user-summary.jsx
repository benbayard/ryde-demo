import React from "react";

import "./user-summary.css";

export const UserSummary = ({userAvatar, userName}) => {
  return (
    <section className="user-summary">
      <img src={userAvatar} />
      <p className="user-name">{userName}</p>
    </section>
  );
}
