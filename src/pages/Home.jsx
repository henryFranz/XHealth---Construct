import style from "./styles.module.css";

export default function home() {
  return (
    <main className={style.home}>
      <div className={style.conatainer01}>
        <span className={style.homeTitle}>XHealth</span>
        <span className={style.homeSubTitle}>
          seu <span className={style.strong}>maior</span> projeto deve ser você!
        </span>
        <span className={style.homeText}>
          Não deixe que as pessoas te façam desistir daquilo que você mais quer
          na vida. Acredite. Lute. Conquiste. E acima de tudo, seja feliz.
        </span>
      </div>
      <div className={style.days}>
        <span className={style.day}>
            <span className={style.dayTitle}>SEGUNDA-FEIRA</span>
            <span className={style.dayHour}>6:00-22:00</span>
            <span className={style.dayList}>MUAY THAI</span>
            <span className={style.dayList}>HIIT</span>
        </span>
        <span className={style.day}>
            <span className={style.dayTitle}>TERÇA-FEIRA</span>
            <span className={style.dayHour}>6:00-22:00</span>
            <span className={style.dayList}>ZUMBA</span>
            <span className={style.dayList}>FUNCIONAL</span>
        </span>
        <span className={style.day}>
            <span className={style.dayTitle}>QUARTA-FEIRA</span>
            <span className={style.dayHour}>6:00-22:00</span>
            <span className={style.dayList}>MUAY THAI</span>
            <span className={style.dayList}>BIKE IDOOR</span>
        </span>
        <span className={style.day}>
            <span className={style.dayTitle}>QUARTA-FEIRA</span>
            <span className={style.dayHour}>6:00-22:00</span>
            <span className={style.dayList}>ZUMBA</span>
            <span className={style.dayList}>FUNCIONAL</span>
        </span>
        <span className={style.day}>
            <span className={style.dayTitle}>SEXTA-FEIRA</span>
            <span className={style.dayHour}>6:00-12:00</span>
            <span className={style.dayList}>MUAY THAI</span>
            <span className={style.dayList}>HIIT</span>
        </span>
        <span className={style.day}>
            <span className={style.dayTitle}>SABADO</span>
            <span className={style.dayHour}>6:00-12:00</span>
            <span className={style.dayList}>BIKE IDOOR</span>
            <span className={style.dayList}>JUMP</span>
        </span>
      
      </div>
    </main>
  );
}
