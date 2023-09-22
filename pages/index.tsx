import { ConnectWallet } from "@thirdweb-dev/react";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import { NextPage } from "next";
import ContractCard from "../components/contract-card";
import { ERC20_CONTRACT_ADDRESS } from "../constant/address";

const Home: NextPage = () => {
  return (
    <main className={styles.main}>
      <div className={styles.navbarContainer}>
        <div className={styles.header}>
          <h1 className={styles.title}>
            My{" "}
            <span className={styles.gradientText0}>
               Contracts
            </span>
          </h1>

          <p className={styles.description}>
           Select a contract to interact with.
          </p>
        </div>

        <div className={styles.grid}>
         <ContractCard
         href="/"
         contractAddress={ERC20_CONTRACT_ADDRESS}
         title="ERC20 →"
         description="Claim ERC20 Tokens"
         />
        </div>
      </div>
    </main>
  );
};

export default Home;
