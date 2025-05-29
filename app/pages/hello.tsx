// app/pages/hello.tsx
import { useEffect, useState } from "react";

export default function HelloPage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setMounted(true), 30);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <main className="flex min-h-screen w-full items-center justify-center bg-gray-100 px-4">
      <section
        className={`w-full max-w-xl rounded-2xl bg-white shadow-md border border-gray-200 p-8 transition-all duration-1000 ease-out transform ${
          mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
      >
        <header className="mb-6">
          <h1 className="text-3xl font-semibold text-green-700 mb-2">
            👋 Hello!
          </h1>
          <p className="text-gray-600">
            Please follow the instructions below and try to complete them
            in&nbsp;
            <strong>10 minutes</strong>.
          </p>
        </header>

        <ol className="space-y-4 list-decimal pl-5 text-gray-700">
          <li>
            Create a new page at&nbsp;
            <code className="bg-gray-100 px-1 py-0.5 rounded text-sm text-green-700">
              /login
            </code>
          </li>
          <li>
            Create a login form using&nbsp;
            <strong className="font-semibold text-green-700">
              react-hook-form
            </strong>
            &nbsp;with&nbsp;
            <em>username</em> and <em>password</em> fields.
          </li>
          <li>
            Throw in some validation, using&nbsp;
            <span className="font-semibold text-green-700">Zod</span>
          </li>
          <li>
            On submit, send a&nbsp;
            <code className="bg-gray-100 px-1 py-0.5 rounded text-sm text-green-700">
              POST
            </code>
            &nbsp;request to&nbsp;
            <code className="bg-gray-100 px-1 py-0.5 rounded text-sm text-green-700">
              https://api.test.com/login
            </code>
            &nbsp; using&nbsp;
            <span className="font-semibold text-green-700">RTK Query</span> (or
            fetch/axios).
          </li>
          <li>
            While working on it, please try to explain what you're doing or
            planning to do.&nbsp;
            <span className="font-semibold text-green-700">
              There is no right or wrong
            </span>
            &nbsp; way to do it, but we would like to see your thought process.
          </li>
          <li>
            We greatly appreciate communication, so please&nbsp;
            <strong className="text-green-700">ask questions</strong> if
            something is unclear. Good luck!
          </li>
        </ol>
      </section>
    </main>
  );
}
