import { Grid, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material"
import { TurnedInNot } from "@mui/icons-material"
import { useMemo } from "react"
import { useDispatch } from "react-redux"
import { setActiveNote } from "../../store/journal"


export const SideBarItem = ({title ='',body,id,date,imageURL=[]}) => {

    const dispatch=useDispatch()

    const onClickNote= ( ) =>{
      dispatch  (setActiveNote({title,body,id,date,imageURL}))
    }
     
 
 const newTitle = useMemo(()=>{
    return title.length >12
    ? title.substring(0,12) + '...'
    : title;
 },[title])

    return (
    <ListItem  
    disablePadding
    >

                     <ListItemButton 
                     onClick={onClickNote}>
                         <ListItemIcon>
                             <TurnedInNot/>
                         </ListItemIcon>
                         <Grid container>
                             <ListItemText primary={newTitle}/>
                             <ListItemText primary={body}/>
                         </Grid>
                     </ListItemButton>
           </ListItem>
  )
}
