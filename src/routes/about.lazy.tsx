import { createLazyFileRoute } from '@tanstack/react-router';

export const Route = createLazyFileRoute('/about')({
  component: About,
});

// eslint-disable-next-line react-refresh/only-export-components
function About() {
  return (
    <div className="pt-32 px-6 min-h-screen bg-black text-white flex flex-col items-center">
      <h1 className="text-4xl font-bold mb-8">About</h1>
      <p className="text-gray-400">About me section will go here.</p>
    </div>
  );
}
