import { Web3Button, useClaimedNFTSupply, useContract, useContractMetadata, useTotalCount } from '@thirdweb-dev/react';
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

    const {
        data: totalSupply,
        isLoading: totalSupplyisLoading,
    } = useTotalCount (contract);

    const {
        data: totalClaimedSupply,
        isLoading: totalClaimedSupplyisLoading,
    } = useClaimedNFTSupply (contract);


    return (
     <div className={styles.container}>
        <div className={styles.contractPage}>
        <HeroCard
                 isLoading={contractMetadataisLoading}
                 title={contractMetadata?.name!}
                 description={contractMetadata?.description!}
                 image={contractMetadata?.image!} 
             />
             <div className={styles.grid}>
                <div className={styles.componentCard}>
                 <p>Claim ERC721</p>
                 <p>Claim an ERC721 NFT for FREE!</p>
                 <Web3Button
                     contractAddress={ERC721_CONTRACT_ADDRESS}
                     action={(contract) => contract.erc721.claim(1)}
                     onSuccess={() => alert("NFT Claimed")}
                 >Claim NFT</Web3Button>
                </div>

                <div className={styles.componentCard}>
                <p>Contract Stats</p>
                  <p>Total Supply:
                     {totalSupplyisLoading ? (
                        "Loading...."
                     ):(
                        ` ${totalSupply?.toNumber()} `
                    )}
                  </p>
                  <p>Total Claimed:
                     {totalClaimedSupplyisLoading ? (
                        "Loading...."
                     ):(
                        ` ${totalClaimedSupply?.toNumber()} `
                    )}</p>
                </div>

               <div className={styles.componentCard}>
               <p>Your NFTs</p>
               </div>
             </div>
        </div>
     </div>
    )
}