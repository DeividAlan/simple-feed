import { format, formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR'
import { Avatar } from '../Avatar';
import { Comment } from '../Comment';
import styles  from './Post.module.css';
import { useState } from 'react';

type Author = {
  avatarUrl: string,
  name: string,
  role: string
}

type ContentItem = {
  type: string;
  content: string;
  href?: string;
}

interface iPost {
  author: Author;
  publishedAt: Date;
  content: ContentItem[][];
}

export function Post({author, publishedAt, content}: iPost) {
  const [comments, setComments] = useState([ 
    'Muito bom Devon, parabéns!! 👏👏'
  ]);
  const [newCommentText, setNewCommentText] = useState('');

  const publishedDateFormatted = format(
    publishedAt, "d' de 'LLLL' às 'HH':'mm'h'", { locale: ptBR }
  );

  const publishedDateRelativeToNow = formatDistanceToNow(
    publishedAt, { locale: ptBR, addSuffix: true }
  );

  function handleCreateNewComment() {
    setComments(prevState => [...prevState, newCommentText]);
    setNewCommentText('');
  }

  function deleteComment(comment: string) {
    setComments(prevState => prevState.filter(c => c !== comment))
  }

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={author.avatarUrl}/>
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>
        <time 
          title={publishedDateFormatted} 
          dateTime={publishedAt.toISOString()}
        >
          Publicado {publishedDateRelativeToNow}
        </time>
      </header>
      <div className={styles.content}>
        {content.map((lines, index) => {
          return (
            <p key={index}>
              {lines.map((contentLine, index) => {
                if (contentLine.type === 'link') {
                  return <a key={index} href={contentLine.href}>{contentLine.content}</a>
                } else {
                  return contentLine.content 
                }
              })}
            </p>
          )
        })}
      </div>
      <div className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea 
          value={newCommentText} 
          onChange={({target}) => setNewCommentText(target.value)} 
          placeholder='Escreva um comentário'
          required
        />
        <footer>
          <button 
            type='submit' 
            onClick={handleCreateNewComment}
            disabled={newCommentText === ''}
          >
            Publicar
          </button>
        </footer>
      </div>
      <div className={styles.commentList}>
        {comments.map((comments) => {
          return (
            <Comment 
              key={comments} 
              commentText={comments} 
              onDeleteComment={deleteComment}
            />
          );          
        })}
      </div>
    </article>
  );
}