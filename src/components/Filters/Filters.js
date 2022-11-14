const Filters = ({ onFilterCompleted }) => {
  return (
    <>
      {' '}
      <li>
        <button className="selected">All</button>
      </li>
      <li>
        <button>Active</button>
      </li>
      <li>
        <button onClick={onFilterCompleted}>Completed</button>
      </li>
    </>
  )
}

export default Filters
