import React from 'react'

class NewTaskForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      label: '',
    }
    this.statusHandler = this.statusHandler.bind(this)
  }
  statusHandler(e) {
    console.log(e)
  }

  render() {
    const onKeyUpInput = this.props.onKeyUpInput
    const inputTextHandler = this.props.inputTextHandler
    const inputText = this.props.inputText
    return (
      <header className="header">
        <h1>todos</h1>
        <form className="new-todo-form">
          <input
            className="new-todo"
            placeholder="Task"
            value={inputText}
            onChange={inputTextHandler}
            onKeyUp={onKeyUpInput}
            autoFocus
          />
          <input
            // value={2}
            name="min"
            max="60"
            min="0"
            type="number"
            className="new-todo-form__timer"
            placeholder="Min"
          />
          <input
            // value={1}
            name="sec"
            max="60"
            min="0"
            type="number"
            className="new-todo-form__timer"
            placeholder="Sec"
          />
        </form>
      </header>
    )
  }
}

export default NewTaskForm
