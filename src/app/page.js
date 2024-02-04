import Image from "next/image";
import styles from "./page.module.scss";
import Hero from "./components/Hero";


export default function Home() {
  return (
    <div className={styles.wrapper}>
      <Hero></Hero>
    </div>
  );
}
