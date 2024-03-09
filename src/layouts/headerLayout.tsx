import React from "react";
import {
  AppBar,
  Box,
  IconButton,
  InputBase,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import Image from "next/image";
import NextLink from "next/link";
import Diversity3Icon from "@mui/icons-material/Diversity3";
import ControlPointOutlinedIcon from "@mui/icons-material/ControlPointOutlined";
import headerLayoutStyle from "@/styles/layouts/headerLayout.style";
import MenuBar from "@/components/menu";

const HeaderLayout: React.FC = () => {
  const { classes } = headerLayoutStyle();

  const [open, setOpen] = React.useState<boolean>(false)
  const handleOpen = () => {
    setOpen(!open)
  }
  return (
    <Box className={classes.boxHeader}>
      <AppBar className={classes.boxAppBar}>
        <Toolbar className={classes.boxToolbar}>
          <Box className={classes.boxContent}>
            <Box className={classes.boxLeft}>
              <Box className={classes.boxMenuIcon}>
                <IconButton  onClick={handleOpen} size="large" edge="start" color="inherit">
                  <MenuIcon />
                </IconButton>
              </Box>
              <Box className={classes.boxImageLogo}>
                <Image
                  src={"/images/layouts/logo-mobile-pantip-white.png"}
                  alt="imageLogo"
                  priority={true}
                  sizes="100vw"
                  width={40}
                  height={22.53}
                />
              </Box>
            </Box>

            <Box className={classes.boxCenter}>
              <InputBase
                className={classes.inputBaseSize}
                placeholder="ค้นหาบน Pantip"
              />
              <Box className={classes.boxSearchIcon}>
                <SearchIcon className={classes.searchIconColor} />
              </Box>
            </Box>

            <Box className={classes.boxRight}>
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
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
      <MenuBar
          open={open}
          setOpen={() => {
            handleOpen()
          }}
        />
    </Box>
  );
};

export default HeaderLayout;
