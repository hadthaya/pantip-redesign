import { makeStyles } from "tss-react/mui";

const headerLayoutStyle = makeStyles()((theme) => {
  return {
    boxHeader: {
      flexGrow: 1,
    },
    boxAppBar: {
      position: "fixed",
      backgroundColor: "#1f1d33",
    },
    boxToolbar: {
      "& .MuiToolbar-root": {
        paddingLeft: 0,
        paddingRight: 0,
      },
    },
    boxContent: {
      display: "flex",
      justifyContent: "space-between",
      flexGrow: 1,
    },
    boxLeft: {
      display: "flex",
      alignItems: "center",
    },
    boxMenuIcon: {
      padding: "0px 16px",
      display: "none",
      [theme.breakpoints.down("md")]: {
        display: "flex",
      },
    },
    boxImageLogo: {
      padding: "0px 16px",
    },
    boxCenter: {
      display: "flex",
      backgroundColor: "#44416f",
      alignItems: "center",
      alignSelf: "center",
      width: "44.253%",
    },
    inputBaseSize: {
      width: "92%",
      marginLeft: "16px",
      color: "#FFFFFF",
      backgroundColor: "#44416f",
    },
    boxSearchIcon: {
      display: "flex",
    },
    searchIconColor: {
      color: "#FFFFFF",
      backgroundColor: "#44416f",
    },
    boxRight: {
      display: "flex",
      alignItems: "center",
      [theme.breakpoints.down("md")]: {
        display: "none",
      },
    },
    boxFlex: {
      display: "flex",
      padding: "0px 16px",
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

export default headerLayoutStyle;
