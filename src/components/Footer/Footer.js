import Filters from '../Filters/Filters'
const Footer = ({ statusHandler, filterHandler }) => {
  return (
    <footer className="footer">
      <span className="todo-count">1 items left</span>
      <ul className="filters" onClick={statusHandler}>
        <Filters statusHandler={statusHandler} filterHandler={filterHandler} />
      </ul>
      <button className="clear-completed">Clear completed</button>
    </footer>
  )
}

export default Footer
