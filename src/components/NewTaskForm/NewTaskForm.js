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
        <input
          className="new-todo"
          placeholder="What needs to be done?"
          value={inputText}
          onChange={inputTextHandler}
          onKeyUp={onKeyUpInput}
          autoFocus
        />
      </header>
    )
  }
}

export default NewTaskForm
