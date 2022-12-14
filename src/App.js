/* eslint-disable indent */
import React from 'react'
import { useState } from 'react'
import './App.css'

import NewTaskForm from './components/NewTaskForm/NewTaskForm'
import TaskList from './components/TaskList/TaskList'
import Footer from './components/Footer/Footer'

const App = () => {
  const [inputText, setInputText] = useState('')
  const [todos, setTodos] = useState([])
  const [filteredTodos, setFilteredTodos] = useState([])
  // const [status, setStatus] = useState('All')
  const [filterStatus, setFilterStatus] = useState('All')

  const inputTextHandler = (e) => {
    setInputText(e.target.value)
  }

  const onKeyUpInputCopy = (event, eventMin, eventSec) => {
    event.preventDefault()
    if (!event.target.value.trim().length) return
    if (event.key === 'Enter') {
      setTodos([
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
      ])
      setInputText('')
    }
  }

  const onKeyUpInput = (event) => {
    event.preventDefault()
    if (!event.target.value.trim().length) return
    setInputText(event.target.value)

    if (event.key === 'Enter') {
      setTodos([
        ...todos,
        {
          text: inputText,
          completed: false,
          editing: false,
          id: Math.random() * 1000,
          status: 'All',
          time: '',
        },
      ])
      setInputText('')
    }
  }

  const onMinChange = (eventMinutes) => {
    eventMinutes.preventDefault()
    setTodos([
      ...todos,
      {
        text: inputText,
        completed: false,
        editing: false,
        id: Math.random() * 1000,
        status: 'All',
        time: eventMinutes.target.value,
      },
    ])
  }

  const onFormSubmit = (event) => {
    event.preventDefault()
    console.log(event)
  }

  const onDeleteTask = (id) => {
    setTodos(todos.filter((item) => item.id !== id))
  }

  const onCompleteHandler = (id) => {
    setTodos(
      todos.map((item) => {
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
      })
    )
  }

  const onEditHandler = (id) => {
    setTodos(
      todos.map((item) => {
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
      })
    )
  }

  const onEditSubmit = (id, textEdited, event) => {
    event.preventDefault()
    if (event.key === 'Enter') {
      setTodos(
        todos.map((item) => {
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
        })
      )
    }
  }

  const onBlurInput = (id, textEdited) => {
    setTodos(
      todos.map((item) => {
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
      })
    )
  }

  const statusHandler = (e) => {
    setFilterStatus(e.target.firstChild.data)
  }

  const filterHandler = () => {
    switch (filterStatus) {
      case 'Completed':
        setFilteredTodos(
          todos.filter((todo) => {
            return todo.status === 'completed'
          })
        )

        break
      case 'Active':
        setFilteredTodos(todos.filter((todo) => todo.status !== 'completed'))
        break
      default:
        setFilteredTodos(todos)
        break
    }
  }

  const clearCompleted = () => {
    const arrayWithoutCompleted = todos.filter((item) => !item.completed)
    setTodos(arrayWithoutCompleted)
  }

  const countItemsLeft = () => {
    const itemsLeft = todos.filter((item) => !item.completed).length
    return itemsLeft
  }

  const itemsLeft = countItemsLeft()
  return (
    <div className="App">
      <section className="todoapp">
        <NewTaskForm
          todos={todos}
          inputText={inputText}
          onKeyUpInput={onKeyUpInput}
          inputTextHandler={inputTextHandler}
          onMinChange={onMinChange}
          onFormSubmit={onFormSubmit}
          onKeyUpInputCopy={onKeyUpInputCopy}
        />
        <section className="main">
          <TaskList
            todos={todos}
            onKeyUpInput={onKeyUpInput}
            onDeleteTask={onDeleteTask}
            onCompleteHandler={onCompleteHandler}
            onEditHandler={onEditHandler}
            onEditSubmit={onEditSubmit}
            onBlurInput={onBlurInput}
            filteredTodos={filteredTodos}
          ></TaskList>
          <Footer
            filterHandler={filterHandler}
            statusHandler={statusHandler}
            filteredTodos={filteredTodos}
            filterStatus={filterStatus}
            todos={todos}
            clearCompleted={clearCompleted}
            itemsLeft={itemsLeft}
          />
        </section>
      </section>
    </div>
  )
}

export default App
