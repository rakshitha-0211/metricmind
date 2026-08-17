"use client";

import { useState } from "react";

export default function DashboardFilters() {

  const [region, setRegion] = useState("All Regions");
  const [category, setCategory] = useState("All Categories");
  const [period, setPeriod] = useState("Last 30 Days");

  return (
    <div className="bg-white p-6 rounded-xl shadow mt-10">

      <h2 className="text-xl font-bold mb-4">
        Dashboard Filters
      </h2>

      <div className="grid grid-cols-3 gap-4">

        <select
          className="border p-3 rounded-lg"
          value={region}
          onChange={(e) => setRegion(e.target.value)}
        >
          <option>All Regions</option>
          <option>Asia</option>
          <option>Europe</option>
          <option>America</option>
        </select>


        <select
          className="border p-3 rounded-lg"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option>All Categories</option>
          <option>Electronics</option>
          <option>Software</option>
          <option>Infrastructure</option>
        </select>


        <select
          className="border p-3 rounded-lg"
          value={period}
          onChange={(e) => setPeriod(e.target.value)}
        >
          <option>Last 30 Days</option>
          <option>Last 3 Months</option>
          <option>Last Year</option>
        </select>

      </div>

    </div>
  );
}