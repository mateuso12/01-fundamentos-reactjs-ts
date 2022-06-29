import { format, formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import { useState } from 'react';

import { Avatar } from './Avatar';
import { Comment } from './Comment';
import styles from './Post.module.css';

export function Post({author, content, publishedAt}) {
  
  const [comments, setComments] = useState(['Um novo post'])

  const [newCommentText, setNewCommentText] = useState('')

  const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'de' yyyy 'às' HH:mm'h'",{
    locale: ptBR
  })
  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    addSuffix: true,
    locale: ptBR
    })

    function handleCreateNewComment(e) {
      e.preventDefault()

      setComments([...comments, newCommentText])
      setNewCommentText('')
    }

    function handleNewCommentChange(e) {
      event.target.setCustomValidity('')
      setNewCommentText(e.target.value)
    }

    function handleNewCommentInvalid(e) {
      e.target.setCustomValidity('Esse campo é obrigatório')
    }

    function deleteComment(commentToDelete) {
      const commentsWithoutDeletedOne = comments.filter(comment => {
        return comment !== commentToDelete
      })

      setComments(commentsWithoutDeletedOne)
    }

    const isNewCommentEmpty = newCommentText.length === 0;

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={author.avatarUrl} />
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>

        <time title={publishedDateFormatted} dateTime={publishedAt.toISOString()}>{publishedDateRelativeToNow}</time>
      </header>

      <div className={styles.content}>
      {content.map((item) => {
            switch (item.type) {
              case 'paragraph':
                return <p key={item.id}>{item.content}</p>;
              case 'link':
                return <p key={item.id}><a href={item.content} target="_blank">{item.content}</a></p>;
              default:
                return null;
            }
          })}
      </div>
      <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea
          name="comment"
          placeholder="Deixe um comentário aqui..."
          value={newCommentText}
          onChange={handleNewCommentChange}
          onInvalid={handleNewCommentInvalid}
          required
        />

        <footer>
          <button type='submit' disabled={isNewCommentEmpty}>
            Publicar
          </button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {comments.map(comment => {
          return (
            <Comment key={comment} content={comment} onDeleteComment={deleteComment} />
          )
        })}
      </div>

    </article>
  )
}