import { Box, Grid, Typography, Paper, Stack, Button } from '@mui/material';
import CellTowerIcon from '@mui/icons-material/CellTower';
import HourglassTopIcon from '@mui/icons-material/HourglassTop';
import TaskIcon from '@mui/icons-material/Task';
import blob from '../img/blob.svg'

const OverviewSection = () => {
  const blobs ={
    position : 'absolute',
    width: 200,
    zIndex: 4
  }
  return (
    <Grid sx={{mt: 2}} container spacing={{md: 3, sm: 1}}>
        <Grid item md={5}>
          <Paper
            elevation={0}
            sx={{ bgcolor: '#7a9fff', p: 2, color: 'white', position: 'relative' }}
          >
            <Stack
              sx={{ display: 'flex', justifyContent: 'space-between' }}
              direction={'row'}
            >
              <Button
                sx={{
                  fontSize: 10,
                  color: 'white',
                  bgcolor: 'rgba(74, 69, 71, 0.4)',
                  textTransform: 'capitalize'
                }}
                variant="contained"
                startIcon={<CellTowerIcon />}
              >
                Live projects
              </Button>
              <Button
                sx={{ fontSize: 10, bgcolor: 'rgba(74, 69, 71, 0.4)' , textTransform: 'capitalize'}}
                variant="contained"
              >
                View All
              </Button>
            </Stack>

            <Stack sx={{mt: 4, zIndex: 5}}>
              <Typography variant='h2' sx={{fontWeight: 900}}>56</Typography>
              <Typography variant='caption' sx={{fontWeight: 600}}>Currently, the projects is in progress.</Typography>
            </Stack>
          </Paper>
        </Grid>
        <Grid item md={3.5}>
          <Paper
            elevation={0}
            sx={{ bgcolor: '#7ad1ff', p: 2, color: 'white' }}
          >
            <Stack
              sx={{ display: 'flex', justifyContent: 'space-between' }}
              direction={'row'}
            >
              <Button
                sx={{
                  fontSize: 10,
                  color: 'white',
                  bgcolor: 'rgba(74, 69, 71, 0.4)',
                  textTransform: 'capitalize'
                }}
                variant="contained"
                startIcon={<HourglassTopIcon />}
              >
                In Progress
              </Button>
            </Stack>

            <Stack sx={{mt: 4}}>
              <Typography variant='h2' sx={{fontWeight: 900}}>56</Typography>
              <Typography variant='caption' sx={{fontWeight: 600}}>Projects is in progress.</Typography>
            </Stack>
          </Paper>
        </Grid>
        <Grid item md={3.5}>
          <Paper
            elevation={0}
            sx={{ bgcolor: '#b97aff', p: 2, color: 'white' }}
          >
            <Stack
              sx={{ display: 'flex', justifyContent: 'space-between' }}
              direction={'row'}
            >
              <Button
                sx={{
                  fontSize: 10,
                  color: 'white',
                  bgcolor: 'rgba(74, 69, 71, 0.4)',
                  textTransform: 'capitalize'
                }}
                variant="contained"
                startIcon={<TaskIcon />}
              >
                Completed
              </Button>
            </Stack>

            <Stack sx={{mt: 4}}>
              <Typography variant='h2' sx={{fontWeight: 900}}>56</Typography>
              <Typography variant='caption' sx={{fontWeight: 600}}>Completed Projects.</Typography>
            </Stack>
          </Paper>
        </Grid>
      </Grid>
  )
}

export default OverviewSection