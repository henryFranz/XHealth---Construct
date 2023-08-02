import style from "../index.module.css"
export default function CardProfessor({src,durationAos,typeTreino,text,name}){
    return(
        <>
         <span className={style.personal}  data-aos="fade-up"
     data-aos-duration={durationAos}>
            <span className={style.personalTitle}>{typeTreino}: <span>{name}</span></span>
            <img src={src} />
            <span className={style.personalText}>
         {text}
            </span>
          </span>
</>
    )
}