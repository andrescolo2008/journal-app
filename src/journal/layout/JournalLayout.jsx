import { Box } from "@mui/material"
import { Navbar,Sidebar  } from "../components";


const drawerWidth = 240;

export const JournalLayout = ({children}) => {
  return (
    
<Box sx={{display:'flex'}}
    className=" animate__animated animate__fadeIn animate__faster">

        <Navbar drawerWidth={drawerWidth}/>
        <Sidebar drawerWidth={drawerWidth}/>
    {/* Sidebar  drawerWidth*/}

        <Box 
        component='main'
        sx={{flexGrow:1,p:8}}
        >
        
        {/* Toolbar */}

        {children}

        </Box>

</Box>

  )
}
