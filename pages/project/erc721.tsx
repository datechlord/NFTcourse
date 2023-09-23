import { useContract, useContractMetadata } from '@thirdweb-dev/react';
import HeroCard from '../../components/hero-card';
import styles from '../../styles/Home.module.css';
import { ERC721_CONTRACT_ADDRESS } from '../../constant/address';

export default function ERC721Project () {

    const {
        contract
    } = useContract (ERC721_CONTRACT_ADDRESS, "signature-drop");

    const {
        data: contractMetadata,
        isLoading: contractMetadataisLoading,
    } = useContractMetadata(contract);

    return (
     <div className={styles.container}>
        <div className={styles.contractPage}>
        <HeroCard
                 isLoading={contractMetadataisLoading}
                 title={contractMetadata?.name!}
                 description={contractMetadata?.description!}
                 image={contractMetadata?.image!} 
             />
        </div>
     </div>
    )
}