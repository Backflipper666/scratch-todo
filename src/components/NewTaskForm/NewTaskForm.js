import { useState } from 'react'

const NewTaskForm = ({ inputTextHandler, inputText, onFormSubmit, onKeyUpInputCopy }) => {
  const [seconds, setSeconds] = useState('')
  const [minutes, setMinutes] = useState('')

  const onHitEnter = (e) => {
    if (!e.target.value.trim().length) return
    if (!minutes.trim().length && !seconds.trim().length) return

    if (e.key === 'Enter') {
      if (isNaN(Number(minutes)) || isNaN(Number(seconds))) {
        return
      }
      onKeyUpInputCopy(e, minutes, seconds)
      setSeconds('')
      setMinutes('')
    }
  }

  const onChangeSec = (e) => {
    setSeconds(e.target.value)
  }

  const onLongArrowChange = (e) => {
    setMinutes(e.target.value)
  }

  return (
    <header className="header">
      <h1>todos</h1>
      <form className="new-todo-form" onSubmit={onFormSubmit}>
        <input
          className="new-todo"
          placeholder="Task"
          value={inputText}
          onChange={inputTextHandler}
          onKeyUp={onHitEnter}
          autoFocus
        />
        <input
          value={minutes}
          onChange={onLongArrowChange}
          name="min"
          max="60"
          min="0"
          type="text"
          className="new-todo-form__timer"
          placeholder="Min"
        />
        <input
          value={seconds}
          onChange={onChangeSec}
          name="sec"
          max="60"
          min="0"
          type="text"
          className="new-todo-form__timer"
          placeholder="Sec"
        />
      </form>
    </header>
  )
}

export default NewTaskForm
