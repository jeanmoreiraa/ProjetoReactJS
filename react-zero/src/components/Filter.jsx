const Filter = ({ filter, setFilter, setSort }) => {
  return (
    <div className="filter">
      <h2>Filtrar:</h2>
      <div className="filter-options">
        <div>
          <p>Status:</p>
          <select value={filter} onChange={(e) => setFilter(e.target.value)}>
            <option value="All">Todos</option>
            <option value="Completed">Completo</option>
            <option value="Incomplete">Imcompleto</option>
          </select>
        </div>
        <p>Ordem alfabética:</p>

        <button onClick={() => setSort("Asc")}>Asc</button>
        <button onClick={() => setSort("Desc")}>Desc</button>
      </div>
    </div>
  );
};

export default Filter;
