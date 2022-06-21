import { Box, Drawer, Toolbar } from '@mui/material'
import Activities from './Activity/Activities'
import Schedules from './Schedule/Schedules'
import '../../../index.css'

const drawerWidth = 350

const RightDrawer = () => {
  return (
    <Drawer
    className='drawer'
    variant="permanent"
    sx={{
      width: {lg: 350, md: 300},
      flexShrink: 0,
      [`& .MuiDrawer-paper`]:{ width: { lg: 350, md: 300}, boxSizing: 'border-box' },
    }}
    anchor="right"
  >
    <Box sx={{bgcolor: 'rgba(25, 59, 103, 0.02)', height: '100%'}}>
      <Toolbar />
      <Schedules />
      <Activities />
    </Box>
    </Drawer>
  )
}

export default RightDrawer