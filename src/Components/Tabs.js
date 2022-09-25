import React from "react";
import Login from "./Login";
import Dashboard from "./Dashboard";
const Tabs = () => {
  return (
    <div className="Tabs">
      {/* Tab nav */}
      <ul className="nav">
        <li><Login/></li>
        <li><Dashboard/></li>
      </ul>
      <div className="outlet">
        {/* content will be shown here */}
      </div>
    </div>
  );
};
export default Tabs;