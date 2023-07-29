import { ToDo } from "../model/types"

export const TodosList = (props: any) => {
  const todos: ToDo[] = props.todos;
  return (
    <ul>
      {todos.map(({ name, id }) => (
        <li key={id}>
          <h4>{name}</h4>
        </li>
      ))}
    </ul>
  )
}
