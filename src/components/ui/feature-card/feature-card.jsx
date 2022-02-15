import React from "react";
import Title, { TitleSize } from "../../ui/title/title";
import LabelFeature from "../label-feature/label-feature";
import "./style.css";

function FeatureCard({ name, text, negative, label }) {
  return (
    <article
      className={`feature-card ${negative ? ` feature-card--negative` : ""}`}
    >
      <div className="feature-card__header">
        <div class="feature-card__picture"></div>
        <div class="feature-card__title-block">
          <LabelFeature label={label} negative={negative} />
          <Title size={TitleSize.EXTRASMALL}>{name}</Title>
        </div>
      </div>
      <p
        className="feature-card__content"
        dangerouslySetInnerHTML={{ __html: text }}
      />
    </article>
  );
}

export default FeatureCard;
