import { Box } from "@mui/material"
import { Navbar,Sidebar  } from "../components";


const drawerWidth = 182;

export const JournalLayout = ({children}) => {
  return (
    
<Box sx={{display:'flex'}}>

        <Navbar drawerWidth={drawerWidth}/>
        <Sidebar drawerWidth={drawerWidth}/>
    {/* Sidebar  drawerWidth*/}

        <Box 
        component='main'
        sx={{flexGrow:1,p:3}}
        >
        
        {/* Toolbar */}

        {children}

        </Box>

</Box>

  )
}