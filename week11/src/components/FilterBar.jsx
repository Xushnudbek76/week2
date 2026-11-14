function FilterBar({ options, selected, onSelect }) {
  return (
    <div className="filter-bar" role="group" aria-label="Filter projects by technology">
      {['All', ...options].map((option) => (
        <button
          key={option}
          className={`filter-button${selected === option ? ' is-active' : ''}`}
          type="button"
          aria-pressed={selected === option}
          onClick={() => onSelect(option)}
        >
          {option}
        </button>
      ))}
    </div>
  );
}

export default FilterBar;
