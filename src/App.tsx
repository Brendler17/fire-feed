import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { Post, PostType } from "./components/Post";

import styles from "./App.module.css";
import "./global.css";

interface Post extends PostType {
  id: number;
}

const posts: Post[] = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/Brendler17.png",
      name: "Gustavo Brendler",
      job: "Desenvolvedor Front-End"
    },
    publishedAt: new Date('2023-06-28 23:31:00'),
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
      name: "Diego Fernandes",
      job: "CTO @Rocketseat"
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
      name: "Mayk Brito",
      job: "Educador @Rocketseat"
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
                key={post.id}
                post={post}
              />
            )
          })}
        </main>
      </div>
    </>
  )
}