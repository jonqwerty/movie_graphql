import { useState } from "react"
import {
  Box,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Drawer,
  Button,
  List,
  Link,
  ListItemIcon,
  ListItemButton,
  ListItemText,
  Hidden,
} from "@mui/material"
import MenuIcon from "@mui/icons-material/Menu"
import { Link as RouterLink } from "react-router-dom"
import SettingsIcon from "@mui/icons-material/Settings"

const Navigation = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)
  const list = () => (
    <Box sx={{ width: 250 }} role="presentation">
      <List>
        <RouterLink to="settings">
          <ListItemButton>
            <ListItemIcon>
              <SettingsIcon />
            </ListItemIcon>
            <ListItemText primary="Settings" />
          </ListItemButton>
        </RouterLink>
      </List>
    </Box>
  )
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Hidden only={["lg", "xl"]}>
            <IconButton
              onClick={() => {
                setIsDrawerOpen(true)
              }}
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
          </Hidden>
          <Link component={RouterLink} to="/" sx={{ flexGrow: 1 }}>
            <Typography variant="6" component="div" sx={{ color: "white", flexGrow: 1 }}>
              Movies recommendation
            </Typography>
          </Link>

          <Box sx={{ display: { xs: "none", lg: "flex" } }}>
            <Button
              component={RouterLink}
              to="settings"
              sx={{ my: 2, color: "white", display: "block" }}
            >
              Settings
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer anchor="left" open={isDrawerOpen} onClose={() => setIsDrawerOpen(false)}>
        {list()}
      </Drawer>
    </Box>
  )
}

export default Navigation
