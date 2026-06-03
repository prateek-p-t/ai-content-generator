import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-5xl font-bold mb-4">
        AI Content Generator
      </h1>

      <p className="text-gray-500 mb-8">
        Generate AI-powered content instantly
      </p>

      <div className="flex gap-4">
        <Link
          href="/login"
          className="px-6 py-3 bg-black text-white rounded-lg"
        >
          Login
        </Link>

        <Link
          href="/register"
          className="px-6 py-3 border rounded-lg"
        >
          Register
        </Link>
      </div>
    </main>
  );
}
