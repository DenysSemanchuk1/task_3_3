import { Post } from "../model/types"

export const PostsList = (props: any) => {
  const posts: Post[] = props.posts
  return (
    <ul>
      {posts.map(({ id, title, text }) => (
        <li key={id}>
          <h4>{title}</h4>
          <p>{text}</p>
        </li>
      ))}
    </ul>
  )
}
