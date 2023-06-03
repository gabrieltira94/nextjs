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

      <div style={{ display: 'flex', justifyContent: 'space-around', margin: '2rem 0', padding: '1rem' }}>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <h3>Routing</h3>
          <Link href='/route-handlers'>Route handlers</Link>
          <Link href='/error-handling'>Error handling</Link>
          <Link href='/parallel-routes'>Parallel routes</Link>
        </div>


        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <h3>Data-fetching</h3>
          <Link href='/fetch-async'>Fetch Async</Link>
          <Link href='/fetch-await'>Fetch Await</Link>
          <Link href='/fetch-parallel'>Fetch Parallel</Link>
        </div>


        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <h3>Styling</h3>
          <p>See Navbar.tsx component</p>
        </div>


        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <h3>Optimizing</h3>
          <Link href='/images'>Images</Link>
          <Link href='/lazy-loading'>Lazy-loading</Link>
        </div>


      </div>
    </div>
  );
}
