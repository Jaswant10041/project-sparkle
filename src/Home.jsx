import React, { useContext, useState } from 'react'
import ReportForm from './ReportForm';
import DisplayCards from './DisplayCards';
import { GlobalState } from './GloblalContext';

const Home = () => {
  const [flag, setFlag] = useState(false);
  const { data } = useContext(GlobalState);
  
  const [filterSeverity, setFilterSeverity] = useState('All');
  const [sortOrder, setSortOrder] = useState('Newest');

  const filterAndSortData = () => {
    let filtered = [...data];

    if (filterSeverity !== 'All') {
      filtered = filtered.filter(item => item.severity === filterSeverity);
    }

    filtered.sort((a, b) => {
      if (sortOrder === 'Newest') {
        return new Date(b.reported_at) - new Date(a.reported_at);
      } else {
        return new Date(a.reported_at) - new Date(b.reported_at);
      }
    });

    return filtered;
  }

  return (
    <div className='flex flex-col items-center p-4 bg-gray-100 min-h-screen'>

      <div className="flex flex-wrap gap-4 mb-4">
        <select onChange={(e) => setFilterSeverity(e.target.value)} className="border rounded p-2">
          <option value="All">All Severity</option>
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>

        <select onChange={(e) => setSortOrder(e.target.value)} className="border rounded p-2">
          <option value="Newest">Newest First</option>
          <option value="Oldest">Oldest First</option>
        </select>

        <button onClick={() => setFlag(!flag)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          {flag ? 'View Incidents' : 'Report New Incident'}
        </button>
      </div>

      {flag ? <ReportForm /> : <DisplayCards data={filterAndSortData()} />}
    </div>
  )
}

export default Home
