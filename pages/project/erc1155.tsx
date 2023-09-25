import { Web3Button, useContract, useContractMetadata, useTotalCount } from '@thirdweb-dev/react';
import HeroCard from '../../components/hero-card';
import styles from '../../styles/Home.module.css';
import { ERC1155_CONTRACT_ADDRESS } from '../../constant/address';


export default function ERC1155Project() {
    const {
        contract
    } = useContract(ERC1155_CONTRACT_ADDRESS, "edition-drop")

    const {
        data: contractMetadata,
        isLoading: contractMetadataIsLoading,
    } = useContractMetadata(contract);

    const{
        data: contractNFTSupply,
        isLoading: contractNFTSupplyisLoading,
    } = useTotalCount(contract);



    return(
        <div className={styles.container}>
            <div className={styles.ContractPage}>
              <HeroCard
                isLoading={contractMetadataIsLoading}
                title={contractMetadata?.name!}
                description={contractMetadata?.description!}
                image={contractMetadata?.image!}
              />
              <div className={styles.grid}>

              <div className={styles.componentCard}>
                <h3>Claim ERC1155</h3>
                <p>Claim an ERC1155 NFT for 10 ERC20 tokens</p>
                <Web3Button
                 contractAddress={ERC1155_CONTRACT_ADDRESS}
                 action={(contract) => contract.erc1155.claim(0,1)}
                >Claim NFT</Web3Button>
                </div>

                <div className={styles.componentCard}>
                <h3>Contracts Stats</h3>
                 <p>Total NFTs
                    {contractNFTSupplyisLoading ? "Loading" : `${contractNFTSupply?.toNumber()}`}
                 </p>
                </div>

                <div className={styles.componentCard}>
                <h3>Your NFTs</h3>
                </div>

              </div>
            </div>
        </div>
    )


}