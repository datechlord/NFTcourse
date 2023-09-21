import styles from '../styles/Home.module.css';
import Link from 'next/link';

export default function Navbar() {
     return(
        <div className={styles.navbar}>
         <Link href="/">
            <p className={styles.gradient1} 
            style={{
                cursor: 'pointer', 
                fontSize: '1.2 rem',
                fontWeight:'bold'
                }}>
                    Tagen's Portfolio
                    </p>
         </Link>
        </div>
     )
};