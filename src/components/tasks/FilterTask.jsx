import React from 'react'
import {GrFormClose} from 'react-icons/gr'

function FilterTask({ onFilter, value, onStatus, onSort }) {

  return (
    <React.Fragment>
      {value == "" && (
        <div className="text-sm">
          <label htmlFor="filter">Filter by: </label>
          <select
            name="filter"
            id="filter"
            className="border outline-none px-2 py-[1px]"
            onChange={(e) => onFilter(e.target.value)}
            value={value}
          >
            <option value="">..select..</option>
            <option value="status">Status</option>
            <option value="date">Date</option>
          </select>
        </div>
      )}

      {value == 'date' && <div className='flex items-center'>
        <label htmlFor="date">Sort: </label>
        <select onChange={(e)=>onSort(e.target.value)} name="date" id='date' className='border outline-none px-2 py-[1px] text-sm'>
          <option value="Asc">Asc</option>
          <option value="Des">Des</option>
       </select>
        <GrFormClose onClick={()=> onFilter("")}/>
      </div>}
      {value == 'status' && <div className='flex items-center'>
        <label htmlFor="status" className='text-sm'>status: </label>
        <select onChange={(e)=> onStatus(e.target.value)} name="status" id='status' className='border outline-none px-2 py-[1px] text-sm'>
          <option value="all">all</option>
          <option value="pending">pending</option>
          <option value="completed">completed</option>
       </select>
        <GrFormClose onClick={()=> onFilter("")}/>
      </div> }
    </React.Fragment>
  )
}

export default FilterTask
