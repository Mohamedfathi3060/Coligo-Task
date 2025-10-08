import { Box, CssBaseline, Toolbar } from '@mui/material';
import { useState } from 'react';
import Sidebar from './Sidebar';

interface MainStructureProps {
  children: React.ReactNode;
}
function MainStructure({ children }: MainStructureProps) {
  let [drawerWidth, setDrawerWidth] = useState(240);
  return (
    <Box sx={{ display: 'flex', backgroundColor: '#e6e6e6' }}>
      <CssBaseline />

      <Sidebar />
      <Box
        component='main'
        sx={{
          display: 'flex',
          flexDirection: 'column',
          flexGrow: 1,
          m: 3,
          mt: 6,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />

        {children}
      </Box>
    </Box>
  );
}
export default MainStructure;
