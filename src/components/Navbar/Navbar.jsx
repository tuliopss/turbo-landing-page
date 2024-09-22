import React, { useContext } from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navbar_logo}>
        <Link to='/'>
          <img src='public/logo.png' alt='logo-turbo' />
        </Link>
      </div>
      <ul>
        <li>
          <Link>Sobre</Link>
        </li>
        <li>
          <Link>Serviços</Link>
        </li>
        <li>
          <Link>Contato</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
