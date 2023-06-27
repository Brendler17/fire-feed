import styles from "./Post.module.css";

export function Post(props) {
  return (
    <article className={styles.postContainer}>

      <header>
        <div className={styles.author}>
          <img
            className={styles.avatar}
            src="https://github.com/Brendler17.png" alt="Author Avatar's"
          />
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
        <p>Fala galeraa 👋</p>
        <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
        <p>👉{' '}<a href="#">A jane.design/doctorcare</a></p>
        <p>
          <a href="#">#Ignite</a>{' '}
          <a href="#">#React</a>{' '}
          <a href="#">#GDEV</a>{' '}
        </p>
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea placeholder="Deixe um comentário"/>
        <button type="submit">Publicar</button>
      </form>

    </article>
  )
}