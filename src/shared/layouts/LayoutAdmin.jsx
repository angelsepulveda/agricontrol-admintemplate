import React from 'react';
import { Box, Toolbar,Paper } from "@mui/material";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

export default function LayoutAdmin(props) {
    const { window, children } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
  
    const handleDrawerToggle = () => {
      setMobileOpen(!mobileOpen);
    };
  
    const container = window !== undefined ? () => window().document.body : undefined;
  
    return (
      <Box sx={{ display: 'flex', background: "#ECF0F5" , height: "100vh", width: "100%"}}>
        <Navbar handleDrawerToggle={handleDrawerToggle} />
        <Sidebar handleDrawerToggle={handleDrawerToggle} mobileOpen={mobileOpen} container={container} />
        <Box component="main" sx={{ flexGrow: 1, p: 3, width: { sm: "90%" }}}>
          <Toolbar/>
          <Paper sx={{ maxWidth: "90%", margin: 'auto', overflow: 'hidden' }}>
             { children }
          </Paper>
        </Box>
      </Box>
    );
}
