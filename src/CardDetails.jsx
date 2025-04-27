import React, { useState } from 'react'

const CardDetails = ({ data }) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="w-full sm:w-80 md:w-96 mx-auto p-6 bg-white rounded-2xl shadow-md border border-gray-200 hover:shadow-xl transition-all duration-300">
      <h2 className="text-lg font-bold text-red-600 mb-2">{data.title}</h2>
      <p className="text-sm text-gray-500 mb-2">Severity: 
        <span className={`ml-2 px-2 py-1 rounded ${data.severity === 'Low' ? 'bg-green-400' : data.severity === 'Medium' ? 'bg-yellow-400' : 'bg-red-500'} text-white`}>
          {data.severity}
        </span>
      </p>
      <p className="text-xs text-gray-400 mb-2">Reported At: {new Date(data.reported_at).toLocaleDateString()}</p>

      {showDetails && <p className="text-gray-700 text-sm">{data.description}</p>}

      <button 
        onClick={() => setShowDetails(!showDetails)} 
        className="mt-4 text-blue-500 hover:underline text-sm">
        {showDetails ? 'Hide Details' : 'View Details'}
      </button>
    </div>
  )
}

export default CardDetails
