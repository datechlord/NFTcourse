import { Web3Button, useAddress, useContract, useContractMetadata, useOwnedNFTs, useTokenBalance, useTotalCirculatingSupply, useTotalCount } from '@thirdweb-dev/react';
import HeroCard from '../../components/hero-card';
import styles from '../../styles/Home.module.css';
import { ERC20_CONTRACT_ADDRESS, STAKING_CONTRACT_ADDRESS } from '../../constant/address';
import { useEffect, useState } from 'react';
import { BigNumber, ethers } from 'ethers';

export default function StakingProject() {
    const address = useAddress();
    const [claimableRewards, setClaimableRewards] = useState<BigNumber>();
     
    const {
        contract: stakingContract
    } = useContract(STAKING_CONTRACT_ADDRESS);

    const {
        contract: ERC20Contract
    } = useContract(ERC20_CONTRACT_ADDRESS);

    const {
        data: stakingContractMetadata,
        isLoading: stakingContractMetadataIsLoading,
    } = useContractMetadata(stakingContract);

    const {
       data: tokenBalance,
       isLoading: tokenBalanceIsLoading,
    } = useTokenBalance(ERC20Contract, address);

    useEffect (() => {
        if(!stakingContract || !address) return;

        async function getClaimableRewards() {
          const claimableRewards = await stakingContract?.call(
            "getStakeInfo",
            [address]
          );

          setClaimableRewards(claimableRewards[1]);
        };

        getClaimableRewards(); 
    }, [address, stakingContract]);
    
 
    return(
        <div className={styles.container}>
            <div className={styles.ContractPage}>
              <HeroCard
                isLoading={stakingContractMetadataIsLoading}
                title={stakingContractMetadata?.name!}
                description={stakingContractMetadata?.description!}
                image={stakingContractMetadata?.image!}
              />
              <div className={styles.grid}>

              <div className={styles.componentCard}>
                <h3>Rewards</h3>
                  {tokenBalanceIsLoading? (
                    <p>loading...</p>
                  ):(
                     <p>Balance: {tokenBalance?.displayValue} {tokenBalance?.symbol}</p>
                  )}

                  {claimableRewards && (
                       <p>Reward Balance: {ethers.utils.formatEther(claimableRewards!)} </p>
                  )}
                  <Web3Button
                  contractAddress={STAKING_CONTRACT_ADDRESS}
                  action={(contract) => contract.call("claimRewards")}
                  onSuccess={() =>{
                    alert("Rewards claimed!");
                    setClaimableRewards(ethers.constants.Zero);
                  }}
                  isDisabled={!claimableRewards || claimableRewards.isZero()} >
                   Claim Rewards
                  </Web3Button>
                </div>

                <div className={styles.componentCard}>
                <h3>Unstaked</h3>

                 </div>

                <div className={styles.componentCard}>
                <h3>Staked</h3>
               
                </div>

              </div>
            </div>
        </div>
    )


}