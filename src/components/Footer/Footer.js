import { useEffect } from 'react'

import Filters from '../Filters/Filters'
const Footer = ({ statusHandler, filterHandler, todos, filterStatus, clearCompleted, itemsLeft }) => {
  const callMultipleFunctionsOnClick = (e) => {
    statusHandler(e)
    filterHandler()
  }
  useEffect(() => {
    filterHandler()
  }, [todos, filterStatus])
  return (
    // const itemsLeft = countItemsLeft()
    <footer className="footer">
      <span className="todo-count">{itemsLeft} items left</span>
      <ul className="filters" onClick={callMultipleFunctionsOnClick}>
        <Filters statusHandler={statusHandler} filterHandler={filterHandler} />
      </ul>
      <button onClick={clearCompleted} className="clear-completed">
        Clear completed
      </button>
    </footer>
  )
}

export default Footer
