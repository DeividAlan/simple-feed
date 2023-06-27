import { Header } from './components/Header/';
import { Post } from './components/Post';
import { Sidebar } from './components/Sidebar';

import './global.css';
import styles from './App.module.css';

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/DeividAlan.png',
      name: 'Deivid Alan',
      role: 'Web Developer'
    },
    publishedAt: new Date('2023-06-11 08:13:30'),
    content: [
      [
        { type: 'paragraph', content: 'Fala galeraa 👋'}
      ],
      [
        { 
          type: 'paragraph', 
          content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' 
        }
      ],
      [
        { type: 'paragraph', content: '👉 '}, 
        { type: 'link', content: 'jane.design/doctorcare', href: '#' }
      ],
      [
        { type: 'link', content: '#novoprojeto', href: '#' },
        { type: 'paragraph', content: ' '},
        { type: 'link', content: '#nlw', href: '#' },
        { type: 'paragraph', content: ' '},
        { type: 'link', content: '#rocketseat', href: '#' },
      ]
    ]
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/reactjs.png',
      name: 'React Js',
      role: 'Library'
    },
    publishedAt: new Date('2023-06-21 10:13:30'),
    content: [
      [
        { type: 'paragraph', content: 'Fala galeraa 👋'}
      ],
      [
        { 
          type: 'paragraph', 
          content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'
        }
      ],
      [
        { type: 'paragraph', content: '👉 '}, 
        { type: 'link', content: 'jane.design/doctorcare', href: '#' }
      ],
      [
        { type: 'link', content: '#novoprojeto', href: '#' },
        { type: 'paragraph', content: ' '},
        { type: 'link', content: '#nlw', href: '#' },
        { type: 'paragraph', content: ' '},
        { type: 'link', content: '#rocketseat', href: '#' },
      ]  
    ]
  },
];

function App() {
  return (
    <>
      <Header/>
      <div className={styles.wrapper}>
        <Sidebar/>
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
  );
}

export default App;
