import React from "react";

import "./style.css";

function Button({ children, minWidth }) {
  return <button className="button" style={{minWidth: minWidth}}>{children}</button>;
}

export default Button;
