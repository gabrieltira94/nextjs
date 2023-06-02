import Link from "next/link";

export default function Navbar() {
  return (
    <nav>
      <ul style={{ display: 'flex', justifyContent: 'space-evenly' }}>
        <Link href='/'>Home</Link>
        <Link href='/contact'>Contact</Link>
        <Link href='/goals'>Your goals</Link>
        <Link href='/route-handlers'>Route handlers</Link>
      </ul>
    </nav>
  );
} 