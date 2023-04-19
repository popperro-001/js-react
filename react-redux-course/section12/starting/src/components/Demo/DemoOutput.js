import React from "react";

const DemoOutput = ({ show }) => {
  console.log("DemoOutput is Running");
  return <p>{show ? "This is new" : ""}</p>;
};

export default React.memo(DemoOutput);
