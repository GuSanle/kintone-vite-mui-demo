import routers from './router/index'
import { useRoutes } from 'react-router-dom'
import * as React from 'react'
import BottomNavigation from '@mui/material/BottomNavigation'
import BottomNavigationAction from '@mui/material/BottomNavigationAction'
import RestoreIcon from '@mui/icons-material/Restore'
import FavoriteIcon from '@mui/icons-material/Favorite'
import Paper from '@mui/material/Paper'

// import './App.css'
export default function App() {
  const GetRoutes = () => useRoutes(routers)
  const [value, setValue] = React.useState(0)

  return (
    <>
      <div className="App">
        <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
          <BottomNavigation
            showLabels
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue)
            }}
          >
            <BottomNavigationAction label="Home" href="#" icon={<RestoreIcon />} />
            <BottomNavigationAction label="About" href="#about" icon={<FavoriteIcon />} />
          </BottomNavigation>
        </Paper>

        <GetRoutes></GetRoutes>
      </div>
    </>
  )
}


