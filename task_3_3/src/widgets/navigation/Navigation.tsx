import styles from './index.module.scss'
import { Link } from 'react-router-dom'
export const Navigation = () => {
  return (
    <header>
      <nav>
        <ul className={styles.list}>
          <li><Link to='/posts'>Posts</Link></li>
          <li><Link to='/users'>Users</Link></li>
          <li><Link to='/todos'>Todos</Link></li>
        </ul>
      </nav>
    </header>
  )
}
