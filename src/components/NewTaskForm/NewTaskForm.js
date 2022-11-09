import React from 'react'

class NewTaskForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      label: '',
    }
    this.onLabelChange = this.onLabelChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
    // this.inputTextHandler = this.inputTextHandler.bind(this)
    this.submitTodoHandler = this.submitTodoHandler.bind(this)
  }

  submitTodoHandler(e) {
    const todos = this.state.todos
    const inputText = this.state.inputText
    e.preventDefault()
    this.setState({
      todos: [...todos, { text: inputText, completed: false, id: Math.random() * 1000, status: 'All' }],
    })
  }

  onLabelChange(e) {
    this.setState({
      label: e.target.value,
    })
    const label = this.state.label
    const trimmed = label.trim()
    if (trimmed.length === 0) {
      return
    }
  }

  onSubmit(e) {
    e.preventDefault()

    const label = this.state.label
    const trimmed = label.trim()
    if (trimmed.length === 0) {
      return
    }
    this.props.onItemAdded(this.state.label)
    this.setState({
      label: '',
    })
  }

  render() {
    const onKeyUpInput = this.props.onKeyUpInput
    const inputTextHandler = this.props.inputTextHandler
    return (
      <header className="header">
        <h1>todos</h1>
        <input
          onSubmit={this.submitTodoHandler}
          className="new-todo"
          placeholder="What needs to be done?"
          //   value={this.state.label}
          onChange={inputTextHandler}
          onKeyUp={onKeyUpInput}
          autoFocus
        />
      </header>
    )
  }
}

export default NewTaskForm
