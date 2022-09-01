import React from 'react';
import MenuSidebar from './MenuSidebar';
import { Drawer, Box } from "@mui/material";

export default function Sidebar(props) {
  return (
    <Box
    component="nav"
    sx={{ width: { sm: 240, xs: 0 }, flexShrink: { sm: 0 } }}
    aria-label="mailbox folders"
  >
    {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
    <Drawer
      container={props.container}
      variant="temporary"
      open={props.mobileOpen}
      onClose={props.handleDrawerToggle}
      ModalProps={{
        keepMounted: true, // Better open performance on mobile.
      }}
      sx={{
        display: { xs: 'block', sm: 'none' },
        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240 },
      }}
    >
      <MenuSidebar/>
    </Drawer>
    <Drawer
      variant="permanent"
      sx={{
        display: { xs: 'none', sm: 'block' },
        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240 },
      }}
      open
    >
      <MenuSidebar/>
    </Drawer>
  </Box>
  )
}
