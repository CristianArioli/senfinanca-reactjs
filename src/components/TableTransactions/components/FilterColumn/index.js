export function FilterColumn({ column }) {

  const { filterValue, setFilter } = column;
  
  return (
      <>
          <input value={filterValue || ''}
          onChange={e => setFilter(e.target.value)}
          />
      </>
  )
}