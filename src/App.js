import React from 'react'

import './App.css'
import NewTaskForm from './components/NewTaskForm/NewTaskForm'

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.addItem = this.addItem.bind(this)
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
  render() {
    return (
      <div className="App">
        <section className="todoapp">
          <NewTaskForm />
          <section className="main">
            <ul className="todo-list">
              <li className="completed">
                <div className="view">
                  <input className="toggle" type="checkbox" />
                  <label>
                    <span className="description">Completed task</span>
                    <span className="created">created 17 seconds ago</span>
                  </label>
                  <button className="icon icon-edit" />
                  <button className="icon icon-destroy" />
                </div>
              </li>
              <li className="editing">
                <div className="view">
                  <input className="toggle" type="checkbox" />
                  <label>
                    <span className="description">Editing task</span>
                    <span className="created">created 5 minutes ago</span>
                  </label>
                  <button className="icon icon-edit" />
                  <button className="icon icon-destroy" />
                </div>
                <input type="text" className="edit" value="Editing task" />
              </li>
              <li>
                <div className="view">
                  <input className="toggle" type="checkbox" />
                  <label>
                    <span className="description">Active task</span>
                    <span className="created">created 5 minutes ago</span>
                  </label>
                  <button className="icon icon-edit" />
                  <button className="icon icon-destroy" />
                </div>
              </li>
            </ul>
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
