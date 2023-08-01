import style from "./styles.module.css";
import personalFuncional from "../assets/personais/P.F.H.jpg";
import personalLuta from "../assets/personais/P.L.jpg";
import personalMusculacao from "../assets/personais/P.M.jpg";
import personalZumba from "../assets/personais/P.Z.jpg";

export default function Professores() {
  return (
    <>
      <main className={style.professores}>
        <span className={style.title}>PROFESSORES</span>
        <div className={style.personals}>
          <span className={style.personal}>
            <span className={style.personalTitle}>Treinador</span>
            <img src={personalFuncional} />
          </span>
          <span className={style.personal}>
            <span className={style.personalTitle}>Treinador</span>
            <img src={personalLuta} />
          </span>
          <span className={style.personal}>
            <span className={style.personalTitle}>Treinador</span>
            <img src={personalMusculacao} />
          </span>
          <span className={style.personal}>
            <span className={style.personalTitle}>Treinador</span>
            <img src={personalZumba} />
          </span>
        </div>
      </main>
    </>
  );
}
