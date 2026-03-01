import { Link } from 'react-router-dom';

export function NotFoundPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-50 px-4 text-center dark:bg-gray-950">
      <div className="mb-6">
        {/* Large 404 text */}
        <h1 className="text-brand-500 text-8xl font-extrabold">404</h1>
        <p className="mt-4 text-2xl font-bold text-gray-900 dark:text-white">Page Not Found</p>
        <p className="mt-2 text-gray-500 dark:text-gray-400">
          The page you are looking for doesn't exist or has been moved.
        </p>
      </div>
      <Link
        to="/"
        className="bg-brand-500 hover:bg-brand-600 inline-flex items-center gap-2 rounded-lg px-5 py-3 text-sm font-medium text-white transition-colors"
      >
        Back to Home
      </Link>
    </div>
  );
}
