import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import Badge from '@mui/material/Badge';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DashboardIcon from '@mui/icons-material/Dashboard';
import DescriptionIcon from '@mui/icons-material/Description';
import TodayIcon from '@mui/icons-material/Today';
import SendIcon from '@mui/icons-material/Send';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import CallIcon from '@mui/icons-material/Call';
import CrisisAlertIcon from '@mui/icons-material/CrisisAlert';

import { useNavigate, useLocation } from 'react-router-dom';
import { blue } from '@mui/material/colors';
import { useState, useEffect } from 'react';
import { Box } from '@mui/material';
import '../../index.css'

const drawerWidth = 240;

const LeftDrawer = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [navlink, setNavlink] = useState('/');

  console.log(navlink);

  const selected = {borderLeft: '8px solid #14a9f9', color: '#14a9f9'}
  const notSelected = {borderLeft: '8px solid rgba(25, 59, 103, 0.02)'}
  return (
    <Drawer
      className="drawer"
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
      }}
      anchor="left"
    >
      <Box sx={{ bgcolor: 'rgba(25, 59, 103, 0.02)', height: '100%' }}>
        <Toolbar />
        <List sx={{ mt: 5 }}>
          <ListItem style={navlink === '/' ? selected : notSelected} disablePadding>
            <ListItemButton onClick={() => {
                navigate('/')
                setNavlink('/')
              }}>
              <ListItemIcon>
                <DashboardIcon color='primary'/>
              </ListItemIcon>
              <ListItemText primary={'Dashboard'} />
            </ListItemButton>
          </ListItem>

          <ListItem style={navlink === '/projects' ? selected : notSelected} disablePadding>
            <ListItemButton onClick={() => {
              navigate('/projects')
              setNavlink('/projects')
              }}>
              <ListItemIcon>
                <DescriptionIcon color='primary'/>
              </ListItemIcon>
              <ListItemText primary={'Projects'} />
            </ListItemButton>
          </ListItem>

          <ListItem style={navlink === '/calender' ? selected : notSelected} disablePadding>
            <ListItemButton onClick={() => {
              navigate('/calender')
              setNavlink('/calender')
              }}>
              <ListItemIcon>
                <TodayIcon color='primary'/>
              </ListItemIcon>
              <ListItemText primary={'Calender'} />
            </ListItemButton>
          </ListItem>

          <ListItem style={navlink === '/messages' ? selected : notSelected} disablePadding>
            <ListItemButton onClick={() => {
              navigate('/messages')
              setNavlink('/messages')
              }}>
              <ListItemIcon>
                <SendIcon color='primary'/>
              </ListItemIcon>
              <ListItemText primary={'Messages'} />
              <Badge sx={{mr: 2, borderRadius: '10%'}} badgeContent={456} color="primary" />
            </ListItemButton>
          </ListItem>

          <ListItem style={navlink === '/notifs' ? selected :notSelected} disablePadding>
            <ListItemButton onClick={() => {
              navigate('/notifs')
              setNavlink('/notifs')
              }}>
              
              <ListItemIcon>
                <NotificationsActiveIcon color='primary'/>
              </ListItemIcon>
              <ListItemText primary={'Notifications'} />
              <Badge sx={{mr: 2, borderRadius: '10%'}} badgeContent={456} color="primary" />
            </ListItemButton>
          </ListItem>

          <ListItem style={navlink === '/contacts' ? selected : notSelected} disablePadding>
            <ListItemButton onClick={() => {
              navigate('/contacts')
              setNavlink('/contacts')
              }}>
              <ListItemIcon>
                <CallIcon color='primary'/>
              </ListItemIcon>
              <ListItemText primary={'Contacts'} />
            </ListItemButton>
          </ListItem>
        </List>
        <Typography sx={{ ml: 2.5, mt: 3, mb: 1.5 }} variant="body2">
          Promotions
        </Typography>
        <List>
          <ListItem style={navlink === '/promotions' ? selected : notSelected} disablePadding>
            <ListItemButton onClick={() => {
              navigate('/promotions')
              setNavlink('/promotions')
              }}>
              <ListItemIcon>
                <CrisisAlertIcon color='primary'/>
              </ListItemIcon>
              <ListItemText primary={'Promotions'} />
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </Drawer>
  );
};

export default LeftDrawer;
