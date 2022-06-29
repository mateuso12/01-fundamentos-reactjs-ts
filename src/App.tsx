import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';

import styles from './App.module.css';
import './global.css'; 
import { Post } from './components/Post';


const posts = [{
  id: 1,
  author: {
    name: 'John Doe',
    avatarUrl: "https://i.pravatar.cc/300?img=1",
    role: "Dev. Front End"
  },
  content: [
    { type: 'paragraph', content: ' Fala galeraa 👋' },
    { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
    { type: 'link', content: '#novoprojeto' },
  ],
  publishedAt: new Date('2020-01-01T00:00:00.000Z'),
},
{
  id: 2,
  author: {
    name: 'Sarah Doe',
    avatarUrl: "https://i.pravatar.cc/300?img=2",
    role: "Dev. Front End Jr."
  },
  content: [
    { type: 'paragraph', content: ' Fala galeraa 👋' },
    { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
    { type: 'link', content: '#novoprojeto' },
  ],
  publishedAt: new Date('2022-01-01T00:00:00.000Z'),
}]

export function App() {
  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <aside>
          <Sidebar />
        </aside>
        <main>
          {posts.map(post => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>
    </>
  )
}


