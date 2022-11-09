import React from 'react'

class NewTaskForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      label: '',
    }
    // this.onLabelChange = this.onLabelChange.bind(this)
    // this.onSubmit = this.onSubmit.bind(this)
    // this.inputTextHandler = this.inputTextHandler.bind(this)
    // this.submitTodoHandler = this.submitTodoHandler.bind(this)
  }

  render() {
    const onKeyUpInput = this.props.onKeyUpInput
    const inputTextHandler = this.props.inputTextHandler
    const inputText = this.props.inputText
    return (
      <header className="header">
        <h1>todos</h1>
        <input
          // onSubmit={this.submitTodoHandler}
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
