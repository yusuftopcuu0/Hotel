import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  Menu,
  MenuItem,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const navigate = useNavigate();

  const navItems = [
    { name: "Ana Sayfa", path: "/" },
    { name: "Odalar", path: "/rooms" },
    { name: "Hakkımızda", path: "/about" },
    { name: "İletişim", path: "/contact" },
  ];

  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: "black",
        zIndex: (theme) => theme.zIndex.drawer + 1,
      }}
    >
      <Toolbar>
        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1, fontWeight: "bold", cursor: "pointer" }}
          onClick={() => {
            navigate("/");
          }}
        >
          LUXSTAY
        </Typography>

        {isMobile ? (
          <Box>
            <IconButton
              size="large"
              edge="end"
              color="inherit"
              aria-label="menu"
              onClick={handleMenu}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              {navItems.map((item) => (
                <MenuItem
                  key={item.path}
                  onClick={handleClose}
                  component={Link}
                  to={item.path}
                >
                  {item.name}
                </MenuItem>
              ))}
              <MenuItem
                key={"booking"}
                onClick={handleClose}
                component={Link}
                to="/booking"
              >
                Rezervasyon Yap
              </MenuItem>
            </Menu>
          </Box>
        ) : (
          <Box sx={{ display: "flex", gap: 2 }}>
            {navItems.map((item) => (
              <Button
                key={item.path}
                color="inherit"
                component={Link}
                to={item.path}
              >
                {item.name}
              </Button>
            ))}
            <Button
              variant="contained"
              color="secondary"
              component={Link}
              to="/booking"
              sx={{ ml: 2 }}
            >
              Rezervasyon Yap
            </Button>
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
