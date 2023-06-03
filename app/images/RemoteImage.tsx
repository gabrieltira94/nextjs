import Image from "next/image";

export default function RemoteImage() {
  return <div>
    <h3>RemoteImage.tsx component</h3>

    <hr />

    <Image
      src="https://images.unsplash.com/photo-1685689238460-fdd76e602962?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
      alt="Picture of the author"
      width={500}
      height={700}
    />
  </div>;
}