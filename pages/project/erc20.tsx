import { useContract, useContractMetadata, useTokenSupply, useAddress, useTokenBalance, Web3Button } from '@thirdweb-dev/react';
import HeroCard from '../../components/hero-card';
import styles from '../../styles/Home.module.css';
import { ERC20_CONTRACT_ADDRESS } from '../../constant/address';
import Link from 'next/link';



export default function ERC20Project() {
    
    const address = useAddress();

    const {
        contract
    } = useContract(ERC20_CONTRACT_ADDRESS, "token");

    const {
        data: contractMetadata,
        isLoading: contractMetadataisLoading,
      } = useContractMetadata(contract);

      const {
         data: tokenBalance,
         isLoading:tokenBalanceisLoading,
      } = useTokenBalance(contract, address);
  
      const {
        data: tokenSupply,
        isLoading:tokenSupplyisLoading,
     } = useTokenSupply(contract)
 

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
                        {tokenSupplyisLoading ? (
                            <p>Loading Supply...</p>
                        ):(
                             <p>Total supply: {tokenSupply?.displayValue} {tokenSupply?.symbol}</p>
                        )}
                        </div>

                        <div className={styles.componentCard}>
                        <h3>Token Balance</h3> 
                        {tokenBalanceisLoading ? (
                            <p>Loading Balance...</p>
                        ):(
                             <p>Balance: {tokenBalance?.displayValue} {tokenBalance?.symbol}</p>
                        )}
                        <Web3Button 
                            contractAddress={ERC20_CONTRACT_ADDRESS}
                            action={(contract) => contract.erc20.burn(10)}
                        >Burn 10 Tokens</Web3Button>
                        </div>

                        <div className={styles.componentCard}>
                        <h3>Earn Tokens</h3> 
                        <p> Earn more tokens by staking an ERC721 NFT.</p>
                        <div>
                            <Link href='/project/staking'>
                                <button className={styles.generalBtn}>Stake ERC721</button>
                            </Link>
                            <Link href='/project/erc721'>
                                <button className={styles.generalBtn}>Claim ERC721</button>
                            </Link>
                        </div>
                        </div>
                </div>
             </div>
        </div>
      )

}