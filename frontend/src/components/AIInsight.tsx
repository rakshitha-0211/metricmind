import { insights } from "@/data/metrics";

export default function AIInsight() {
  return (
    <div className="bg-white p-6 rounded-xl shadow mt-10">

      <h2 className="text-xl font-bold">
        🤖 AI Business Insight
      </h2>


      <div className="mt-5 space-y-3">

        {insights.map((insight, index) => (
          <div
            key={index}
            className="bg-gray-100 p-4 rounded-lg"
          >
            {insight}
          </div>
        ))}

      </div>

    </div>
  );
}