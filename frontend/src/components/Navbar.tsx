"use client";

import { useTheme } from "next-themes";

export default function Navbar() {

  const { setTheme, theme } = useTheme();

  return (
    <nav className="h-16 bg-white border-b flex items-center justify-between px-8">

      <h1 className="text-xl font-bold text-slate-900">
        MetricMind
      </h1>


      <div className="flex items-center gap-6">

        <button
          onClick={() =>
            setTheme(theme === "dark" ? "light" : "dark")
          }
          className="px-3 py-2 rounded-lg border"
        >
          🌙
        </button>


        <button className="text-xl">
          🔔
        </button>


        <div className="flex items-center gap-3">

          <div className="w-10 h-10 rounded-full bg-slate-900 text-white flex items-center justify-center">
            R
          </div>


          <div>
            <p className="font-semibold">
              Admin
            </p>

            <p className="text-sm text-gray-500">
              Business Analyst
            </p>
          </div>

        </div>

      </div>

    </nav>
  );
}