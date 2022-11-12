import React, { useState } from "react";
import { AppBar, Tabs, Toolbar, Typography, Tab } from "@mui/material";
import CodeOffIcon from "@mui/icons-material/CodeOff";
import CodeIcon from "@mui/icons-material/Code";
import MobileNav from "./mobileNav";
const NavBar = () => {
  const [value, setValue] = useState();
  return (
    <React.Fragment>
      <AppBar sx={{ background: "#00003b" }}>
        <Toolbar>
          <CodeIcon />
          <Typography>UwDjanati</Typography>
          <CodeOffIcon />

          <Tabs
            sx={{ marginLeft: "auto" }}
            textColor="inherit"
            value={value}
            onChange={(e, value) => setValue(value)}
            indicatorColor="secondary"
          >
            <Tab label="Home" />
            <Tab label="About Me" />
            <Tab label="My Skills" />
            <Tab label="Contact Me" />
          </Tabs>
        </Toolbar>
        <MobileNav/>
      </AppBar>
    </React.Fragment>
  );
};

export default NavBar;
