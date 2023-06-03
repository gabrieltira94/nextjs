import { cookies } from "next/dist/client/components/headers";
import SetCookieButton from "./CookieButtons";

export default async function Page() {
  const cookieStore = cookies();
  const settledGoal = cookieStore.get('goal');

  return <div>
    <h2>Cookie.tsx component</h2>

    <div>This comes from cookies: {settledGoal ? settledGoal.value : 'Hmm, nothing set. Press the button'}.</div>
    <SetCookieButton />

  </div>;
}