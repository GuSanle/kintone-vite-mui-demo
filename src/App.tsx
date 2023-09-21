import routers from './router/index'
import { useRoutes, NavLink } from 'react-router-dom'

// import './App.css'
export default function App() {
  const GetRoutes = () => useRoutes(routers)
  return (
    <>
      <div className="App">
        <nav>
          <NavLink to="">首页</NavLink>
          <NavLink to="about">关于</NavLink>
        </nav>
        <GetRoutes></GetRoutes>
      </div>
    </>
  )
}
