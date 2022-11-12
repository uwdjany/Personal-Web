import React, { useState } from "react";
import { Drawer,ListItemButton, List,ListItemIcon,ListItemText, IconButton} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
const MobileNav = () => {
  const [openDrawer,setOpenDrawer] = useState(false)
  return (
    <React.Fragment>
      <Drawer open={openDrawer} onClose={()=> setOpenDrawer(false)}>
        <List>
          <ListItemButton>
          <ListItemIcon>
          <ListItemText>Login</ListItemText>
          </ListItemIcon>
          
          </ListItemButton>
        </List>
      </Drawer>

      <IconButton onClick={()=>setOpenDrawer(!openDrawer)}>
      <MenuIcon sx={{background:"white"}}/>
      </IconButton>
    </React.Fragment>
  );
};

export default MobileNav;
