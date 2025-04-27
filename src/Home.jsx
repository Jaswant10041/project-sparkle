import React, { useContext, useState } from "react";
import ReportForm from "./ReportForm";
import DisplayCards from "./DisplayCards";
import { GlobalState } from "./GloblalContext";

const Home = () => {
  const { data } = useContext(GlobalState);

  const [showForm, setShowForm] = useState(false);
  const [filterSeverity, setFilterSeverity] = useState("All");
  const [sortOrder, setSortOrder] = useState("Newest");

  const filterAndSortData = () => {
    let filteredData = [...data];

    if (filterSeverity !== "All") {
      filteredData = filteredData.filter((item) => item.severity === filterSeverity);
    }

    filteredData.sort((a, b) => {
      const dateA = new Date(a.reported_at);
      const dateB = new Date(b.reported_at);
      return sortOrder === "Newest" ? dateB - dateA : dateA - dateB;
    });

    return filteredData;
  };

  return (
    <div>
      {/* Top Controls */}
      <div className="flex flex-wrap gap-4 mb-4 fixed w-full justify-center bg-gray-200 p-5">
        <select
          value={filterSeverity}
          onChange={(e) => setFilterSeverity(e.target.value)}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          <option value="All">All Severity</option>
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>

        <select
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          <option value="Newest">Newest First</option>
          <option value="Oldest">Oldest First</option>
        </select>

        <button
          onClick={() => setShowForm((prev) => !prev)}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          {showForm ? "View Incidents" : "Report New Incident"}
        </button>
      </div>

      {/* Main Content */}
      <div className="flex flex-col items-center bg-gray-100 pt-24 px-4 min-h-screen">
        {showForm ? <ReportForm /> : <DisplayCards data={filterAndSortData()} />}
      </div>
    </div>
  );
};

export default Home;
