import { useState } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export default function CarbonChart() {
  const [typeFilter, setTypeFilter] = useState("All");
  const [statusFilter, setStatusFilter] = useState("Complete");

  const data = {
    labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13"],
    datasets: [
      {
        label: "Estimate",
        data: [549, 875, 617, 506, 36, 185, 191, 122, 550, 881, 539, 607, 528],
        backgroundColor: "#8B3A3A",
      },
      {
        label: "Complete",
        data: [278, 0, 0, 0, 0, 0, 0, 0, 0, 0, 269, 29, 0],
        backgroundColor: "#C18383",
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: false,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: "Embodied carbon intensity (kgCO₂e/m²)",
        },
        ticks: {
          stepSize: 200,
        },
        grid: {
          drawBorder: false,
        },
      },
      x: {
        grid: {
          display: false,
        },
      },
    },
  };

  return (
    <div className="p-10 bg-[#f6efed] min-h-screen text-[#6b3f3f] font-sans">
      <div className="flex flex-col md:flex-row justify-between items-start mb-6">
        <div className="space-x-2">
          <button onClick={() => setTypeFilter("Refurbishment")} className={`px-4 py-2 rounded-full border ${typeFilter === "Refurbishment" ? 'bg-[#6b3f3f] text-white' : 'border-[#6b3f3f]'}`}>Refurbishment</button>
          <button onClick={() => setTypeFilter("New build")} className={`px-4 py-2 rounded-full border ${typeFilter === "New build" ? 'bg-[#6b3f3f] text-white' : 'border-[#6b3f3f]'}`}>New build</button>
          <button onClick={() => setTypeFilter("All")} className={`px-4 py-2 rounded-full border ${typeFilter === "All" ? 'bg-[#6b3f3f] text-white' : 'border-[#6b3f3f]'}`}>All</button>
        </div>
        <div className="space-x-2 mt-4 md:mt-0">
          <button onClick={() => setStatusFilter("Complete")} className={`px-4 py-2 rounded-full border ${statusFilter === "Complete" ? 'bg-[#6b3f3f] text-white' : 'border-[#6b3f3f]'}`}>Complete</button>
          <button onClick={() => setStatusFilter("Estimate")} className={`px-4 py-2 rounded-full border ${statusFilter === "Estimate" ? 'bg-[#6b3f3f] text-white' : 'border-[#6b3f3f]'}`}>Estimate</button>
        </div>
      </div>

      <h1 className="text-5xl font-light mb-2 leading-tight text-right">EMBODIED<br/><span className="font-normal">CARBON</span><br/>EMISSIONS</h1>
      <p className="text-right mb-8 text-sm">Intensity measured by kgCO₂e/m²</p>

      <div className="mb-4 flex justify-end">
        <button className="text-sm underline flex items-center space-x-1">
          <span>Download the data</span>
          <span>⬇</span>
        </button>
      </div>

      <Bar data={data} options={options} />

      <div className="mt-6 border-t pt-2 text-xs">
        <p>Key</p>
        <p className="text-gray-600">- - - 500 kgCO₂e/m² - Embodied Carbon Target 2030</p>
        <p className="text-gray-600">──── 600 kgCO₂e/m² - Embodied Carbon Target 2025</p>
      </div>
    </div>
  );
}
