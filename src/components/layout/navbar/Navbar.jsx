import { Link } from "react-router-dom";

import Container from "../container/Container";
import styles from "./Navbar.module.css";

import logo from "../../../assets/costs_logo.png";

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <Container>
        <Link to="/cost-project">
          <img src={logo} alt="Cost" />
        </Link>
        <ul className={styles.list}>
          <li className={styles.item}>
            <Link to="/cost-project">Home</Link>
          </li>
          <li className={styles.item}>
            <Link to="/cost-project/projects">Projetos</Link>
          </li>
          <li className={styles.item}>
            <Link to="/cost-project/company">Empresa</Link>
          </li>
          <li className={styles.item}>
            <Link to="/cost-project/contact">Contato</Link>
          </li>
        </ul>
      </Container>
    </nav>
  );
}

export default Navbar;
