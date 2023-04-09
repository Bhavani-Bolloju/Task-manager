import React from 'react'
import {GrFormClose} from 'react-icons/gr'

function FilterTask({ onFilter, value, onStatus, onSort }) {

  return (
    <div className='mb-8 self-end'>
      {value == "" && (
        <div className="text-sm">
          <label htmlFor="filter" className='mr-2'>Filter by: </label>
          <select
            name="filter"
            id="filter"
            className="border w-[120px] rounded-md  outline-none px-2 py-[2px] "
            onChange={(e) => onFilter(e.target.value)}
            value={value}
          >
            <option value="">..select..</option>
            <option value="status">Status</option>
            <option value="date">Date</option>
          </select>
        </div>
      )}

      {value == 'date' && <div className='flex items-center text-sm'>
        <label htmlFor="date" className='mr-2'>Sort:</label>
        <select onChange={(e)=>onSort(e.target.value)} name="date" id='date' className='border rounded-md  outline-none px-2 py-[2px]  text-sm'>
          <option value="Asc">Asc</option>
          <option value="Des">Des</option>
       </select>
        <GrFormClose onClick={()=> onFilter("")}/>
      </div>}
      {value == 'status' && <div className='flex items-center text-sm'>
        <label htmlFor="status" className='text-sm mr-2'>status: </label>
        <select onChange={(e)=> onStatus(e.target.value)} name="status" id='status' className='border rounded-md  outline-none px-2 py-[2px] text-sm'>
          <option value="all">all</option>
          <option value="pending">pending</option>
          <option value="completed">completed</option>
       </select>
        <GrFormClose onClick={()=> onFilter("")}/>
      </div> }
    </div>
  )
}

export default FilterTask
