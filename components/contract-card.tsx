import Link from "next/link";
import styles from "../styles/Home.module.css"
import { useContext } from "react";

import { MediaRenderer, useContract, useContractMetadata } from "@thirdweb-dev/react";

type CardProps = {
    href:string;
    contractAddress:string;
    title:string;
    description:string;
};

export default function ContractCard(props: CardProps) {
    const {
        contract
    } = useContract(props.contractAddress);

     const {
        data: contractMetadata,
        isLoading: isContractMetadataLoading,
     } = useContractMetadata(contract);

    return (  
    <Link
        href={props.href}
        className={styles.card}
        >
            {!isContractMetadataLoading ? (
            <MediaRenderer
              src={contractMetadata?.image}
              width="100%"
              height="auto"
              />
              ) : (
                <p>Loading...</p>
            )} 

        <div className={styles.cardText}>
            <h2 className={styles.gradientText1}>{props.title}</h2>
            <p>{props.description}</p>
        </div>
    </Link>

    )

        
}

