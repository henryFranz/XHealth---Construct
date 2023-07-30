
import style from "./styles.module.css";
import { Outlet } from "react-router-dom";


export default function Modalidades(){


    return (<main className={style.mainModalidades}>
        <span className={style.title}> MODALIDADES</span>
        <Outlet/>
    </main>
)}