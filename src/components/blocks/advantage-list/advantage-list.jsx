import React from "react";
import Title from "../../ui/title/title";
import Button from "../../ui/button/button";
import AdvantageCard from "../../ui/advantage-card/advantage-card";

import "./style.css";

function AdvantageList({ advantages }) {
  return (
    <section className="advantages container">
      <div className="advantages__wrapper">
        {advantages && advantages.length ? (
          <>
            <Title>Почему фермерские продукты лучше?</Title>
            <ul className="advantages__list">
              {advantages.map((advantage) => (
                <li className="advantages__item" key={advantage.id}>
                  <AdvantageCard {...advantage}/>
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

export default AdvantageList;
