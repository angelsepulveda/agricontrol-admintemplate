import * as React from 'react';
import { Box, Toolbar, Typography } from "@mui/material";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Content from "./Content";


function Layout(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <Navbar handleDrawerToggle={handleDrawerToggle} />
      <Sidebar handleDrawerToggle={handleDrawerToggle} mobileOpen={mobileOpen} container={container} />
      <Box component="main" sx={{ flexGrow: 1, p: 3, width: { sm: "100%" }}}>
        <Toolbar/>
        <Content/>
      </Box>
    </Box>
  );
}

export default Layout;