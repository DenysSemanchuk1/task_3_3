import { useSelector, useDispatch } from "react-redux"
import { ThunkDispatch } from "@reduxjs/toolkit";
import { useEffect } from 'react'
import { fetchUsers } from "entities/users";
import { UsersList } from "entities/users/ui/UsersList";
export const Users = () => {
  const { users, isLoading, isError } = useSelector((state: any) => state.users) as any;
  const dispatch = useDispatch<ThunkDispatch<any, any, any>>()
  useEffect(() => {
    dispatch(fetchUsers())
  }, [])

  if (isError.show) return <h3>Error: {isError.message}</h3>

  if (isLoading) return <h3>Loading...</h3>

  return (
    <section>
      <div className="container">
        <UsersList users={users} />
      </div>
    </section>
  )
}
