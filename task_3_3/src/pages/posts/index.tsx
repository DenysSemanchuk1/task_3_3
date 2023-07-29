import { ThunkDispatch } from "@reduxjs/toolkit"
import { PostsList } from "entities/posts"
import { fetchPosts } from "entities/posts"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"

export const Posts = () => {
  const { posts, isError, isLoading } = useSelector((store: any) => store.posts)
  const dispatch = useDispatch<ThunkDispatch<any, any, any>>()
  useEffect(() => {
    dispatch(fetchPosts())
  }, [])

  if (isError.show) {
    return <h3>Error: {isError.message}</h3>
  }

  if (isLoading) return <h3>Loding...</h3>
  return (
    <section>
      <div className="container">
        <PostsList posts={posts} />
      </div>
    </section>
  )
}
