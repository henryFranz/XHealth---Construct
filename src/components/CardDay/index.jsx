import style from "../../pages/styles.module.css"

export default function CardDay({date,horario,treinos,durationAnimation}){
    return( <> 
     <span className={style.day} data-aos="fade-up"
      data-aos-duration={durationAnimation}
    
     >
            <span className={style.dayTitle}>{date}</span>
            <span className={style.dayHour}>{horario}</span>
            {treinos.map((treino,i) =><span className={style.dayList} key={i}>{treino}</span>
        )}
            </span>
    </>)
}