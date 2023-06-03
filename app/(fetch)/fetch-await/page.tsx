async function getData() {
  const res = await fetch('http://localhost:3000/route-handlers/api');
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

export default async function Page() {
  const data = await getData();

  return <div>
    <h2 style={{ marginBottom: '2rem' }}>Inside Fetch-await Page</h2>

    {data ?
      <>
        {data.entries.map((item: any, index: number) => <div key={index}>API: {item.API}; description: {item.Description} </div>)}
      </>
      :
      <p>No data yet</p>
    }
  </div>;
}