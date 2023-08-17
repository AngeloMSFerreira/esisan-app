import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Box, Stack, Typography, Drawer, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { CloudUpload, Equalizer } from '@material-ui/icons';
import UploadScreen from './screens/UploadScreen';
import ResultsScreen from './screens/ResultsScreen';

function App() {
  return (
    <Router>
      <Box sx={{ display: 'flex' }}>
        {/* Left-hand side menu section */}
        <Drawer
          variant="permanent"
          sx={{
            width: '240px',
            flexShrink: 0,
            '& .MuiDrawer-paper': {
              width: '240px',
              boxSizing: 'border-box',
            },
          }}
        >
          <Stack direction="column" spacing={2} sx={{ p: 2 }}>
            <Typography variant="h6">ESISAN</Typography>
            <List>
              <ListItem button component={Link} to="/">
                <ListItemIcon>
                  <CloudUpload />
                </ListItemIcon>
                <ListItemText primary="Documents Upload" />
              </ListItem>
            </List>
          </Stack>
        </Drawer>

        {/* Main content section */}
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <Routes> {/* Wrap your Route components with Routes */}
            <Route path="/" element={<UploadScreen />} />
            <Route path="/results" element={<ResultsScreen />} />
          </Routes>
        </Box>
      </Box>
    </Router>
  );
}

export default App;
