import React from "react";
import Title, {TitleSize} from "../../ui/title/title";
import farmer from "../../../assets/farmer.svg";
import "./style.css";

function About() {
  return (
    <section className="about">
      <div className="about__wrapper container">
        <div className="about__text-block">
          <Title size={TitleSize.BIG}>
            Магазин фермерских продуктов с доставкой
          </Title>
          <p className="about__text">
            Все продукты изготавливаются под заказ. Фермеры начинают готовить
            продукты за день до отправки заказа клиентам. Именно поэтому мы
            принимаем заказы заранее и доставляем продукты максимально свежими.
          </p>
        </div>
        <div className="about__image">
          <img className="about__picture" src={farmer} alt="farmer" />
        </div>
      </div>
    </section>
  );
}

export default About;
