import { useContract, useContractMetadata } from '@thirdweb-dev/react';
import HeroCard from '../../components/hero-card';
import styles from '../../styles/Home.module.css';
import { ERC20_CONTRACT_ADDRESS } from '../../constant/address';



export default function ERC20Project() {
    const {
        contract
    } = useContract(ERC20_CONTRACT_ADDRESS, "token");

    const {
        data: contractMetadata,
        isLoading: contractMetadataisLoading,
      } = useContractMetadata(contract);

      return(
        <div className={styles.container}>
             <HeroCard
                 isLoading={contractMetadataisLoading}
                 title={contractMetadata?.name!}
                 description={contractMetadata?.description!}
                 image={contractMetadata?.image!} 
             />
             <div>
                <div className={styles.grid}>
                    <div className={styles.componentCard}>
                        <h3>Token Stats</h3> 
                        </div>

                        <div className={styles.componentCard}>
                        <h3>Token Balance</h3> 
                        </div>

                        <div className={styles.componentCard}>
                        <h3>Earn Tokens Balance</h3> 
                        </div>
                </div>
             </div>
        </div>
      )

}