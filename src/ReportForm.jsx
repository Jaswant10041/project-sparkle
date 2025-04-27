import React, { useContext, useState } from "react";
import { GlobalState } from "./GloblalContext";

const ReportForm = () => {
  const { data, setData } = useContext(GlobalState);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [severity, setSeverity] = useState("Medium");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim() === "" || description.trim() === "") {
      alert("All fields are required!");
      return;
    }

    const newIncident = {
      id: data.length + 1,
      title,
      description,
      severity,
      reported_at: new Date().toISOString(),
    };

    setData(prev => [newIncident, ...prev]);
    setTitle("");
    setDescription("");
    setSeverity("Medium");
  };

  return (
    <div className="flex items-center justify-center w-full">
      <form className="flex flex-col gap-4 border-2 shadow-2xl p-6 rounded bg-white w-full max-w-md" onSubmit={handleSubmit}>
        
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border p-2 rounded"
        />

        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="border p-2 rounded"
        />

        <select
          value={severity}
          onChange={(e) => setSeverity(e.target.value)}
          className="border p-2 rounded"
        >
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>

        <button
          type="submit"
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
        >
          Submit Incident
        </button>
      </form>
    </div>
  );
};

export default ReportForm;
