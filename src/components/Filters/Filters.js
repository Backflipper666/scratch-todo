import React from 'react'

export default class Filters extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      allSelected: true,
      activeSelected: false,
      completedSelected: false,
    }
    this.selectAll = this.selectAll.bind(this)
    this.selectActive = this.selectActive.bind(this)
    this.selectCompleted = this.selectCompleted.bind(this)
  }

  selectAll() {
    this.setState({ allSelected: true, activeSelected: false, completedSelected: false })
  }
  selectActive() {
    this.setState({ allSelected: false, activeSelected: true, completedSelected: false })
  }
  selectCompleted() {
    this.setState({ allSelected: false, activeSelected: false, completedSelected: true })
  }

  render() {
    const all = this.state.allSelected
    const active = this.state.activeSelected
    const completed = this.state.completedSelected

    return (
      <>
        {' '}
        <li>
          <button onClick={this.selectAll} className={all ? 'selected' : null}>
            All
          </button>
        </li>
        <li>
          <button onClick={this.selectActive} className={active ? 'selected' : null}>
            Active
          </button>
        </li>
        <li>
          <button onClick={this.selectCompleted} className={completed ? 'selected' : null}>
            Completed
          </button>
        </li>
      </>
    )
  }
}
