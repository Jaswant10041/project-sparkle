import React from 'react'
import CardDetails from './CardDetails';

const DisplayCards = ({ data }) => {
  return (
    <div className='w-full'>
      <ul className='grid sm:grid-cols-2 md:grid-cols-3 gap-6'>
        {data.map((item) => (
          <li key={item.id} className='cursor-pointer'>
            <CardDetails data={item} />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default DisplayCards
