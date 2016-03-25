import React from "React";

import { AccountPanel } from "./account-panel.jsx";
import { Trips } from "./trips.jsx";

import "./main-panel.css";

export const MainPanel = ({trips}) => {
  return (
    <main className="main-panel">
      <AccountPanel/>
      <Trips {...{trips}}/>
    </main>
  );
};
