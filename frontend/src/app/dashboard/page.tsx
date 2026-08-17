import { dashboardMetrics } from "@/data/metrics";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import KpiCard from "@/components/KpiCard";
import SalesChart from "@/components/SalesChart";
import AIInsight from "@/components/AIInsight";
import AskMetricMind from "@/components/AskMetricMind";
import MetricReasoning from "@/components/MetricReasoning";
import GovernancePanel from "@/components/GovernancePanel";


export default function Dashboard() {
  return (
    <div>

      <Navbar />

      <div className="flex">

        <Sidebar />

        <main className="p-8 flex-1 bg-slate-50 min-h-screen">

          <div className="mb-8">

            <h1 className="text-4xl font-bold text-slate-900">
              MetricMind Dashboard 🚀
            </h1>

            <p className="mt-2 text-slate-600">
              AI-powered Business Intelligence Platform
            </p>

          </div>


          <div className="grid grid-cols-3 gap-6">

            <KpiCard
  title="Total Revenue"
  value={`₹${dashboardMetrics.revenue.value.toLocaleString()}`}
  icon="💰"
/>


<KpiCard
  title="Total Profit"
  value={`₹${dashboardMetrics.profit.value.toLocaleString()}`}
  icon="📈"
/>


<KpiCard
  title="Profit Margin"
  value={`${dashboardMetrics.margin.value}%`}
  icon="🎯"
/>

          </div>


          <SalesChart />

          <AIInsight />

          <AskMetricMind />

          <MetricReasoning />

          <GovernancePanel />


        </main>

      </div>

    </div>
  );
}