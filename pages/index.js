import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}></main>

      <footer className={styles.footer}>
        {/* <a href="#" target="_blank" rel="noopener noreferrer">
          <span className={styles.logo}>
            <Image src="/imgs/milogo.png" alt="Logo" width={72} height={16} />
          </span>
        </a> */}
      </footer>
    </div>
  );
}
