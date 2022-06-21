import {
  Box,
  Stack,
  Typography,
  IconButton,
  Avatar,
  AvatarGroup,
  Button,
} from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import AddIcon from '@mui/icons-material/Add';

const ScheduleComp = () => {
  return (
    <Box sx={{ pl: 0.5, pr: 0.5, mb: 2 }}>
      <Stack
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
        direction={'row'}
      >
        <Typography color={'primary'} sx={{ fontSize: 12 }}>
          30 minute call with clients
        </Typography>

        <IconButton>
          <MoreVertIcon />
        </IconButton>
      </Stack>

      <Typography sx={{ fontWeight: 600 }}>Project Discovery Call</Typography>

      <Stack sx={{display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',}} direction={'row'}>
        <Box >
          <Typography component={'span'} variant='caption' sx={{fontSize: 10}}>Due Soon</Typography>
          <Typography component={'span'} variant='caption' sx={{fontSize: 10, ml: 1, fontWeight: 800}}>09:20 am</Typography>
          <AvatarGroup sx={{mt: 2}} spacing={10} max={3} total={8}>
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
            <Avatar alt="Agnes Walker" src="/static/images/avatar/4.jpg" />
            <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
          </AvatarGroup>
        </Box>
        <Button variant='contained' sx={{textTransform: 'capitalize', height: 30, mt: 5}} startIcon={<AddIcon />}>Invite</Button>
      </Stack>
    </Box>
  );
};

export default ScheduleComp;
