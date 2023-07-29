import { ThunkDispatch } from "@reduxjs/toolkit";
import { TodosList } from "entities/todos";
import { fetchTodos } from "entities/todos/api";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"

export const Todos = () => {
  const { todos, isLoading, isError } = useSelector((store: any) => store.todos);
  const dispatch = useDispatch<ThunkDispatch<any, any, any>>()

  useEffect(() => {
    dispatch(fetchTodos())
  }, [])

  if (isError.show) return <h3>Error:{isError.message}</h3>

  if (isLoading) return <h3>'Loading...'</h3>
  return (
    <section>
      <div className="container">
        <TodosList todos={todos} />
      </div>
    </section>
  )
}
