import { useTodos } from "../store/todos";
import { useSearchParams} from "react-router-dom"


export const Todos = () => {
  const {todos, toggleTodoAsCompleted,handleDeletedTodo} = useTodos();

  const [searchParams] = useSearchParams();
  let todosData = searchParams.get("todos");
  console.log(todosData);
  

  let filterData = todos;
 
  if(todosData === "active"){
    filterData = filterData.filter((task)=> !task.completed !)
  }
  if(todosData === "completed"){
    filterData = filterData.filter((task)=> task.completed)
  }
  


  return (
    <ul className="main-task">
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
