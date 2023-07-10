import { Suspense } from 'react';
import { Todos } from '@/app/ui/todos';
import { Comments } from '@/app/ui/Comments';

export default function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>
      {/* Render the Todos */}
      <Suspense fallback={<p>... Loading</p>}>
        <Todos />
      </Suspense>
      {/* Render the Users */}
      <Suspense fallback={<p>... Loading</p>}>
        <Comments />
      </Suspense>
      {/* Render the Posts */}
    </div>
  );
}
