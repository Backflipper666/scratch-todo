import React from 'react'

class NewTaskForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      label: '',
    }
    this.onLabelChange = this.onLabelChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
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
    return (
      <header className="header">
        <h1>todos</h1>
        <input
          onSubmit={this.onSubmit}
          className="new-todo"
          placeholder="What needs to be done?"
          onChange={this.onLabelChange}
          value={this.state.label}
          autoFocus
        />
      </header>
    )
  }
}

export default NewTaskForm
