'use client'; // Error components must be Client Components

import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div style={{
      height: '100vw',
      textAlign: 'center',
      display: 'flex',
      justifyContent: 'center',
      margin: 'auto',
      alignItems: 'center',
      flexDirection: 'column'
    }}>
      <h2>This is your custom error page!</h2>
      <button
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        Try again
      </button>
    </div>
  );
}