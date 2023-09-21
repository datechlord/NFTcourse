import styles from '../styles/Home.module.css';
import Link from 'next/link';
import { ConnectWallet } from '@thirdweb-dev/react';

export default function Navbar() {
  return (
    <div className={styles.navbar}>
      <Link href="/">
        <p
          className={styles.gradient1}
          style={{
            cursor: 'pointer',
            fontSize: '1.2rem',
            fontWeight: 'bold',
          }}
        >
          Tagen&apos;s Portfolio {/* Escaped the single quotation mark here */}
        </p>
      </Link>
      <ConnectWallet 
      btnTitle='Sign In'
      modalTitle='Select sign in method'
      />
    </div>
  );
}
