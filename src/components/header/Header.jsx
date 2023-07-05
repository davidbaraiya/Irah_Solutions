import "./header.css";
import PropTypes from "prop-types";
import {
  AppBar,
  Box,
  CssBaseline,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
  Button,
  Container,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const drawerWidth = 250;
const navItems = [
  {
    name: "home",
    path: "/",
  },
  {
    name: "our service",
    path: "/our_services",
  },
  {
    name: "our team",
    path: "/our_team",
  },
  {
    name: "career",
    path: "/career",
  },
];

function Header(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography
        component="div"
        sx={{ my: 2 }}
        className="mobile-logo-wrapper"
      >
        <Link to={"/"}>MUI</Link>
      </Typography>
      <Divider />
      <List>
        {navItems.map(({ name, path }, i) => (
          <ListItem key={i} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              {/* <ListItemText primary={name} /> */}
              <NavLink to={path}>{name}</NavLink>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar component="nav" className="header" position="sticky">
        <Container className="container">
          <Toolbar sx={{ padding: "0 !important" }}>
            <Typography
              component="div"
              sx={{ flexGrow: 1 }}
              className="desk-logo-wrapper"
            >
              <Link to={"/"}>MUI</Link>
            </Typography>
            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              {navItems?.map(({ name, path }, i) => (
                <NavLink to={path} className="nav-link" key={i}>
                  <Button
                    sx={{
                      color: "#fff",
                      marginLeft: "12px",
                      padding: "4px 0 !important",
                    }}
                  >
                    {name}
                  </Button>
                </NavLink>
              ))}
            </Box>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ display: { sm: "none" } }}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}

Header.propTypes = {
  window: PropTypes.func,
};

export default Header;
