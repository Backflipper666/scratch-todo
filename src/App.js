/* eslint-disable indent */
import React from 'react'

import './App.css'
import NewTaskForm from './components/NewTaskForm/NewTaskForm'
import TaskList from './components/TaskList/TaskList'
import Footer from './components/Footer/Footer'

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      inputText: '',
      todos: [],
      filteredTodos: [],
      status: 'All',
      filterStatus: 'All',
    }
    this.onKeyUpInput = this.onKeyUpInput.bind(this)
    this.inputTextHandler = this.inputTextHandler.bind(this)
    this.onDeleteTask = this.onDeleteTask.bind(this)
    this.onCompleteHandler = this.onCompleteHandler.bind(this)
    this.onEditHandler = this.onEditHandler.bind(this)
    this.onEditSubmit = this.onEditSubmit.bind(this)
    this.onBlurInput = this.onBlurInput.bind(this)
    this.filterHandler = this.filterHandler.bind(this)
    this.statusHandler = this.statusHandler.bind(this)
    this.clearCompleted = this.clearCompleted.bind(this)
    this.countItemsLeft = this.countItemsLeft.bind(this)
    this.onMinChange = this.onMinChange.bind(this)
    this.onFormSubmit = this.onFormSubmit.bind(this)
    this.onKeyUpInputCopy = this.onKeyUpInputCopy.bind(this)
  }

  inputTextHandler(e) {
    this.setState({
      inputText: e.target.value,
    })
  }

  onKeyUpInput(event) {
    event.preventDefault()
    if (!event.target.value.trim().length) return
    const inputText = this.state.inputText
    this.setState({
      inputText: event.target.value,
    })
    if (event.key === 'Enter') {
      this.setState(({ todos }) => ({
        todos: [
          ...todos,
          {
            text: inputText,
            completed: false,
            editing: false,
            id: Math.random() * 1000,
            status: 'All',
            time: '',
          },
        ],
        inputText: '',
      }))
    }
  }
  onKeyUpInputCopy(event, eventMin, eventSec) {
    event.preventDefault()
    if (!event.target.value.trim().length) return
    const inputText = this.state.inputText
    if (event.key === 'Enter') {
      this.setState(({ todos }) => ({
        todos: [
          ...todos,
          {
            text: inputText,
            completed: false,
            editing: false,
            id: Math.random() * 1000,
            status: 'All',
            min: eventMin,
            sec: eventSec,
          },
        ],
        inputText: '',
      }))
    }
  }

  onMinChange(eventMinutes) {
    eventMinutes.preventDefault()
    const inputText = this.state.inputText

    this.setState(({ todos }) => ({
      todos: [
        ...todos,
        {
          text: inputText,
          completed: false,
          editing: false,
          id: Math.random() * 1000,
          status: 'All',
          time: eventMinutes.target.value,
        },
      ],
    }))
    /*    this.setState({
      min: eventMinutes.target.value,
    }) */
  }
  onFormSubmit(event) {
    event.preventDefault()
    console.log(event)
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
          if (item.status === 'All') {
            return {
              ...item,
              status: 'completed',
              completed: !item.completed,
            }
          } else if (item.status === 'completed') {
            return {
              ...item,
              status: 'All',
              completed: !item.completed,
            }
          }
        }
        return item
      }),
    }))
  }

  onEditHandler(id) {
    this.setState((state) => ({
      todos: state.todos.map((item) => {
        if (item.id === id) {
          if (item.status === 'All' || item.status === 'completed') {
            return {
              ...item,
              status: 'editing',
            }
          } else if (item.status === 'editing') {
            return {
              ...item,
              status: 'All',
            }
          }
          return {
            ...item,
            editing: !item.editing,
          }
        }
        return item
      }),
    }))
  }

  onEditSubmit(id, textEdited, event) {
    event.preventDefault()
    if (event.key === 'Enter') {
      this.setState((state) => ({
        todos: state.todos.map((item) => {
          if (item.id === id) {
            if (!item.completed) {
              return {
                ...item,
                status: 'All',
                text: textEdited,
              }
            } else {
              return {
                ...item,
                status: 'completed',
                text: textEdited,
              }
            }
          }
          return item
        }),
      }))
    }
  }

  onBlurInput(id, textEdited) {
    this.setState((state) => ({
      todos: state.todos.map((item) => {
        if (item.id === id) {
          if (!item.completed) {
            return {
              ...item,
              status: 'All',
              text: textEdited,
            }
          } else {
            return {
              ...item,
              status: 'completed',
              text: textEdited,
            }
          }
        }
        return item
      }),
    }))
    id
  }

  statusHandler(e) {
    this.setState(() => ({
      filterStatus: e.target.firstChild.data,
    }))
  }

  filterHandler() {
    switch (this.state.filterStatus) {
      case 'Completed':
        this.setState((state) => ({
          filteredTodos: state.todos.filter((todo) => {
            return todo.status === 'completed'
          }),
        }))

        break
      case 'Active':
        this.setState((state) => ({
          filteredTodos: state.todos.filter((todo) => todo.status !== 'completed'),
        }))
        break
      default:
        this.setState((state) => ({
          filteredTodos: state.todos,
        }))
        break
    }
  }

  clearCompleted() {
    const todos = this.state.todos
    const arrayWithoutCompleted = todos.filter((item) => !item.completed)
    this.setState(() => ({
      todos: arrayWithoutCompleted,
    }))
  }

  countItemsLeft() {
    const itemsLeft = this.state.todos.filter((item) => !item.completed).length
    return itemsLeft
  }

  render() {
    const inputText = this.state.inputText
    const todos = this.state.todos
    const itemsLeft = this.countItemsLeft()
    return (
      <div className="App">
        <section className="todoapp">
          <NewTaskForm
            todos={this.state.todos}
            inputText={inputText}
            onKeyUpInput={this.onKeyUpInput}
            inputTextHandler={this.inputTextHandler}
            onMinChange={this.onMinChange}
            onFormSubmit={this.onFormSubmit}
            onKeyUpInputCopy={this.onKeyUpInputCopy}
          />
          <section className="main">
            <TaskList
              todos={todos}
              onKeyUpInput={this.onKeyUpInput}
              onDeleteTask={this.onDeleteTask}
              onCompleteHandler={this.onCompleteHandler}
              onEditHandler={this.onEditHandler}
              onEditSubmit={this.onEditSubmit}
              onBlurInput={this.onBlurInput}
              filteredTodos={this.state.filteredTodos}
            ></TaskList>
            <Footer
              filterHandler={this.filterHandler}
              statusHandler={this.statusHandler}
              filteredTodos={this.state.filteredTodos}
              filterStatus={this.state.filterStatus}
              todos={todos}
              clearCompleted={this.clearCompleted}
              itemsLeft={itemsLeft}
            />
          </section>
        </section>
      </div>
    )
  }
}
