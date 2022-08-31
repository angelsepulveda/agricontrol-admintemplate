import React from 'react';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import Divider from '@mui/material/Divider';
import Toolbar from '@mui/material/Toolbar';
import Collapse from '@mui/material/Collapse';
import StarBorder from '@mui/icons-material/StarBorder';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';

export default function MenuSidebar() {

  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  const item = {
    py: '2px',
    px: 3,
    color: 'rgba(255, 255, 255, 0.7)',
    '&:hover, &:focus': {
      bgcolor: '#00A65A',
    },
  };

  return (
    <div>
      <Toolbar />
      <Divider />
      <List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton sx={item}>
              <ListItemIcon sx={{ color: '#fff' }}>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} sx={{ color: '#fff' }}/>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton sx={item}>
              <ListItemIcon sx={{ color: '#fff' }}>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} sx={{ color: '#fff' }}/>
            </ListItemButton>
          </ListItem>
        ))}
         <ListItemButton onClick={handleClick} sx={item}>
        <ListItemIcon sx={{ color: '#fff' }}>
          <InboxIcon />
        </ListItemIcon>
        <ListItemText primary="Inbox" sx={{ color: '#fff' }} />
        {open ? <ExpandLess sx={{ color: '#fff' }}/> : <ExpandMore sx={{ color: '#fff' }}/>}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ 
              py: '2px',
              px: 5,
              color: 'rgba(255, 255, 255, 0.7)',
              '&:hover, &:focus': {
                bgcolor: '#00A65A',
              },
           }}>
            <ListItemIcon sx={{ color: '#fff' }}>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="Starred" />
          </ListItemButton>
        </List>
      </Collapse>
      </List>
    </div>
  )
}
