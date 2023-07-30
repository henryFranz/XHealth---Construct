import style from "../index.module.css"

export default function Coment({text,src,name}){
    return <div className={style.cardComent}>
        <span className={style.textComent}>{text}</span>
       <div className={style.datePerson}>
       <img className={style.imgComent} src={src} alt={name} />
        <span className={style.nameComent}>{name}</span>
       </div>
    </div>
}