import React from "react";
import "./style.css";

function Feature({ feature }) {
  let options = {};
  switch (feature) {
    case "farm-product":
      options = {
        text: "Фермерские продукты",
        bgColor: "#88AA4D",
      };

      break;
    case "shop-product":
      options = {
        text: "Магазинные продукты",
        bgColor: "#F75531",
      };
      break;
    default:
      options = {
        text: "",
        bgColor: "",
      };
      break;
  }

  return options.text ? (
    <div
      className={`feature feature--${feature}`}
      style={{ backgroundColor: options.bgColor }}
    >
      {options.text}
    </div>
  ) : null;
}
export default Feature;
