import React from "react";
import "./style.css";

function LabelFeature({ label, negative }) {
  const className = 'label-feature ' + (negative ? 'label-feature--negative': '');  
  return label ? (
    <div
      className={className}
    >
      {label}
    </div>
  ) : null;
}
export default LabelFeature;
