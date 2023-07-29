import image9 from "../../assets/image-9.png"
import image10 from "../../assets/image-10.png"
import image11 from "../../assets/image-11.png"
import image12 from "../../assets/image-12.png"
import image13 from "../../assets/image-13.png"
import image14 from "../../assets/image-14.png"
import image15 from "../../assets/image-15.png"
import { Link } from "react-router-dom"
import style from "../index.module.css"

export default function Galery(){
    return    <div className={style.galery}>
    <Link to="/modalidades/modalidade" className={style.image1}> <img src={image9} alt="Academia" width="200" /></Link>
    <Link to="/modalidades/modalidade" className={style.image2}> <img src={image10} alt="Luta" width="400" /></Link>
    <Link to="/modalidades/modalidade" className={style.image3}> <img src={image12} alt="hiit" width="400" /></Link>
    <Link to="/modalidades/modalidade" className={style.image4}> <img src={image11} alt="Dança" width="200" /></Link>
    <Link to="/modalidades/modalidade" className={style.image5}> <img src={image13} alt="Esteira" width="200" /></Link>
    <Link to="/modalidades/modalidade" className={style.image6}> <img src={image15} alt="Jump" width="400" /></Link>
    <Link to="/modalidades/modalidade" className={style.image7}> <img src={image14} alt="Corporal" width="635" /></Link>

</div>
}