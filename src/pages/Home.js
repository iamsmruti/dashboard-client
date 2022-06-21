import { Box, Container, Typography } from '@mui/material';
import OverviewSection from '../comps/OverviewSection';
import CurrentProjects from '../comps/CurrentProjects';
import PendingInvoice from '../comps/PendingInvoice';

const Home = () => {
  return (
    <Box sx={{ pb: 3, ml: 5, mr: 1}}>
      <Typography sx={{ mb: 1 }} variant="h5">
        Welcome Back, Smruti!
      </Typography>
      <Typography sx={{ fontWeight: 400 }} variant="caption">
        Have a look at the Quick Progress Bar.
      </Typography>

      <OverviewSection />
      <CurrentProjects />
      <PendingInvoice />
    </Box>
  );
};

export default Home;
