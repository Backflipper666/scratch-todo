import Filters from '../Filters/Filters'
const Footer = ({ statusHandler, filterHandler }) => {
  const callMultipleFunctionsOnClick = (e) => {
    statusHandler(e)
    filterHandler()
  }
  return (
    <footer className="footer">
      <span className="todo-count">1 items left</span>
      <ul className="filters" onClick={callMultipleFunctionsOnClick}>
        <Filters statusHandler={statusHandler} filterHandler={filterHandler} />
      </ul>
      <button className="clear-completed">Clear completed</button>
    </footer>
  )
}

export default Footer
