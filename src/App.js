/* eslint-disable indent */
import React from 'react'

import './App.css'
// import { flushSync } from 'react-dom'

// import { isThisISOWeek } from 'date-fns'

import NewTaskForm from './components/NewTaskForm/NewTaskForm'
import TaskList from './components/TaskList/TaskList'
import Footer from './components/Footer/Footer'

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = { inputText: '', todos: [], filteredTodos: [], status: 'All', filterStatus: 'All' }
    this.onKeyUpInput = this.onKeyUpInput.bind(this)
    this.inputTextHandler = this.inputTextHandler.bind(this)
    this.onDeleteTask = this.onDeleteTask.bind(this)
    this.onCompleteHandler = this.onCompleteHandler.bind(this)
    this.onEditHandler = this.onEditHandler.bind(this)
    this.onEditSubmit = this.onEditSubmit.bind(this)
    this.onBlurInput = this.onBlurInput.bind(this)
    this.filterHandler = this.filterHandler.bind(this)
    this.statusHandler = this.statusHandler.bind(this)
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
      switch (this.state.filterStatus) {
        case 'Completed':
          //   const todos = this.props.todos
          //   const inputText = this.props.inputText
          this.setState(({ todos }) => ({
            todos: [
              ...todos,
              {
                text: inputText,
                completed: false,
                editing: false,
                id: Math.random() * 1000,
                status: 'All',
              },
            ],
            filteredTodos: todos.filter((todo) => todo.completed === true),
            inputText: '',
          })) // event.target.value = ''
          break
        case 'Active':
          this.setState(({ todos }) => ({
            todos: [
              ...todos,
              {
                text: inputText,
                completed: false,
                editing: false,
                id: Math.random() * 1000,
                status: 'All',
              },
            ],
            filteredTodos: todos.filter((todo) => todo.completed === false),
            inputText: '',
          })) // event.target.value = ''
          break
        default: // event.target.value = ''
          this.setState(({ todos }) => ({
            todos: [
              ...todos,
              {
                text: inputText,
                completed: false,
                editing: false,
                id: Math.random() * 1000,
                status: 'All',
              },
            ],
            filteredTodos: todos,
            inputText: '',
          }))
          break
      }
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
    const clickEvent = document.createEvent('MouseEvents')
    clickEvent.initEvent('dblclick', true, true)
    e.target.firstChild.dispatchEvent(clickEvent)
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
              onEditHandler={this.onEditHandler}
              onEditSubmit={this.onEditSubmit}
              onBlurInput={this.onBlurInput}
              filteredTodos={this.state.filteredTodos}
            ></TaskList>
            <Footer filterHandler={this.filterHandler} statusHandler={this.statusHandler} />
          </section>
        </section>
      </div>
    )
  }
}
/* filterHandler() {
  if (this.state.filterStatus === 'Completed') {
    this.setState((state) => ({
      filterStatus: state.todos.filter((todo) => todo.completed === true),
    }))
  } else if (this.state.filterStatus === 'Active') {
    this.setState((state) => ({
      filterStatus: state.todos.filter((todo) => todo.completed === false),
    }))
  } else {
    this.setState((state) => ({
      filterStatus: state.todos.filter((todo) => todo),
    }))
  }
} 

  statusHandler(e) {
    console.log(e)
    console.log(e.target.firstChild.data)
    this.setState({
      filterStatus: e.target.firstChild.data,
    })
  }
*/
/*    if (this.state.filterStatus === 'Completed') {
      this.setState((state) => ({
        filteredTodos: state.todos.filter((todo) => todo.completed),
      }))
    } else if (this.state.filterStatus === 'Active') {
      this.setState((state) => ({
        filteredTodos: state.todos.filter((todo) => todo.completed === false),
      }))
    } else if (this.filterStatus === 'All') {
      this.setState((state) => ({
        filteredTodos: state.todos.filter((todo) => todo),
      }))
    } */
