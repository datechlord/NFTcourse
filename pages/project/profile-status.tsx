import { useContract, useContractMetadata } from "@thirdweb-dev/react";
import HeroCard from "../../components/hero-card";
import { PROFILE_STATUS_CONTRACT_ADDRESS } from "../../constant/address";
import styles from "../../styles/Home.module.css";

export default function ProfileStatusProject() {
    const {
        contract
    } = useContract(PROFILE_STATUS_CONTRACT_ADDRESS);

    const {
        data: contractMetadata,
        isLoading: contractMetadataIsLoading,
    } = useContractMetadata(contract);
    
    return(
        <div className={styles.container}>
            <div className={styles.contractPage}>
             <HeroCard
               isLoading={contractMetadataIsLoading}
               title={contractMetadata?.name!}
               description={contractMetadata?.description!}
               image={contractMetadata?.image!}
             />
            </div> 
        </div>
    )

}