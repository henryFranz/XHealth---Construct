import { Link, useLocation } from "react-router-dom";
import arrow from "../../assets/Arrow.png";
import style from "../index.module.css"
import cards from "../../js/textCard";

export default function Card() {
  const { pathname } = useLocation();
  const i = +pathname[pathname.length - 1] - 1;
  const card = cards[i];

  return (<>
  

  
    <div className={style.container}>
      <div className={style.card}>
        <img src={`/src/assets/image${i + 1}.png`} alt={card.title} />
        <span className={style.content}>
        <span className={style.CardTitle}>{card.title}</span>
        <span className={style.CardSubtitle}>{card.subTitle}</span>
        <span className={style.CardText}>{card.text}</span>
        <span className={style.CardSubtitle}>BENIFICIOS:</span>
        <ol>
          {card.list.map((li, i) => (
            <li key={i}>{li}</li>
          ))}
        </ol></span>    
      </div>
    </div>
  </>
  );
}
