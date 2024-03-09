import { makeStyles } from "tss-react/mui";

const menuStyle = makeStyles()((theme) => {
  return {
    drawerSlide: {
      display: "flex",
      [theme.breakpoints.down("md")]: {
        display: "flex",
      },
    },
    drawer: {
      width: "40%",
      height: "100%",
      color: "#FFF",
      backgroundColor: "#353156",
    },

    paddingButton: {
      padding: "0",
    },
    textHeader: {
      color: "#FFFFFF",
    },
    textListItem: {
      paddingLeft: "24px",
      color: "#FFFFFF",
    },
    boxMenuIcon: {
      padding: "0px 16px",
    },
    boxImageLogo: {
      padding: "0px 16px",
    },
    boxFlex: {
      display: "flex",
      padding: "24px 16px",
    },
    boxTextCenter: {
      alignSelf: "center",
      paddingLeft: "8px",
    },
    textDecoration: {
      textDecoration: "none",
    },
    textWhiteColor: {
      color: "#FFFFFF",
    },
  };
});

export default menuStyle;
