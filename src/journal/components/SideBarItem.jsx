import { Grid, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material"
import { TurnedInNot } from "@mui/icons-material"
import { useMemo } from "react"
import { useDispatch } from "react-redux"
import { setActiveNote, updateNote } from "../../store/journal"


export const SideBarItem = ({title ='',body,id,date,imageURL=[]}) => {

    const dispatch=useDispatch()

    const onClickNote= ( ) =>{
      dispatch  (setActiveNote({title,body,id,date,imageURL}))
      
    }
     
 
 const newTitle = useMemo(()=>{
    return title.length >10
    ? title.substring(0,10) + '...'
    : title;
 },[title])

 const newBody = useMemo(()=>{
    return body.length >7
    ? body.substring(0,7) + '...'
    : body;
 },[body])

    return (
    <ListItem disablePadding >

                     <ListItemButton 
                     onClick={onClickNote}>
                         <ListItemIcon>
                             <TurnedInNot/>
                         </ListItemIcon>
                         <Grid container>
                             <ListItemText primary={newTitle}/>
                             <ListItemText secondary={newBody}/>
                         </Grid>
                     </ListItemButton>
           </ListItem>
  )
}
