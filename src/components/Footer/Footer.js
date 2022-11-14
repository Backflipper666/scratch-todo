import Filters from '../Filters/Filters'
const Footer = ({ onFilterCompleted }) => {
  return (
    <footer className="footer">
      <span className="todo-count">1 items left</span>
      <ul className="filters">
        <Filters onFilterCompleted={onFilterCompleted} />
      </ul>
      <button className="clear-completed">Clear completed</button>
    </footer>
  )
}

export default Footer
