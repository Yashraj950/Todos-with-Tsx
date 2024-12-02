import { useTodos } from "../store/todos";


export const Todos = () => {
  const {todos, toggleTodoAsCompleted,handleDeletedTodo} = useTodos();
  let filterData = todos;
  return (
    <ul>
      {
        filterData.map((todo)=> {
          return <li key={todo.id}>
            <input type="checkbox"  id={`todo-${todo.id}`}
            checked={todo.completed}
            onChange={()=>toggleTodoAsCompleted(todo.id)}
            />
            <label htmlFor={`todo-${todo.id}`}>{todo.task}</label>
            {
              todo.completed && (
                <button type="button" onClick={()=>handleDeletedTodo(todo.id)}>Deleted</button>
              )
            }

          </li>

        })
      }
    </ul>
    
  )
}
