import { Grid } from "@mui/material"
import { NavLink } from "react-router-dom"

export const NavMenu = () => {
  return (
    <Grid>
        <div 
          style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-around'}}
        >
          <NavLink
            className={ ({isActive}) => `nav-item nav-link ${isActive ? 'active': ''} navLink`}
            to="/"
          >
            Home
          </NavLink>                      
          
          <NavLink 
            className={ ({isActive}) => `nav-item nav-link ${isActive ? 'active': ''} ms-4 navLink`}
            to="/about"
          >
            About Me
          </NavLink>  

          <NavLink 
            className={ ({isActive}) => `nav-item nav-link ${isActive ? 'active': ''} ms-4 navLink`}
            to='/projects'
          >
            Projects
          </NavLink>  

          <NavLink
            className={ ({isActive}) => `nav-item nav-link ${isActive ? 'active': ''} ms-4 navLink`}
            to='/contact'
          >
            Contact
          </NavLink>
          
        </div>
    </Grid>
  )
}
