import { Toolbar } from "@mui/material"
import { Box } from "@mui/system"
import { useState } from "react"
import { Navbar } from "../"
import { MainDrawer } from "../components/Drawer"

export const MainLayout = ({ children }) => {
    const drawerWidth = 'calc(100% - 240px)'

    const [openDrawer, setOpenDrawer] = useState(false)

    const onClose = () => {
      setOpenDrawer(!openDrawer)
  }

  return (
    <Box 
      sx={{ display: 'flex' }} 
      className="animate__animated animate__fadeIn animate__faster">

        <Navbar 
          drawerWidth={ drawerWidth } 
          closeUp ={ onClose } 
          itsOpen= { openDrawer }
        />

        <MainDrawer 
          open={ openDrawer } 
          closeUp={ onClose }
        />

        <Box 
            component='main'
            sx={{ flexGrow: 1, p: 3 }}
        >
            <Toolbar />

            { children }
            
        </Box>
    </Box>
  )
}
