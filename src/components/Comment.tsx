import { ThumbsUp, Trash } from 'phosphor-react'
import { useState } from 'react'
import { Avatar } from './Avatar'
import styles from './Comment.module.css'

export function Comment({content, onDeleteComment}) {

  const [likeCount, setLikeCount] = useState(0)
  
  function handleDeleteComment() {
    onDeleteComment(content)
  }

  function handleLikeComment() {
    setLikeCount(state => state + 1)
  }
  

  return (
      <div className={styles.comment}>
        <Avatar src='https://github.com/mateuso12.png'/>

        <div className={styles.commentBox}>
          <div className={styles.commentContent }>
            <header>
              <div className={styles.authorAndTime}>
                <strong>Mateus de Sousa</strong>
                <time title="9 de Junho ás 23:02h" dateTime="2022-06-09 23:02">Cerca de 1h atrás</time>
              </div>

              <button  onClick={handleDeleteComment} title="Deletar Comentário">
                <Trash size={24}/>
              </button>
            </header>

            <p>{content}</p>
          </div>

          <footer>
            <button onClick={handleLikeComment} >
              <ThumbsUp />
              Aplaudir <span>{likeCount}</span>
            </button>
          </footer>
        </div>
      </div>
    )
}