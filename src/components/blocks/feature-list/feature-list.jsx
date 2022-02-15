import React from "react";
import Title from "../../ui/title/title";
import Button from "../../ui/button/button";
import FeatureCard from "../../ui/feature-card/feature-card";

import "./style.css";

function FeatureList({ features }) {
  return (
    <section className="features container">
      <div className="features__wrapper">
        {features && features.length ? (
          <>
            <Title>Почему фермерские продукты лучше?</Title>
            <ul className="features__list">
              {features.map((feature) => (
                <li className="features__item" key={feature.id}>
                  <FeatureCard {...feature}/>
                </li>
              ))}
            </ul>
            <Button>Купить</Button>
          </>
        ) : null}
      </div>
    </section>
  );
}

export default FeatureList;
