import Image from "next/image";
import natureUnsplash from './philip-jahn-unsplash.jpg';

export default function UnknownSizeImage() {
  return <div style={{ height: 500, width: 800, justifyItems: 'center' }}>

    <h2>UnknownSizeImage.tsx component</h2>
    <p style={{ margin: '1rem 0' }}>Note that {"<Image />"} component should be wrapped by a parent with position: relative' and display: 'block' </p>

    <div style={{ position: 'relative', height: 300, width: 250 }}>
      <Image
        src={natureUnsplash}
        alt='Bound to parent size'
        fill
      />;
    </div>
  </div>;
}
