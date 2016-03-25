import React from "react";
import classnames from "classnames";

import "./account-ctas.css";

export const AccountCTAs = ({accountLinks}) => {
  return (
    <section>
      {accountLinks.map((account, index) => {
        const {
          isNew, active, text
        } = account;
        return (
          <p
            className={classnames("account-cta", {
              "is-active": active
            })}
            key={index}
          >
            <span className="account-cta-text">{text}</span>
            {isNew ? <span className="new-flag">NEW!</span> : ""}
          </p>
        );
      })}
    </section>
  );
};
