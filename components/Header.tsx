"use client";
import React, { useState, useEffect } from "react";
import rilla from "../public/rilla.png";
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
  colors,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Image from "next/image";
import Link from "next/link";

interface HeaderProps {
  isScrolled: boolean;
}

const Header: React.FC<HeaderProps> = ({ isScrolled }) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const navItems = [
    { label: "Customers", url: "https://www.rilla.com/customers" },
    { label: "Rilla labs", url: "https://www.rilla.com/rilla-labs" },
    { label: "About Us", url: "/about" },
  ];
  return (
    <AppBar
      position="fixed"
      color="transparent"
      elevation={isScrolled ? 4 : 0}
      sx={{
        transition: "all 0.3s ease-in-out",
        bgcolor: isScrolled ? "#1a1b23" : "transparent",
        py: isScrolled ? 1 : 2,
        backdropFilter: isScrolled ? "blur(10px)" : "none",
        ...(isScrolled && { boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)" }),
      }}
    >
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ justifyContent: "space-between" }}>
          <Typography
            variant="h6"
            component="div"
            sx={{
              display: "flex",
              alignItems: "center",
              color: "#fff500",
              fontFamily: "Druk",
              fontWeight: "600",
            }}
          >
            <Image
              src={rilla.src}
              alt="RILLA AI"
              width="24"
              height="24"
              style={{ marginRight: 8 }}
            />
            RILLA ++
          </Typography>
          {isMobile ? (
            <>
              <IconButton
                edge="end"
                color="inherit"
                aria-label="menu"
                onClick={() => setIsDrawerOpen(true)}
                sx={{ color: "#fff" }}
              >
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Typography variant="body1" sx={{ mr: 1 }}>
                    Menu
                  </Typography>
                  <MenuIcon />
                </Box>
              </IconButton>
              <Drawer
                anchor="right"
                open={isDrawerOpen}
                onClose={() => setIsDrawerOpen(false)}
              >
                <IconButton
                  edge="start"
                  color="inherit"
                  aria-label="close"
                  onClick={() => setIsDrawerOpen(false)}
                  sx={{ ml: 2, mt: 2 }}
                >
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <Typography variant="body1" sx={{ mr: 1 }}>
                      Close
                    </Typography>
                    <CloseIcon />
                  </Box>
                </IconButton>
                <List>
                  {navItems.map((item) => (
                    <ListItem button key={item.label}>
                      <Link href={item.url}>
                        <ListItemText primary={item.label} />
                      </Link>
                    </ListItem>
                  ))}
                </List>
                <Box sx={{ textAlign: "left" }}>
                  <Button color="inherit" sx={{ mx: 1, my: 1 }}>
                    <Link href="/signup">Log In</Link>
                  </Button>
                </Box>
                <Link href="/signin">
                <Button
                  variant="contained"
                  color="primary"
                  sx={{ borderRadius: 50, ml: 2 }}
                >
                  Start for Free
                </Button>
                </Link>
              </Drawer>
            </>
          ) : (
            <Box sx={{ display: "flex", alignItems: "center", color: "#fff" }}>
              {navItems.map((item) => (
                <Button color="inherit" key={item.label} sx={{ mx: 1, fontSize: 16 }}>
                  <Link href={item.url}>{item.label}</Link>
                </Button>
              ))}
              <Button color="inherit" sx={{ mx: 1 }}>
                <Link href="/doc">Log In</Link>
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
