'use client';

import { useRouter } from 'next/navigation';

async function setCookie() {
  return fetch('http://localhost:3000/cookies/api');
}

async function deleteCookie() {
  return fetch('http://localhost:3000/cookies/api', { method: 'DELETE' });
}

export default function CookieButtons() {
  const router = useRouter();

  const handleSet = async () => {
    await setCookie();

    router.refresh();
  };

  const handleDelete = async () => {
    await deleteCookie();

    router.refresh();
  };

  return <div style={{ marginLeft: 20 }}>
    <button onClick={handleSet} style={{ marginRight: 20 }}>Set cookie</button>
    <button onClick={handleDelete}>Delete cookie</button>
  </div>;
}