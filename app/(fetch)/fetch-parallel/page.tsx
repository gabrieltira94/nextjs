async function getData() {
  const res = await fetch('http://localhost:3000/route-handlers/api');
  return res.json();
}

async function getScienceData() {
  const res = await fetch('https://api.publicapis.org/entries?category=science');

  return res.json();
}

export default async function Page() {
  const allData = getData();
  const scienceCategoryData = getScienceData();

  const [data, scienceCategory] = await Promise.all([allData, scienceCategoryData]);

  return <div>
    <h2 style={{ marginBottom: '2rem' }}>Inside Fetch-await Page</h2>

    <>
      <h3>Data entries</h3>
      {data.entries.slice(0, 15).map((item: any, index: number) => <div key={index}>API: {item.API}; description: {item.Description} </div>)}
    </>
    <hr />

    <>
      <h3>Science category entries</h3>
      {scienceCategory.entries.map((item: any, index: number) => <div key={index}>API: {item.API}; description: {item.Description} </div>)}
    </>
  </div>;
}