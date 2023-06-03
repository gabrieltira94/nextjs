import LocalImage from "./LocalImage";
import RemoteImage from "./RemoteImage";
import UnknownSizeImage from "./UnknownSizeImage";

export default function Page() {
  return <div style={{ padding: '2rem', width: '100%', height: '100%' }}>
    <h2>Images.tsx component</h2>

    <hr style={{ margin: '2rem 0' }} />

    <div style={{ display: 'flex', justifyContent: 'space-around', width: '100%' }}>
      <LocalImage />
      <RemoteImage />
    </div>

    <hr style={{ margin: '2rem 0' }} />

    <UnknownSizeImage />
  </div>;
}