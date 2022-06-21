import {
  AppBar,
  Grid,
  Toolbar,
  Typography,
  InputBase,
  Avatar,
  Box,
  Stack,
  IconButton,
} from '@mui/material';
import { styled, alpha } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

const Nav = () => {
  return (
    <AppBar elevation={0} position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 , bgcolor: 'white', color: 'black'}}>
      <Grid container>
        <Grid item md={2}>
          <Toolbar>
            <Typography
              variant="body2"
              sx={{ fontWeight: 400, fontSize: 24, letterSpacing: '0.3rem' }}
            >
              LOGO
            </Typography>
          </Toolbar>
        </Grid>
        <Grid sx={{ pl: 2, pr: 2, pt: 1.5 }} item md={7}>
          <Search sx={{ width: '100%', border: '1px solid lightgray' , color: 'black'}}>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              fullWidth
              placeholder="search projects"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
        </Grid>
        <Grid item md={3}>
          <Toolbar>
            <Box>
              <Stack direction={'row'}>
                <Avatar>R</Avatar>
                <Stack sx={{ml: 2}} direction={'column'}>
                  <Typography>Smruti Ranjan</Typography>
                  <Typography variant='caption'>Vendor</Typography>
                </Stack>
                <IconButton sx={{color: 'black'}}>
                  <ArrowForwardIosIcon sx={{transform: 'scale(0.6)', ml: 1}}/>
                </IconButton>
              </Stack>
            </Box>
          </Toolbar>
        </Grid>
      </Grid>
    </AppBar>
  );
};

export default Nav;
