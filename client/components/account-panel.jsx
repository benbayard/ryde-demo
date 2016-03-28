import React, { PropTypes } from "react";

import "./account-panel.css";

import { UserSummary } from "./user-summary.jsx";
import { AccountCTAs } from "./account-ctas.jsx";

export const AccountPanel = () => {
  return (
    <section className="account-panel">
      <UserSummary
        userName="Zack"
        userAvatar="https://image.freepik.com/free-icon/user-male-shape-in-a-circle--ios-7-interface-symbol_318-35357.png"
      />
      <AccountCTAs
        accountLinks={[{
          text: "My Trips",
          active: true
        }, {
          text: "Profile"
        }, {
          text: "Payment"
        }, {
          text: "Free Rides",
          isNew: true
        }, {
          text: "Log Out"
        }]}
      />
      <section className="lost-something">
        <a href="http://uber.com/lost">
          <section>
            <span className="icon-search"/>
          </section>
          <section>
            <p className="lost-question">Lost Something?</p>
            <p className="lost-link">Check out uber.com/lost</p>
          </section>
        </a>
      </section>
    </section>
  );
};
