import { Box, Grid } from "@mui/material"
import LeftDrawer from "./LeftDrawer"
import Nav from "./Nav"
import RightDrawer from "./RightDrawer"

const Navbar = ({children}) => {
  return (
    <Box>
      <Box>
        <Nav />
      </Box>
      <Box>
        <Grid sx={{mt: 10}} container>
          <Grid item md={1.8}>
            <LeftDrawer />
          </Grid>
          <Grid item md={7.2}>
            {children}
          </Grid>
          <Grid item md={2.8}>
            <RightDrawer />
          </Grid>
        </Grid>
      </Box>
    </Box>
  )
}

export default Navbar
