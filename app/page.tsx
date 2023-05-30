import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h2>Home page</h2>

      <div>
        <p>Go to Goals page at #Example, by pressing
          <Link href='/goals#example' style={{ fontWeight: 800, color: 'green' }} scroll={false}> here</Link>
        </p>
      </div>
    </div>
  );
}
