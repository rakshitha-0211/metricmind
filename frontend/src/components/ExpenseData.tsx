"use client";

import { useEffect, useState } from "react";
import { getExpenses } from "@/lib/api";

export default function ExpenseData() {

  const [expenses, setExpenses] = useState([]);

  useEffect(() => {

    getExpenses()
      .then((data) => {
        setExpenses(data);
      })
      .catch((error) => {
        console.log(error);
      });

  }, []);


  return (
    <div className="bg-white p-6 rounded-xl shadow mt-10">

      <h2 className="text-xl font-bold">
        Live Data From Backend
      </h2>

      <p className="mt-4">
        Total Records: {expenses.length}
      </p>

    </div>
  );
}