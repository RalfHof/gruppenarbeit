function Filter({ title, options }) {
    return (
      <div className="filter">
        <p>{title}</p>
        <div className="filter-options">
          {options.map((option, index) => (
            <button key={index} className="filter-button">
              {option}
            </button>
          ))}
        </div>
      </div>
    );
  }
  