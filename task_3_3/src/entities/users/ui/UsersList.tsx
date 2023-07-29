import { User } from "../model/types";

export const UsersList = (props: any) => {
  const users: User[] = props.users;
  return (
    <ul>
      {users.map(({ name, email, id }) => (
        <li key={id}>
          <h4>{name}</h4>
          <a href={`mailto:${email}`}>{email}</a>
        </li>
      ))}
    </ul>
  )
}
