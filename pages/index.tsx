import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { useEffect, useState } from "react";
import { Links } from "../components/Links";

const Home: NextPage = () => {
  const [joke, setJoke] = useState({ value: "" });

  useEffect(() => {
    (async () => {
      const res = await fetch("https://api.chucknorris.io/jokes/random");
      setJoke(await res.json());
    })();
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>{joke?.value}</h1>

        <img src="/spa.png" width="70%" alt="" />
      </main>

      <footer className={styles.footer}>
        <Links />
      </footer>
    </div>
  );
};

export default Home;
