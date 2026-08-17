"use client";

import { useEffect, useState } from "react";

type KpiCardProps = {
  title: string;
  value: string;
  icon: string;
};

export default function KpiCard({
  title,
  value,
  icon,
}: KpiCardProps) {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, []);


  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm border hover:shadow-md transition">

      <div className="flex justify-between items-center">

        <div>

          <p className="text-sm text-slate-500">
            {title}
          </p>


          {loading ? (
            <div className="h-9 w-32 bg-slate-200 rounded mt-2 animate-pulse"></div>
          ) : (
            <h2 className="text-3xl font-bold mt-2 text-slate-900">
              {value}
            </h2>
          )}

        </div>


        <div className="text-4xl">
          {icon}
        </div>


      </div>

    </div>
  );
}