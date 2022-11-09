const Task = ({ text }) => {
  console.log(text)
  return (
    <li className="completed">
      <div className="view">
        <input className="toggle" type="checkbox" />
        <label>
          <span className="description">{text}a</span>
          <span className="created">created 17 seconds ago</span>
        </label>
        <button className="icon icon-edit" />
        <button className="icon icon-destroy" />
      </div>
    </li>
  )
}

export default Task
