"use client";

import { useState } from "react";

export default function AskMetricMind() {

  const [question, setQuestion] = useState("");
  const [messages, setMessages] = useState([
    {
      role: "ai",
      text: "Hello! I am MetricMind AI. Ask me about revenue, profit, or sales trends."
    }
  ]);


  function askQuestion() {

    if (!question.trim()) return;


    setMessages([
      ...messages,
      {
        role: "user",
        text: question
      },
      {
        role: "ai",
        text: "Revenue increased because Electronics and Software categories performed better this period."
      }
    ]);


    setQuestion("");

  }


  return (
    <div className="bg-white p-6 rounded-xl shadow mt-10">

      <h2 className="text-xl font-bold">
        💬 Ask MetricMind AI
      </h2>


      <div className="mt-5 space-y-3">

        {messages.map((msg, index) => (
          <div
            key={index}
            className={
              msg.role === "user"
                ? "bg-slate-900 text-white p-3 rounded-lg ml-10"
                : "bg-slate-100 p-3 rounded-lg mr-10"
            }
          >
            {msg.text}
          </div>
        ))}

      </div>


      <div className="flex gap-3 mt-5">

        <input
          className="border p-3 rounded-lg flex-1"
          placeholder="Ask about your business..."
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
        />


        <button
          onClick={askQuestion}
          className="bg-slate-900 text-white px-6 rounded-lg"
        >
          Ask
        </button>

      </div>


    </div>
  );
}