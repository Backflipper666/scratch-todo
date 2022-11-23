import React, { useRef, useState } from 'react'
import formatDistanceToNow from 'date-fns/formatDistanceToNow'
import Countdown from 'react-countdown'

const Task = ({
  text,
  id,
  onDeleteTask,
  onCompleteHandler,
  todo,
  onEditHandler,
  onEditSubmit,
  onBlurInput,
  min,
  sec,
}) => {
  const [inputValue, setInputValue] = useState(todo.text)
  const [dateTime] = useState(new Date())
  const [date] = useState(Date.now())

  const clockRef = useRef()
  const handleStart = () => clockRef.current.start()
  const handlePause = () => clockRef.current.pause()
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

  function convertToMs(mins, secs) {
    const secsToMs = secs * 1000
    const minsToMs = mins * 60000
    const output = secsToMs + minsToMs
    return output
  }

  const renderer = ({ minutes, seconds }) => {
    return (
      <span>
        {minutes}:{seconds}
      </span>
    )
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
              <button className="icon icon-play" onClick={handleStart}></button>
              <button className="icon icon-pause" onClick={handlePause}></button>
              <span className="description__time">
                <Countdown
                  renderer={renderer}
                  zeroPadTime={0}
                  date={date + convertToMs(min, sec)}
                  autoStart={false}
                  ref={clockRef}
                />
              </span>
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
