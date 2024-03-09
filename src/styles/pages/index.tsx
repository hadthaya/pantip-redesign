import { makeStyles } from "tss-react/mui";

const homeStyle = makeStyles()((theme) => {
  return {
    boxPaddingBanner: {
      paddingTop: "64px",
    },
    boxPanTipTrendCard: {
      maxWidth: "1140px",
      backgroundColor: "#353156",
      [theme.breakpoints.down("md")]: {
        maxWidth: "720px",
      },
      [theme.breakpoints.down("sm")]: {
        maxWidth: "312px",
      },
    },
    boxTextHeader: {
      padding: "12px 16px",
      backgroundColor: "#1f1d33",
    },
    boxTextPadding: {
      padding: "16px 16px 0 16px",
    },
    boxTextColor: {
      color: "#FFFFFF",
    },
    boxFlex: {
      display: "flex",
      justifyContent: "center",
    },
    boxPaddingTop: {
      padding: "24px 24px 0 24px",
    },
    boxPaddingRealtime: {
      padding: "24px 24px 150px 24px",
    },
  };
});

export default homeStyle;
