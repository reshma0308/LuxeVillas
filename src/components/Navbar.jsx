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
    { label: "Homes", link: "#home" },
    { label: "Why Choose Us", link: "#value" },
    { label: "Reach Us", link: "#contact-us" },
    { label: "Book a Tour", link: "#get-started" },
  ];

  return (
    <>
      <AppBar position="static" sx={{ backgroundColor: "#1e1e1e", boxShadow: '0 4px 24px rgba(179,114,2,0.08)', borderRadius: 0 }}>
        <Toolbar sx={{ display: "flex", justifyContent: "space-between", py: 2, borderRadius: 0 }}>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
            <Typography variant="h3" component="h3" fontFamily="'Playfair Display', serif" sx={{ color: 'primary.main', fontWeight: 700 }}>
              Luxe Villas
            </Typography>
          </Box>
          <Box sx={{ display: { xs: "none", md: "flex" }, gap: 2 }}>
            {menuItems.map((item) => (
              <Button
                key={item.label}
                href={item.link}
                color="inherit"
                sx={{ fontWeight: 500, fontSize: '1.1rem', px: 2, '&:hover': { color: 'primary.main' } }}
              >
                {item.label}
              </Button>
            ))}
            <Button
              variant="contained"
              href="mailto:resh@gmail.com"
              sx={{
                background: 'linear-gradient(90deg, #b37202 0%, #f2ac33 100%)',
                color: '#fff',
                fontWeight: 700,
                px: 3,
                boxShadow: '0 2px 8px rgba(179,114,2,0.18)',
                borderRadius: 999,
                '&:hover': {
                  background: 'linear-gradient(90deg, #f2ac33 0%, #b37202 100%)',
                  color: '#fff',
                },
              }}
            >
              Enquire Now
            </Button>
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
