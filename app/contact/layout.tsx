import { PropsWithChildren } from "react";

export default function ContactLayout(props: PropsWithChildren) {
  const { children } = props;

  return (
    <div style={{ backgroundColor: 'orange', border: '1px dashed blue', padding: 10, margin: 10 }}>
      <p>I am layout of Contact</p>
      {children}
    </div>
  );
}