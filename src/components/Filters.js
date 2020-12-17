import { useState } from 'react';
import './Filters.css';

function FilterButton({ filter, selectedFilter, setSelectedFilter }) {
  return (
    <button
      className={selectedFilter === filter ? 'selected' : ''}
      onClick={() => {
        setSelectedFilter(filter);
      }}
    >
      {filter}
    </button>
  );
}

function Filters() {
  const [selectedFilter, setSelectedFilter] = useState('all');
  return (
    <div>
      <FilterButton
        filter="all"
        selectedFilter={selectedFilter}
        setSelectedFilter={setSelectedFilter}
      />
      <FilterButton
        filter="active"
        selectedFilter={selectedFilter}
        setSelectedFilter={setSelectedFilter}
      />
      <FilterButton
        filter="completed"
        selectedFilter={selectedFilter}
        setSelectedFilter={setSelectedFilter}
      />
    </div>
  );
}

export default Filters;
