import { Avatar, Box, Stack, Paper, Typography, Badge, Divider } from '@mui/material';

const ActivityComp = () => {
  return (
    <Box sx={{ pl: 2, pr: 2, display: 'flex', pt: 2, pb: 2 }}>
      <Badge sx={{mt: 1.3, ml: -1, mr: 1.5}} color="primary" badgeContent=" " variant='dot'/>
      <Stack direction={'row'}>
        <Stack direction={'column'}>
          <Typography sx={{ fontWeight: 500 }}>
            Thanks you for booking a meeting with JJ.
          </Typography>
          <Typography sx={{ fontWeight: 600, mt: 1, fontSize: 14 }}>
            Smruti Ranjan
          </Typography>
          <Typography sx={{ fontWeight: 400, fontSize: 14 }}>
            Jun 14, 2021 at 5:31 PM
          </Typography>
        </Stack>
        <Avatar sx={{width: 60, height: 60, mt: 1}}>R</Avatar>
      </Stack>
    </Box>
  );
};

export default ActivityComp;
