import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { createTheme, ThemeProvider } from '@mui/material';
import Layout from './comps/Layout';
import Home from './pages/Home';
import { blue, purple } from '@mui/material/colors';
import Projects from './pages/Projects';
import Calender from './pages/Calender';
import Messages from './pages/Messages';
import Notifications from './pages/Notifications';
import Contacts from './pages/Contacts';
import Promotions from './pages/Promotions';


const theme = createTheme({
  palette: {
    primary: blue,
    secondary: purple,
  },
  typography: {
    fontFamily: 'Quicksand',
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 700,
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1300,
      xl: 1536,
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/calender" element={<Calender />} />
            <Route path="/messages" element={<Messages />} />
            <Route path="/notifs" element={<Notifications />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/promotions" element={<Promotions />} />
          </Routes>
        </Layout>
      </Router>
    </ThemeProvider>
  );
}

export default App;
