const Task = ({ text, id, onDeleteTask, onCompleteHandler, todo }) => {
  const deleteTask = () => {
    onDeleteTask(id)
  }

  const completeHandler = () => {
    onCompleteHandler(id)
  }

  return (
    /*     <li className="completed">
      <div className="view">
        <input className="toggle" type="checkbox" />
        <label>
          <span className="description">{text}a</span>
          <span className="created">created 17 seconds ago</span>
        </label>
        <button className="icon icon-edit" onClick={completeHandler} />
        <button onClick={deleteTask} className="icon icon-destroy" />
      </div>
    </li> */
    <li className={todo.status}>
      {todo.status === 'editing' ? (
        <input type="text" className="edit" placeholder="Editing task" />
      ) : (
        <div className="view">
          <input className="toggle" type="checkbox" id={id} onClick={completeHandler} />
          <label htmlFor={id}>
            <span className="description">{text}</span>
            <span className="created">created 5 minutes ago</span>
          </label>
          <button className="icon icon-edit" />
          <button onClick={deleteTask} className="icon icon-destroy" />
        </div>
      )}
    </li>
  )
}

export default Task
