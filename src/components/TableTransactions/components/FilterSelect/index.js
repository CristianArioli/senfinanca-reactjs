export function FilterSelect({ column }) {

  const { filterValue, setFilter } = column;
  
  return (
      <>
          <input value={filterValue || ''}
          onChange={e => setFilter(e.target.value)}
          />
          <select
          onChange={e => setFilter(e.target.value)}
          >
            <option value={''}>Todos</option>
            <option value={'entrada'}>Entrada</option>
            <option value={'saida'}>Saída</option>
          </select>
      </>
  )
}