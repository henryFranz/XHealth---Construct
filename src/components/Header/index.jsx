import { Link ,useLocation} from "react-router-dom";
import styles from "../index.module.css"

export default function Header() {
    const {pathname} = useLocation();

  return (
    <header>
      <div className={styles.logo}>
        <span >Academia <br /> <span>XHealth</span></span>
    
      </div>
      <nav>
        <Link to="/"  className={`${pathname == "/" ? "active" : ""}`} >Home</Link>
        <Link to="/modalidades" className={`${pathname == "/modalidades" ? "active" : ""}`}>Modalidades</Link>
        <Link to="/depoimentos" className={`${pathname == "/depoimentos" ? "active" : ""}`}>Depoimentos</Link>
        <Link to="/professores" className={`${pathname == "/professores" ? "active" : ""}`}>Porfessores</Link>
        <Link to="/duvidas" className={`${pathname == "/duvidas" ? "active" : ""}`}>Dúvidas</Link>
      </nav>
    </header>
  );
}
