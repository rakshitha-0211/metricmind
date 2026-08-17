import ChatBox from "@/components/ChatBox";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-6">
        MetricMind Dashboard 🚀
      </h1>

      <ChatBox />
    </div>
  );
}