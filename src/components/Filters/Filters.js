import React, { useState } from 'react'

const Filters = () => {
  const [allSelected, setAllSelected] = useState(true)
  const [activeSelected, setActiveSelected] = useState(false)
  const [completedSelected, setCompletedSelected] = useState(false)

  const selectAll = () => {
    setAllSelected(true)
    setActiveSelected(false)
    setCompletedSelected(false)
  }
  const selectActive = () => {
    setAllSelected(false)
    setActiveSelected(true)
    setCompletedSelected(false)
  }
  const selectCompleted = () => {
    setAllSelected(false)
    setActiveSelected(false)
    setCompletedSelected(true)
  }

  return (
    <>
      <li>
        <button onClick={selectAll} className={allSelected ? 'selected' : null}>
          All
        </button>
      </li>
      <li>
        <button onClick={selectActive} className={activeSelected ? 'selected' : null}>
          Active
        </button>
      </li>
      <li>
        <button onClick={selectCompleted} className={completedSelected ? 'selected' : null}>
          Completed
        </button>
      </li>
    </>
  )
}

export default Filters
