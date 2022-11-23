import React from 'react'

class NewTaskForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      label: '',
      minutes: '',
      seconds: '',
    }
    this.statusHandler = this.statusHandler.bind(this)
    this.onHitEnter = this.onHitEnter.bind(this)
    this.onChangeSec = this.onChangeSec.bind(this)
    this.onLongArrowChange = this.onLongArrowChange.bind(this)
  }
  statusHandler(e) {
    console.log(e)
  }

  onHitEnter(e) {
    this.props.onKeyUpInputCopy(e, this.state.minutes, this.state.seconds)
    if (!e.target.value.trim().length) return
    if (e.key === 'Enter') {
      this.setState({
        minutes: '',
        seconds: '',
      })
    }
  }
  onChangeSec(e) {
    this.setState({
      seconds: e.target.value,
    })
  }
  onLongArrowChange(e) {
    this.setState({
      minutes: e.target.value,
    })
  }

  render() {
    // const onKeyUpInput = this.props.onKeyUpInput
    const inputTextHandler = this.props.inputTextHandler
    const inputText = this.props.inputText
    const onFormSubmit = this.props.onFormSubmit
    return (
      <header className="header">
        <h1>todos</h1>
        <form className="new-todo-form" onSubmit={onFormSubmit}>
          <input
            className="new-todo"
            placeholder="Task"
            value={inputText}
            onChange={inputTextHandler}
            onKeyUp={this.onHitEnter}
            autoFocus
          />
          <input
            value={this.state.minutes}
            onChange={this.onLongArrowChange}
            name="min"
            max="60"
            min="0"
            type="number"
            className="new-todo-form__timer"
            placeholder="Min"
          />
          <input
            value={this.state.seconds}
            onChange={this.onChangeSec}
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
