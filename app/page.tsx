import TopBar from "./components/TopBar";
import Header from "./components/Header";
import Hero from "./components/Hero";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.wrapper}>
      <TopBar />
      <Header />
      <Hero />
    </div>
  );
}
