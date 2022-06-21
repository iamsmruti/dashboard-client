import { Box } from '@mui/material'
import Navbar from './Navbar'

const Layout = ({children}) => {
  return (
    <Box>
        <Navbar>
            {children}
        </Navbar>
    </Box>
  )
}

export default Layout