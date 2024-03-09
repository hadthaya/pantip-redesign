import React from "react";
import NextLink from "next/link";
import Image from "next/image";
import MenuIcon from "@mui/icons-material/Menu";
import Diversity3Icon from "@mui/icons-material/Diversity3";
import ControlPointOutlinedIcon from "@mui/icons-material/ControlPointOutlined";
import { ArrowDropDown, ArrowDropUp, Menu } from "@mui/icons-material";
import {
  Box,
  Button,
  Collapse,
  Drawer,
  IconButton,
  List,
  ListItemButton,
  Typography,
} from "@mui/material";
import menuStyle from "@/styles/components/menu.style";

interface IProps {
  open: boolean;
  setOpen: () => void;
}

const MenuBar: React.FC<IProps> = (props) => {
  const { classes } = menuStyle();

  const { open, setOpen } = props;

  return (
    <Drawer
      anchor="left"
      variant="temporary"
      open={open}
      className={classes.drawerSlide}
      classes={{ paper: classes.drawer }}
    >
      <Box className={classes.boxMenuIcon}>
        <IconButton onClick={setOpen} size="large" edge="start" color="inherit">
          <MenuIcon />
        </IconButton>
      </Box>

      <Box className={classes.boxFlex}>
        <ControlPointOutlinedIcon />
        <Box className={classes.boxTextCenter}>
          <Typography variant="fontMediumVw14Md10Sm10" component="p">
            ตั้งกระทู้
          </Typography>
        </Box>
      </Box>
      <Box className={classes.boxFlex}>
        <Diversity3Icon />
        <Box className={classes.boxTextCenter}>
          <Typography variant="fontMediumVw14Md10Sm10" component="p">
            คอมมูนิตี้
          </Typography>
        </Box>
      </Box>

      <Box className={classes.boxFlex}>
        <Box>
          <NextLink className={classes.textDecoration} href={`/`}>
            <Typography
              className={classes.textWhiteColor}
              variant="fontMediumVw14Md10Sm10"
              component="p"
            >
              เข้าสู่ระบบ
            </Typography>
          </NextLink>
        </Box>
        <Typography variant="fontMediumVw14Md10Sm10" component="p">
          /
        </Typography>
        <Box>
          <NextLink className={classes.textDecoration} href={`/`}>
            <Typography
              className={classes.textWhiteColor}
              variant="fontMediumVw14Md10Sm10"
              component="p"
            >
              สมัครสมาขิก
            </Typography>
          </NextLink>
        </Box>
      </Box>
    </Drawer>
  );
};
export default MenuBar;
