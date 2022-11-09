import React from 'react'

import './App.css'
import NewTaskForm from './components/NewTaskForm/NewTaskForm'
import TaskList from './components/TaskList/TaskList'

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = { inputText: '', todos: [] }
    this.addItem = this.addItem.bind(this)
    this.onKeyUpInput = this.onKeyUpInput.bind(this)
    this.inputTextHandler = this.inputTextHandler.bind(this)
  }
  addItem(text) {
    // generate id
    const newItem = this.createTodoItem(text)

    this.setState(({ todoData }) => {
      const newArr = [...todoData, newItem]

      return {
        todoData: newArr,
      }
    })
  }
  createTodoItem(label) {
    return {
      label,
      important: false,
      done: false,
      id: this.maxId++,
      status: 'all',
    }
  }
  inputTextHandler(e) {
    console.log(e.target.value)
    this.setState({
      inputText: e.target.value,
    })
  }

  onKeyUpInput(event) {
    event.preventDefault()

    if (event.key === 'Enter') {
      //   const todos = this.props.todos
      //   const inputText = this.props.inputText
      this.setState(({ todos }) => ({
        todos: [...todos, { text: event.target.value, completed: false, id: Math.random() * 1000, status: 'All' }],
        inputText: '',
      }))
      console.log('enter pres')
      event.target.value = ''
    }
  }

  render() {
    const inputText = this.state.inputText
    return (
      <div className="App">
        <section className="todoapp">
          <NewTaskForm
            todos={this.state.todos}
            inputText={inputText}
            onKeyUpInput={this.onKeyUpInput}
            inputTextHandler={this.inputTextHandler}
          />
          <section className="main">
            <TaskList></TaskList>
            <footer className="footer">
              <span className="todo-count">1 items left</span>
              <ul className="filters">
                <li>
                  <button className="selected">All</button>
                </li>
                <li>
                  <button>Active</button>
                </li>
                <li>
                  <button>Completed</button>
                </li>
              </ul>
              <button className="clear-completed">Clear completed</button>
            </footer>
          </section>
        </section>
      </div>
    )
  }
}
