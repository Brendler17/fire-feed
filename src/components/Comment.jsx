import { ThumbsUp, Trash } from "phosphor-react";
import styles from "./Comment.module.css";

export function Comment() {
  return (
    <div className={styles.comment}>

      <img className={styles.avatar} src="https://github.com/Brendler17.png" alt="Imagem do usuário" />

      <div className={styles.commentContainer}>
        <div className={styles.commentContent}>
          <header>

            <div className={styles.author}>
              <strong>Gustavo Brendler</strong>
              <time
                title="19 de Junho às 09:51h"
                dateTime="2023-06-19 09:51:13"
              >
                Cerca de 1h atrás
              </time>
            </div>

            <button title="Deletar comentário">
              <Trash size={24} />
            </button>

          </header>

          <p>Muito bom, parabéns!</p>
        </div>

        <footer>
          <button>
            <ThumbsUp />
            Aplaudir <span>20</span>
          </button>
        </footer>

      </div>

    </div>
  )
}