import { Box, Divider, IconButton, Stack, Typography } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ScheduleComp from './ScheduleComp';

const Schedules = () => {
  return (
    <Box>
      <Stack
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          pl: 2,
          pr: 2,
        }}
        direction={'row'}
      >
        <Typography variant="h6">Upcoming Meetings</Typography>

        <IconButton>
          <MoreVertIcon />
        </IconButton>
      </Stack>

      <Divider sx={{ width: '80%', ml: 'auto', mr: 'auto', mt: 2 }} />

      <Accordion defaultExpanded={true} component={'Box'}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Today's Meeting</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <ScheduleComp />
          <ScheduleComp />
        </AccordionDetails>
      </Accordion>
      <Accordion component={'Box'}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Scheduled Meetings</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <ScheduleComp />
          <ScheduleComp />
          <ScheduleComp />
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default Schedules;
