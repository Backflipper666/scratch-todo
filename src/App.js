import React from 'react'

import './App.css'
import NewTaskForm from './components/NewTaskForm/NewTaskForm'
import TaskList from './components/TaskList/TaskList'

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = { inputText: '', todos: [] }
    this.onKeyUpInput = this.onKeyUpInput.bind(this)
    this.inputTextHandler = this.inputTextHandler.bind(this)
    this.onDeleteTask = this.onDeleteTask.bind(this)
    this.onCompleteHandler = this.onCompleteHandler.bind(this)
  }

  inputTextHandler(e) {
    this.setState({
      inputText: e.target.value,
    })
  }

  onKeyUpInput(event) {
    event.preventDefault()
    const inputText = this.state.inputText
    if (event.key === 'Enter') {
      //   const todos = this.props.todos
      //   const inputText = this.props.inputText
      this.setState(({ todos }) => ({
        todos: [
          ...todos,
          { text: inputText, completed: false, editing: false, id: Math.random() * 1000, status: 'All' },
        ],
        inputText: '',
      }))

      // event.target.value = ''
    }
  }

  onDeleteTask(id) {
    this.setState((state) => ({
      todos: state.todos.filter((item) => item.id !== id),
    }))
  }

  onCompleteHandler(id) {
    this.setState((state) => ({
      todos: state.todos.map((item) => {
        if (item.id === id) {
          console.log('item is: ', item)
          return {
            ...item,
            completed: !item.completed,
          }
        }
        return item
      }),
    }))
  }

  render() {
    const inputText = this.state.inputText
    const todos = this.state.todos
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
            <TaskList
              todos={todos}
              onKeyUpInput={this.onKeyUpInput}
              onDeleteTask={this.onDeleteTask}
              onCompleteHandler={this.onCompleteHandler}
            ></TaskList>
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
