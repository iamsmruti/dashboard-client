import { MoreVert } from '@mui/icons-material';
import { Box, Button, IconButton, Stack, Typography } from '@mui/material';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import ProjectCard from './ProjectCard';

const CurrentProjects = () => {
  return (
    <Box sx={{ mt: 3 }}>
      <Stack sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start'}} direction={'row'}>
        <Box>
          <Typography sx={{ mb: 1 }} variant="h5">
            Current Projects
          </Typography>
          <Typography sx={{ fontWeight: 400 }} variant="caption">
            Projects that are currently in progress
          </Typography>
        </Box>

        <Stack direction={'row'}>
          <Button sx={{border: '0.5px solid gray', color: 'black', mr: 2, textTransform: 'capitalize'}} endIcon={<FilterAltIcon/>}>Filter</Button>
          <IconButton sx={{border: '0.5px solid gray', borderRadius: '10%'}}>
            <MoreVert />
          </IconButton>
        </Stack>
      </Stack>

      <Box className='caraousal' sx={{display: 'flex', overflow: 'scroll', width: '100%', mt: 1}}>
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </Box>
    </Box>
  );
};

export default CurrentProjects;
