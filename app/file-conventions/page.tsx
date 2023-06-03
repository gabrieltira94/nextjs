import Link from "next/link";

export default function Page() {
  return <div>
    <h2>FileConvention.tsx component</h2>

    <div>
      <h3>Go to <Link href='/file-conventions/error' style={{ color: 'black' }}>Error</Link> page</h3>
    </div>

    <div>
      <h3>Go to <Link href='/file-conventions/not-found' style={{ color: 'black' }}>Non-existing</Link> page</h3>
    </div>

    <div>
      <h3>Go to <Link href='/file-conventions/not-found' style={{ color: 'black' }}>Non-existing</Link> page</h3>
    </div>
  </div>;
}