import { createLazyFileRoute } from '@tanstack/react-router';

export const Route = createLazyFileRoute('/skills')({
  component: Skills,
});

// eslint-disable-next-line react-refresh/only-export-components
function Skills() {
  return (
    <div className="pt-32 px-6 min-h-screen bg-black text-white flex flex-col items-center">
      <h1 className="text-4xl font-bold mb-8">Skills</h1>
      <p className="text-gray-400">Skills list will go here.</p>
    </div>
  );
}
