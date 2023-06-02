
export default function Page(props: any) {
  console.log(props);

  return <div>
    <h2>We are in route-handlers Page</h2>

    <div>This is not related to /api/route.ts.</div>
    <div>To access that api, go to
      <a target="_blank" href='http://localhost:3000/route-handlers/api?id=451vsaga' style={{ color: 'blue' }}> http://localhost:3000/route-handlers/api?id=451vsaga</a>
    </div>
  </div>;
}