"use client";

import { useState } from "react";

export default function GovernancePanel() {

  const [showSQL, setShowSQL] = useState(false);
  const [showAPI, setShowAPI] = useState(false);

  return (
    <div className="bg-white p-6 rounded-xl shadow mt-10">

      <h2 className="text-xl font-bold">
        ⚙️ Transparency & Governance
      </h2>


      <div className="flex gap-4 mt-5">

        <button
          onClick={() => setShowSQL(!showSQL)}
          className="bg-black text-white px-5 py-3 rounded-lg"
        >
          View SQL
        </button>


        <button
          onClick={() => setShowAPI(!showAPI)}
          className="bg-gray-700 text-white px-5 py-3 rounded-lg"
        >
          View API Call
        </button>

      </div>


      {showSQL && (
        <div className="mt-5 bg-gray-100 p-4 rounded-lg">
          <h3 className="font-bold">
            Generated SQL:
          </h3>

          <code>
            SELECT SUM(revenue)
            FROM sales
            WHERE region = 'Asia';
          </code>
        </div>
      )}


      {showAPI && (
        <div className="mt-5 bg-gray-100 p-4 rounded-lg">
          <h3 className="font-bold">
            API Request:
          </h3>

          <code>
            GET /api/metrics/revenue?region=Asia
          </code>
        </div>
      )}

    </div>
  );
}