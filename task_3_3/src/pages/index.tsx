import { Routes, Route, Navigate } from 'react-router-dom'
import { Users } from './users'
import { Posts } from './posts'
import { Todos } from './todos'
const Routing = () => (
  <Routes>
    <Route path="/users" element={<Users />} />
    <Route path="/posts" element={<Posts />} />
    <Route path="/todos" element={<Todos />} />
    <Route path="/" element={<Navigate to='/posts' />} />
    <Route path='*' element={<h4>404 Not Found</h4>} />
  </Routes>
)

export default Routing