export default function Sidebar() {
  return (
    <aside className="w-64 min-h-screen bg-slate-900 text-white p-6">

      <h2 className="text-lg font-bold mb-8">
        Analytics
      </h2>


      <ul className="space-y-5">

        <li className="hover:text-blue-300 cursor-pointer">
          📊 Dashboard
        </li>

        <li className="hover:text-blue-300 cursor-pointer">
          📈 Analytics
        </li>

        <li className="hover:text-blue-300 cursor-pointer">
          📄 Reports
        </li>

        <li className="hover:text-blue-300 cursor-pointer">
          ⚙️ Settings
        </li>

      </ul>

    </aside>
  );
}