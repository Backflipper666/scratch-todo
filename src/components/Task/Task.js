import { useState } from 'react'
import formatDistanceToNow from 'date-fns/formatDistanceToNow'

const Task = ({ text, id, onDeleteTask, onCompleteHandler, todo, onEditHandler, onEditSubmit, onBlurInput }) => {
  const [inputValue, setInputValue] = useState(todo.text)
  const [dateTime] = useState(new Date())
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
            <span className="title">{text}</span>
            <span className="description">
              <button className="icon icon-play"></button>
              <button className="icon icon-pause"></button>
              <span className="description__time"></span>
            </span>

            <span className="created description">{`created ${formatDistanceToNow(dateTime, {
              includeSeconds: true,
            })} ago`}</span>
          </label>
          <button onClick={editHandler} className="icon icon-edit" />
          <button onClick={deleteTask} className="icon icon-destroy" />
        </div>
      )}
    </li>
  )
}

export default Task
