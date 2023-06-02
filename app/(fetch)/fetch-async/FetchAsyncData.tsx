export default async function FetchAsyncData({ promise }: { promise: Promise<any>; }) {
  const data = await promise;

  return <div>
    {data.entries.map((item: any, index: number) => <div key={index}>API: {item.API}; description: {item.Description} </div>)}
  </div>;
}