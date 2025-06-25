import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Button,
  Box,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const Navbar = () => {
  const [menuOpened, setMenuOpened] = useState(false);

  const toggleDrawer = (open) => () => {
    setMenuOpened(open);
  };

  const menuItems = [
    { label: "Homes", link: "#homes" },
    { label: "Why Choose Us", link: "#value" },
    { label: "Reach Us", link: "#contact-us" },
    { label: "Book a Tour", link: "#get-started" },
  ];

  return (
    <>
      <AppBar position="static" sx={{ backgroundColor: "#1e1e1e" }}>
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography variant="h3" component="h3" fontFamily="'Playfair Display', serif">Luxe Villas</Typography>
          <Box sx={{ display: { xs: "none", md: "flex" }, gap: 2 }}>
            {menuItems.map((item) => (
              <Button
                key={item.label}
                href={item.link}
                color="inherit"
              >
                {item.label}
              </Button>
            ))}
            <Button
              variant="outlined"
              color="secondary"
              href="mailto:resh@gmail.com"
            >
              Enquire Now            </Button>
          </Box>

          
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer(true)}
            sx={{ display: { md: "none" } }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      
      <Drawer anchor="right" open={menuOpened} onClose={toggleDrawer(false)}>
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <List>
            {menuItems.map((item) => (
              <ListItem button key={item.label} component="a" href={item.link}>
                <ListItemText primary={item.label} />
              </ListItem>
            ))}
            <ListItem button component="a" href="mailto:resh@gmail.com">
              <ListItemText primary="Contact" />
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </>
  );
};

export default Navbar;
