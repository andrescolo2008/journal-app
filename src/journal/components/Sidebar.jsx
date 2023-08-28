import { TurnedInNot } from "@mui/icons-material"
import { Box, Divider, Drawer, Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from "@mui/material"


export const Sidebar = ({drawerWidth = 240}) => {
  return (
    <Box
    component='nav'
    sx={{width:{ sm: drawerWidth}, flexShrink:{ sm:0} }}
    >
        <Drawer
        variant="permanent"
        open
        sx={{
            display:{xs:'block'},
            '&.MuiDrawer-paper':{boxSizing:'border-box',width:drawerWidth}
        }}

        >

                <Toolbar>
                    <Typography variant="h6" noWrap component='div'>  
                        Andrés Correa
                        
                         </Typography>
                </Toolbar>

                    <Divider/>

                    <List>
                        {
                            ['enero','febrero', 'marzo','abril '].map(text=>(

                              <ListItem key={text} disablePadding>
                                        <ListItemButton>
                                            <ListItemIcon>
                                                <TurnedInNot/>
                                            </ListItemIcon>
                                            <Grid container>
                                                <ListItemText primary={text}/>
                                                <ListItemText primary={'2023'}/>
                                            </Grid>
                                        </ListItemButton>
                              </ListItem>  
                            ))
                        }
                    </List>

        </Drawer>


    </Box>
  )
}
