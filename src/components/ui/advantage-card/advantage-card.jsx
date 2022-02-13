import React from "react";
import Title, { TitleSize } from "../../ui/title/title";
import Feature from "../../ui/feature/feature";
import "./style.css";

function AdvantageCard({ name, text, feature }) {
  return (
    <article
      className={`advantage-card${
        feature ? ` advantage-card--${feature}` : ""
      }`}
    >
      <div className="advantage-card__header">
        <div class="advantage-card__picture"></div>
        <div class="advantage-card__title-block">
          <Feature feature={feature} />
          <Title size={TitleSize.SMALL}>{name}</Title>
        </div>
      </div>
      <p
        className="advantage-card__content"
        dangerouslySetInnerHTML={{ __html: text }}
      />
    </article>
  );
}

export default AdvantageCard;
