import style from "../index.module.css"

export default function Coment({text,src,name,typeAos,durationAos}){
    return <div className={style.cardComent} 
    data-aos={typeAos}
    data-aos-duration={durationAos}
    >
        <span className={style.textComent}>{text}</span>
       <div className={style.datePerson}>
       <img className={style.imgComent} src={src} alt={name} />
        <span className={style.nameComent}>{name}</span>
       </div>
    </div>
}