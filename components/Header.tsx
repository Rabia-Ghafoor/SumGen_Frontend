import React, { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Box,
  Container,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

interface HeaderProps {
  isScrolled: boolean;
}

const Header: React.FC<HeaderProps> = ({ isScrolled }) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const navItems = ["Solutions", "Pricing", "Apps & Integrations", "Resources"];

  return (
    <AppBar
      position="fixed"
      color="transparent"
      elevation={isScrolled ? 4 : 0}
      sx={{
        transition: "all 0.3s ease-in-out",
        bgcolor: isScrolled ? "rgba(255, 255, 255, 0.95)" : "transparent",
        py: isScrolled ? 1 : 2,
        backdropFilter: isScrolled ? "blur(10px)" : "none",
      }}
    >
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ justifyContent: "space-between" }}>
          <Typography
            variant="h6"
            component="div"
            sx={{ display: "flex", alignItems: "center" }}
          >
            RILLA AI
          </Typography>
          {isMobile ? (
            <>
              <IconButton
                edge="end"
                color="inherit"
                aria-label="menu"
                onClick={() => setIsDrawerOpen(true)}
              >
                <MenuIcon />
              </IconButton>
              <Drawer
                anchor="right"
                open={isDrawerOpen}
                onClose={() => setIsDrawerOpen(false)}
              >
                <List>
                  {navItems.map((item) => (
                    <ListItem button key={item}>
                      <ListItemText primary={item} />
                    </ListItem>
                  ))}
                </List>
              </Drawer>
            </>
          ) : (
            <Box sx={{ display: "flex", alignItems: "center" }}>
              {navItems.map((item) => (
                <Button color="inherit" key={item} sx={{ mx: 1 }}>
                  {item}
                </Button>
              ))}
              <Button color="inherit" sx={{ mx: 1 }}>
                Log In
              </Button>
              <Button
                variant="contained"
                color="primary"
                sx={{ borderRadius: 50, ml: 2 }}
              >
                Start for Free
              </Button>
            </Box>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
