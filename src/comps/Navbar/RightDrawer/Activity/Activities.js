import { Box, Divider, IconButton, Stack, Typography } from '@mui/material'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ActivityComp from './ActivityComp';

const Activities = () => {
  return (
    <Box sx={{mt: 4, pl: 2, pr: 2}}>
      <Stack sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', pl: 2, pr: 2}} direction={'row'}>
        <Typography variant='h6'>Recent Activity</Typography>

        <IconButton>
          <MoreVertIcon />
        </IconButton>
      </Stack>

      

      <ActivityComp />
      <Divider sx={{width: '80%', ml: 'auto', mr: 'auto', mt: 2}} />
      <ActivityComp />
      <Divider sx={{width: '80%', ml: 'auto', mr: 'auto', mt: 2}} />
      <ActivityComp />
      <Divider sx={{width: '80%', ml: 'auto', mr: 'auto', mt: 2}} />
      <ActivityComp />
      <Divider sx={{width: '80%', ml: 'auto', mr: 'auto', mt: 2}} />
      <ActivityComp />
      <Divider sx={{width: '80%', ml: 'auto', mr: 'auto', mt: 2}} />1
      <ActivityComp />
    </Box>
  )
}

export default Activities