import { PencilSimpleLine } from "phosphor-react";
import styles from "./Sidebar.module.css";

export function Sidebar() {
  return (
    <aside className={styles.sidebarContainer}>
      <img
        className={styles.cover}
        src="https://images.unsplash.com/photo-1516820827855-3ea1bd6f79ea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=50"
      />

      <div className={styles.profile}>
        <img
          className={styles.avatar}
          src="https://github.com/Brendler17.png"
        />
        <strong>Gustavo Brendler</strong>
        <span>Front-End Developer</span>
      </div>

      <footer>
        <a href="#">
        <PencilSimpleLine size={20}/>
          Editar seu perfil
        </a>
      </footer>

    </aside>
  );
}
