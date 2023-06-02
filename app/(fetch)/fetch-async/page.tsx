import { Suspense } from "react";
import FetchAsyncData from "./FetchAsyncData";

async function getData() {
  const res = await fetch('http://localhost:3000/route-handlers/api');

  // Recommendation: handle errors
  if (!res.ok)
    throw new Error('Failed to fetch data');     // This will activate the closest `error.js` Error Boundary

  return res.json();
}

export default async function Page() {
  const data = getData();

  return <div>
    <h2 style={{ marginBottom: '2rem' }}>Inside Fetch-async Page</h2>

    <Suspense fallback={<div>We are waiting for data..</div>}>
      {/* @ts-expect-error Async Server Component */}
      <FetchAsyncData promise={data} />
    </Suspense>
  </div>;
}