import Task from '../Task/Task'

const TaskList = ({ todos, onDeleteTask, onCompleteHandler, onEditHandler }) => {
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
        />
      ))}
      {/*  <li className="completed">
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
      </li> */}
    </ul>
  )
}

export default TaskList
