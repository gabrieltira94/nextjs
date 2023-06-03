'use client';

const FirstGoal = dynamic(() => import('./components/FirstGoal'));
const SecondGoal = dynamic(() => import('./components/SecondGoal'), { loading: () => <div>Loading SecondGoal.tsx module</div> });
const ThirdGoal = dynamic(() => import('./components/ThirdGoal'));

import dynamic from "next/dynamic";
import { useState } from "react";

export default function Page() {
  const [showSecondGoal, setShowSecondGoal] = useState<boolean>(false);

  return <div>
    <FirstGoal />

    {showSecondGoal && <SecondGoal />}
    <p>If you look into <em>Source/_next/static/chunks</em> before clicking this button, you can see that SecondGoal component is not loaded.</p>
    <button onClick={() => setShowSecondGoal(!showSecondGoal)}>Show SecondGoal</button>

    <ThirdGoal />
  </div>;

}