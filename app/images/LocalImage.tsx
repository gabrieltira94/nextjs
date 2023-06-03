import Image from "next/image";
import natureUnsplash from './philip-jahn-unsplash.jpg';

export default function LocalImage() {
  return <div>
    <h3>LocalImage.tsx component</h3>

    <hr />

    <Image
      src={natureUnsplash}
      alt="This is stored locally"
      width={400}
      height={550}
    />
  </div>;
}