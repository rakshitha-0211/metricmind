export default function Dashboard() {
  return (
    <main className="min-h-screen p-10">
      <h1 className="text-4xl font-bold">
        MetricMind Dashboard 🚀
      </h1>

      <div className="grid grid-cols-3 gap-6 mt-10">
        <div className="p-6 rounded-lg shadow bg-white">
          <h2 className="text-lg">Revenue</h2>
          <p className="text-3xl font-bold">₹0</p>
        </div>

        <div className="p-6 rounded-lg shadow bg-white">
          <h2 className="text-lg">Profit</h2>
          <p className="text-3xl font-bold">₹0</p>
        </div>

        <div className="p-6 rounded-lg shadow bg-white">
          <h2 className="text-lg">Margin</h2>
          <p className="text-3xl font-bold">0%</p>
        </div>
      </div>
    </main>
  );
}