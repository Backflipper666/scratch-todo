import Task from '../Task/Task'

const TaskList = ({ todos, onDeleteTask, onCompleteHandler, onEditHandler, onEditSubmit }) => {
  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <Task
          completed={todo.completed}
          id={todo.id}
          status={todo.status}
          text={todo.text}
          key={todo.id}
          todo={todo}
          todos={todos}
          onDeleteTask={onDeleteTask}
          onCompleteHandler={onCompleteHandler}
          onEditHandler={onEditHandler}
          onEditSubmit={onEditSubmit}
        />
      ))}
    </ul>
  )
}

export default TaskList
