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
            fontSize: '1.2rem', // Remove the space here
            fontWeight: 'bold', // Remove the extra space here
          }}
        >
          Tagen's Portfolio
        </p>
      </Link>
      <ConnectWallet />
    </div>
  );
}
