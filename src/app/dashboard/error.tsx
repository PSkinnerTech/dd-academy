'use client';

import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    console.log('Inside useEffect');
    console.error(error);
  }, [error]);
  return (
    <div className="div">
      <div>Something went wrong</div>
      <button onClick={() => reset()}>Try Again</button>
    </div>
  );
}
