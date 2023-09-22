import { ConnectWallet } from "@thirdweb-dev/react";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <main className={styles.main}>
      <div className={styles.navbarContainer}>
        <div className={styles.header}>
          <h1 className={styles.title}>
            My{" "}
            <span className={styles.gradientText0}>
              <a
                href="https://thirdweb.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
               Contracts
              </a>
            </span>
          </h1>

          <p className={styles.description}>
           Select a contract to interact with.
          </p>
        </div>

        <div className={styles.grid}>
         
        </div>
      </div>
    </main>
  );
};

export default Home;
