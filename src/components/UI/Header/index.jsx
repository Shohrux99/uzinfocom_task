import { Box, Button, Menu, MenuItem } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import { myLinks } from "constants/myLinks";
import * as React from "react";
import styles from "./styles.module.scss";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";

export default function Header() {
  const navigate = (link) => {
    window.open(link, "_blank");
  };

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (link) => {
    if (link) {
      navigate(link);
    }
    setAnchorEl(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl"> 
        <Toolbar>
          <Box className={`${styles.items} ${styles.fromTablet}`}>
            {myLinks.map((link, index) => (
              <Button key={index} className={styles.item} onClick={() => navigate(link?.link)}>
                {link?.logo && (
                  <div className={styles.image}>
                    <img src={link?.logo} alt="" />
                  </div>
                )}
                {link?.name}
              </Button>
            ))}
          </Box>

          <Box className={`${styles.items} ${styles.fromMobile}`}>
            <Button id="basic-button" aria-controls={open ? "basic-menu" : undefined} aria-haspopup="true" aria-expanded={open ? "true" : undefined} onClick={handleClick}>
              <MenuRoundedIcon />
            </Button>

            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={() => handleClose()}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              {myLinks.map((link, index) => (
                <MenuItem key={index} className={styles.menuItem} onClick={() => handleClose(link?.link)}>
                  {link?.logo && (
                    <div className={styles.image}>
                      <img src={link?.logo} alt="" />
                    </div>
                  )}
                  {link?.name}
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
