import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { Post } from "./components/Post";

import styles from "./App.module.css";
import "./global.css";

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/Brendler17.png",
      name: "Gustavo Brendler",
      job: "Desenvolvedor Front-End"
    },
    publishedAt: new Date('2023-06-20 20:00:00'),
    content: [
      { type: "paragraph", content: "Fala pessoal!" },
      { type: "paragraph", content: "Acabei de subir mais um projeto no meu github." },
      { type: "paragraph", content: "É o primeiro projeto do Ignite, treinamento da Rocketseat. O nome do projeto é Fire Feed! 🔥" },
      { type: "link", content: "github.com/Brendler17/fire-feed" },
    ]
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/diego3g.png",
      name: "Renatinho Sampoerna",
      job: "Desenvolvedor Back-End"
    },
    publishedAt: new Date('2023-06-24 20:00:00'),
    content: [
      { type: "paragraph", content: "Fala pessoal!" },
      { type: "paragraph", content: "Acabei de subir mais um projeto no meu github." },
      { type: "paragraph", content: "É o primeiro projeto do Ignite, treinamento da Rocketseat. O nome do projeto é Fire Feed! 🔥" },
      { type: "link", content: "github.com/Brendler17/fire-feed" },
    ]
  },
  {
    id: 3,
    author: {
      avatarUrl: "https://github.com/maykbrito.png",
      name: "Julho Agostos",
      job: "Desenvolvedor Full-Stack"
    },
    publishedAt: new Date('2023-06-25 20:00:00'),
    content: [
      { type: "paragraph", content: "Fala pessoal!" },
      { type: "paragraph", content: "Acabei de subir mais um projeto no meu github." },
      { type: "paragraph", content: "É o primeiro projeto do Ignite, treinamento da Rocketseat. O nome do projeto é Fire Feed! 🔥" },
      { type: "link", content: "github.com/Brendler17/fire-feed" },
    ]
  }
];

export function App() {
  return (
    <>
      <Header />
      <div className={styles.appContainer}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Post 
                author={post.author}
                publishedAt={post.publishedAt}
                content={post.content}
              />
            )
          })}
        </main>
      </div>
    </>
  )
}