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
    <div className="p-4 sm:p-8 bg-[#f6efed] min-h-screen text-[#6b3f3f] font-sans">
    
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-6">
        <div className="flex flex-wrap gap-2">
          {["Refurbishment", "New build", "All"].map((label) => (
            <button
              key={label}
              onClick={() => setTypeFilter(label)}
              className={`px-4 py-2 rounded-full border ${
                typeFilter === label
                  ? "bg-[#6b3f3f] text-white"
                  : "border-[#6b3f3f] text-[#6b3f3f]"
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        <div className="flex flex-wrap gap-2">
          {["Complete", "Estimate"].map((label) => (
            <button
              key={label}
              onClick={() => setStatusFilter(label)}
              className={`px-4 py-2 rounded-full border ${
                statusFilter === label
                  ? "bg-[#6b3f3f] text-white"
                  : "border-[#6b3f3f] text-[#6b3f3f]"
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      <div className="text-center sm:text-right">
        <h1 className="text-3xl sm:text-5xl font-light mb-2 leading-tight">
          EMBODIED<br />
          <span className="font-normal">CARBON</span><br />
          EMISSIONS
        </h1>
        <p className="text-sm mb-4">Intensity measured by kgCO₂e/m²</p>
      </div>

      <div className="flex justify-center sm:justify-end mb-4">
        <button className="text-sm underline flex items-center space-x-1">
          <span>Download the data</span>
          <span>⬇</span>
        </button>
      </div>

      <div className="overflow-x-auto">
        <div className="min-w-[600px]">
          <Bar data={data} options={options} />
        </div>
      </div>
      <div className="mt-6 border-t pt-4 text-xs">
        <p className="mb-1">Key</p>
        <p className="text-gray-600">
          - - - 500 kgCO₂e/m² - Embodied Carbon Target 2030
        </p>
        <p className="text-gray-600">
          ──── 600 kgCO₂e/m² - Embodied Carbon Target 2025
        </p>
      </div>
    </div>
  );
}
