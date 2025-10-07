"use client";

import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100 text-gray-900">
      <div className="text-center px-6">
        <h1 className="text-5xl font-extrabold mb-4">🚀 Welcome to Next.js Sample App</h1>
        <p className="text-lg text-gray-700 mb-8 max-w-xl mx-auto">
          A simple full-stack application built with Next.js, TypeScript, and MongoDB. 
          Use the navigation below to explore features.
        </p>


        <footer className="mt-12 text-gray-500 text-sm">
          <p>Made with ❤️ using Next.js & TypeScript</p>
        </footer>
      </div>
    </main>
  );
}
