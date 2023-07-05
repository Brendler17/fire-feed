import { useState } from "react";
import { Avatar } from "./Avatar";
import { ThumbsUp, Trash } from "phosphor-react";

import styles from "./Comment.module.css";

export function Comment({ content, onDeleteComment }) {

  const [likeCount, setLikeCount] = useState(0);

  function handleDeleteComment() {
    onDeleteComment(content);
  }

  function handleCommentLike() {
    setLikeCount((state) => {
      return state + 1;
    });
  }

  return (
    <div className={styles.comment}>

      <Avatar hasBorder={false} src="https://github.com/Brendler17.png" />

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

            <button onClick={handleDeleteComment} title="Deletar comentário">
              <Trash size={24} />
            </button>

          </header>

          <p>{content}</p>
        </div>

        <footer>
          <button onClick={handleCommentLike}>
            <ThumbsUp />
            Aplaudir <span>{likeCount}</span>
          </button>
        </footer>

      </div>

    </div>
  )
}