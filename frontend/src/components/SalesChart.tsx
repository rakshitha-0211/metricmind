"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import { salesData } from "@/data/metrics";


export default function SalesChart() {

  return (

    <div className="bg-white p-6 rounded-xl shadow mt-10">

      <h2 className="text-xl font-bold mb-5">
        📈 Revenue Trend
      </h2>


      <ResponsiveContainer width="100%" height={300}>

        <LineChart data={salesData}>

          <CartesianGrid strokeDasharray="3 3" />

          <XAxis dataKey="month" />

          <YAxis />

          <Tooltip />


          <Line
            type="monotone"
            dataKey="revenue"
            stroke="#2563eb"
            strokeWidth={3}
          />


          <Line
            type="monotone"
            dataKey="profit"
            stroke="#16a34a"
            strokeWidth={3}
          />

        </LineChart>

      </ResponsiveContainer>


    </div>

  );
}