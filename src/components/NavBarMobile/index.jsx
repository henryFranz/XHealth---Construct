import { Link, useLocation } from "react-router-dom";

import styles from "../index.module.css";
export default function NavBarMobile(){
    const { pathname } = useLocation();
    return<>
  <Link to="/" style={{ all: "unset", cursor: "pointer" }}>
        <div className={styles.logo}>
          <span>
            Academia <span>XHealth</span>
          </span>
        </div>
      </Link>

      <nav>
        
      </nav>
    </>
}