const Filters = () => {
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
        <button>Completed</button>
      </li>
    </>
  )
}

export default Filters
