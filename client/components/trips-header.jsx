import React from "react";


export const TripsHeader = ({tableHeaders}) => {
    return (
      <thead>
        <tr>
          {tableHeaders.map((heading, i) => (
            <th key={i}>{heading}</th>
          ))}
        </tr>
      </thead>
    );
};
