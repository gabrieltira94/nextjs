import Link from "next/link";
import styles from './styles.module.css';

export default function Navbar() {
  return (
    <nav>
      <ul style={{ display: 'flex', justifyContent: 'space-evenly' }}>
        <Link href='/'>Home</Link>
        <Link href='/contact'>Contact</Link>
        <Link href='/goals'>Your goals</Link>
        <div className={styles.dropdown}>
          <button className={styles.dropbtn}>Dropdown</button>
          <div className={styles['dropdown-content']}>
            <Link href='/route-handlers'>Route handlers</Link>
            <Link href='/fetch'>Fetch</Link>
          </div>
        </div>
      </ul>
    </nav>
  );
} 