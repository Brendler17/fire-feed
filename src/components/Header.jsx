import fireLogo from "../assets/fireLogo.svg"
import styles from "./Header.module.css";

export function Header() {
  return (
    <header className={styles.headerContainer}>
      <img src={fireLogo} alt="Logotipo do Ignite" />
    </header>
  )
}