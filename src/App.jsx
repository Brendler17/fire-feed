import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { Post } from "./components/Post";

import styles from "./App.module.css";
import "./global.css";

export function App() {
  return (
    <>
      <Header />
      <div className={styles.appContainer}>
        <Sidebar />
        <main>
          <Post
            author="Gustavo Brendler"
            content="Primeiro Post"
          />
        </main>
      </div>
    </>
  )
}
