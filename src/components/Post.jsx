import { Comment } from "./Comment";
import { Avatar } from "./Avatar";

import styles from "./Post.module.css";

export function Post(props) {
  // console.log(props);
  return (
    <article className={styles.postContainer}>

      <header>
        <div className={styles.author}>
          <Avatar src="https://github.com/Brendler17.png" />

          <div className={styles.authorInfo}>
            <strong>Gustavo Brendler</strong>
            <span>Desenvolvedor Front-End</span>
          </div>
        </div>
        <time
          title="19 de Junho às 09:51h"
          dateTime="2023-06-19 09:51:13"
        >
          Publicado há 2h
        </time>
      </header>

      <div className={styles.content}>
        <p>Salve dev's 👋</p>
        <p>Acabei de subir mais um projeto no meu github. É o primeiro projeto do Ignite, treinamento da Rocketseat. O nome do projeto é Fire Feed! 🔥</p>
        <p>👉{' '}<a href="#">github.com/Brendler17/fire-feed</a></p>
        <p>
          <a href="#">#Ignite</a>{' '}
          <a href="#">#React</a>{' '}
          <a href="#">#Rocketseat</a>{' '}
        </p>
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea placeholder="Deixe um comentário" />
        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        <Comment />
        <Comment />
        <Comment />
      </div>

    </article>
  )
}