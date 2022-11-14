import { useState } from 'react'
const Task = ({ text, id, onDeleteTask, onCompleteHandler, todo, onEditHandler, onEditSubmit, onBlurInput }) => {
  const [inputValue, setInputValue] = useState(todo.text)
  const deleteTask = () => {
    onDeleteTask(id)
  }

  const completeHandler = () => {
    onCompleteHandler(id)
  }

  const editHandler = () => {
    onEditHandler(id)
  }
  const editSubmit = (event) => {
    onEditSubmit(id, inputValue, event)
  }

  const blurInput = () => {
    onBlurInput(id, inputValue)
  }

  return (
    <li className={todo.status}>
      {todo.status === 'editing' ? (
        <input
          type="text"
          className="edit"
          placeholder="Editing task"
          value={inputValue}
          onChange={(event) => setInputValue(event.target.value)}
          onKeyUp={editSubmit}
          onBlur={blurInput}
          autoFocus
        />
      ) : (
        <div className="view">
          <input
            className="toggle"
            type="checkbox"
            checked={todo.status === 'completed'}
            id={id}
            onClick={completeHandler}
            onChange={(e) => {
              e
            }}
          />
          <label htmlFor={id}>
            <span className="description">{text}</span>
            <span className="created">created 5 minutes ago</span>
          </label>
          <button onClick={editHandler} className="icon icon-edit" />
          <button onClick={deleteTask} className="icon icon-destroy" />
        </div>
      )}
    </li>
  )
}

export default Task
