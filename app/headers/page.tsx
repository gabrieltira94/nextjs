import { headers } from 'next/headers';

export default function Page() {
  const headersList = headers();
  const referer = headersList.get('referer');

  const renderHeadersList = () => {
    const nodes: React.ReactNode[] = [];

    headersList.forEach((value, key, parent) => nodes.push(
      <div key={key} style={{ marginBottom: '1rem' }}>
        <div>Key: {key}</div>
        <div>Value: {value}</div>
      </div>
    ));

    return nodes.map(node => node);
  };

  return <div>
    <h2>Headers.tsx components</h2>

    <div>Referer: {referer}</div>

    <hr />

    <p>Below is a list with all available headers</p>
    <div style={{ marginTop: '2rem' }}>
      {renderHeadersList()}
    </div>
  </div>;
}
