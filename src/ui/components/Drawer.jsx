import { ArrowBack, Close } from "@mui/icons-material"
import {  Drawer, List, ListItem, ListItemText } from "@mui/material"
import { NavLink } from "react-router-dom"

export const MainDrawer = ({ open, closeUp }) => {

  const drawerWidth = 240

  return (
    <Drawer 
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: drawerWidth,
          backgroundColor:"primary.light",
      }}}
      variant="temporary"
      open={ open }
      anchor='right'
    >
        <Close
          onClick={ closeUp } 
        />
        <List>

         <ListItem>
            <ListItemText>
              <NavLink className={ ({isActive}) => `nav-item nav-link ${isActive ? 'active': ''}  onLink`} to="/">Home</NavLink>
            </ListItemText>
          </ListItem>

          <ListItem>
            <ListItemText>
              <NavLink className={ ({isActive}) => `nav-item nav-link ${isActive ? 'active': ''} onLink`} to="/about">About Me</NavLink>
            </ListItemText>
          </ListItem>

          <ListItem >
            <ListItemText>
              <NavLink className={ ({isActive}) => `nav-item nav-link ${isActive ? 'active': ''} onLink`} to="/projects">Projects</NavLink>
            </ListItemText>
          </ListItem>

          <ListItem>
            <ListItemText>
              <NavLink className={ ({isActive}) => `nav-item nav-link ${isActive ? 'active': ''} onLink`} to="/contact">Contact</NavLink>
            </ListItemText>
          </ListItem>
          
        </List>
      </Drawer>
  )
}
