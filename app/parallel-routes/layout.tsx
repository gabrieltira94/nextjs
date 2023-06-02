import { ReactNode } from "react";

export default function Layout(props: {
  monthly: ReactNode,
  weekly: ReactNode,
  children: ReactNode,
}) {
  const { children, monthly, weekly } = props;

  // We have 2 Pages on the same routes, thus we can render either of them based on some conditions

  return <div>
    {children}
    {monthly}
    {weekly}
  </div>;
}