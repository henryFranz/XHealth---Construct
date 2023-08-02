import {  useLocation } from "react-router-dom";

import style from "../index.module.css"
import cards from "../../js/textCard";

export default function Card() {
  const { pathname } = useLocation();
  const i = +pathname[pathname.length - 1] - 1;
  const card = cards[i];

  return (<>
  

    <div className={style.container} >
      <div className={style.card} >
        <img src={`/src/assets/image${i + 1}.png`} alt={card.title} data-aos="fade-right" data-aos-duration="1000" />
        <span className={style.content}  data-aos="fade-left" data-aos-duration="1000">
        <span className={style.CardTitle}>{card.title}</span>
        <span className={style.CardSubtitle}>{card.subTitle}</span>
        <span className={style.CardText}>{card.text}</span>
        <span className={style.CardSubtitle}>BENIFICIOS:</span>
        <ol>
          {card.list.map((li, i) => (
            <li key={i} data-aos="fade-left" data-aos-duration={1000+(i*50)}>{li}</li>
          ))}
        </ol></span>    
      </div>
    </div>
  </>
  );
}
