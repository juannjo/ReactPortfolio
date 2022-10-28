import { AppBar, Grid, IconButton, List, Toolbar, Typography, useMediaQuery, useTheme } from "@mui/material"
import { MenuOutlined } from "@mui/icons-material"
import { Link } from "react-router-dom"
import { NavMenu } from "./NavMenu"

export const Navbar = ({ drawerWidth, closeUp }) => {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"))
  
  return (
    <AppBar
        position="fixed"
        sx={{ 
            ml: {sm: `${ drawerWidth }px`,
            display: 'block'},
            backgroundColor: 'primary.dark'
         }}
    >
        <Toolbar
        >
            <Grid container direction='row' justifyContent='space-between' alignItems='center'>
              <Link
                className="navbar-brand"
                to="/"
              > 
                Juan Navarrete
              </Link>
              {
                isMobile 
                ? (<IconButton
                    onClick={closeUp}
                    edge='start'
                    sx={{ me: 2, display: { sm: 'none' }, color: 'white'}}
                >
                  <MenuOutlined />
                </IconButton>)
                : (<NavMenu />)
              }
            </Grid>
        </Toolbar>
    </AppBar>
  )
}
