import React from 'react';
import { AiOutlineSearch} from 'react-icons/ai'

function Search({ onSearch}) {
  return (
    <div>
      <div className='border flex items-center py-[3px] px-2 border-slate-300 bg-white rounded-md'>
        <input type="text" className='text-sm outline-none bg-transparent' onChange={(e)=>onSearch(e.target.value)} />
        <button className='text-slate-400'><AiOutlineSearch/></button>
      </div>
    </div>
  );
}

export default Search;
