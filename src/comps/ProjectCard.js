import { Paper, Stack, Typography, Slider, Avatar, Button } from '@mui/material'
import EventIcon from '@mui/icons-material/Event';

const ProjectCard = () => {
  return (
    <Paper elevation={0} sx={{mr: 1, p: 2, border: '1px solid lightgray', minWidth: '300px'}}>
        <Typography variant='h6' sx={{fontWeight: 800}}>Contsruction Project</Typography>
        <Typography variant='caption'>Property Name</Typography>

        <Stack sx={{display: 'flex', justifyContent: 'space-between', mt: 2, alignItems: 'center'}} direction={'row'}>
            <Typography variant='body2' sx={{}}>$ 100 - 800</Typography>
            <EventIcon sx={{ml: 'auto'}}/>
            <Typography variant='body2' sx={{ml: 1}}>Deadline - 25 May</Typography>
        </Stack>
        <Slider defaultValue={75} sx={{height: 10}}/>
        <Stack sx={{display: 'flex', justifyContent: 'space-between',mt: -1.5, alignItems: 'center'}} direction={'row'}>
            <Typography variant='caption' sx={{color: 'gray'}}>Progress Bar</Typography>
            <Typography variant='caption' sx={{ml: 1, color: 'gray'}}>75%</Typography>
        </Stack>

        <Stack sx={{display: 'flex', justifyContent: 'space-between',mt: 1.5, alignItems: 'center'}} direction={'row'}>
            <Avatar sx={{mr: 1}}/>
            <Typography sx={{mr: 'auto'}} variant='caption'  >Smruti Ranjan</Typography>
            <Button variant='contained'>View</Button>
        </Stack>
    </Paper>
  )
}

export default ProjectCard