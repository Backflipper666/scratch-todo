import Task from '../Task/Task'

const TaskList = ({
  todos,
  onDeleteTask,
  onCompleteHandler,
  onEditHandler,
  onEditSubmit,
  onBlurInput,
  filteredTodos,
  min,
}) => {
  return (
    <ul className="todo-list">
      {filteredTodos.map((todo) => (
        <Task
          completed={todo.completed}
          id={todo.id}
          status={todo.status}
          text={todo.text}
          key={todo.id}
          time={todo.time}
          todo={todo}
          todos={todos}
          onDeleteTask={onDeleteTask}
          onCompleteHandler={onCompleteHandler}
          onEditHandler={onEditHandler}
          onEditSubmit={onEditSubmit}
          onBlurInput={onBlurInput}
          min={min}
        />
      ))}
    </ul>
  )
}

export default TaskList
