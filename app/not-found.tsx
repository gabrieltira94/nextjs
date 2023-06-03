import Link from "next/link";

export default function NotFound() {
  return <div>
    <p>Ops! This route does not exist!</p>
    <div>Wanna go back to main <Link href='/file-conventions'>file-conventions</Link> page?</div>
  </div>;
}