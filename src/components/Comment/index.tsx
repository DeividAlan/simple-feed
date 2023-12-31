import { ThumbsUp, Trash } from '@phosphor-icons/react';
import styles from './Comment.module.css';
import { Avatar } from '../Avatar';
import { useState } from 'react';

interface iComment {
  commentText: string;
  onDeleteComment: (comment: string) => void
}

export function Comment({ commentText, onDeleteComment }: iComment) {
  const [likeCont, setLikeCount] = useState(0);

  function handleLikeComment() {
    setLikeCount(prevState => prevState + 1);
  }

  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/DeividAlan.png"/>

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Deivid Alan</strong>
              <time 
                title='11 de maio as 08:13' 
                dateTime="2022-05-11 08:13:30"
              >
                Cerca de 1h atrás
              </time>
            </div>

            <button onClick={() => onDeleteComment(commentText)} title='Deletar comentário'>
              <Trash size={24}/>
            </button>
          </header>


          <p>{commentText}</p>
        </div>

        <footer>
          <button onClick={handleLikeComment}>
            <ThumbsUp/>
            Aplaudir <span>{likeCont}</span>
          </button>
        </footer>
      </div>
    </div>
  )
}