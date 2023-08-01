import { Link, useLocation } from "react-router-dom";
import styles from "../index.module.css";
import React from "react";

export default function Header() {
  const { pathname } = useLocation();

  return (
    <header>
      <Link to="/" style={{ all: "unset", cursor: "pointer" }}>
        <div className={styles.logo}>
          <span>
            Academia <span>XHealth</span>
          </span>
        </div>
      </Link>

      <nav>
        <Link to="/" className={`${pathname === "/" ? "active" : ""}`}>
          Home
        </Link>
        <Link
          to="/modalidades"
          className={`${pathname === "/modalidades" ? "active" : ""}`}
        >
          Modalidades
        </Link>
        <Link
          to="/depoimentos"
          className={`${pathname === "/depoimentos" ? "active" : ""}`}
        >
          Depoimentos
        </Link>
        <Link
          to="/professores"
          className={`${pathname === "/professores" ? "active" : ""}`}
        >
          Professores
        </Link>
        <Link
          to="/duvidas"
          className={`${pathname === "/duvidas" ? "active" : ""}`}
        >
          Dúvidas
        </Link>
        <Link
          to="/account"
          className={`${pathname === "/account" ? "active" : ""}`}
        >
          Perfil
        </Link>
      </nav>
    </header>
  );
};

