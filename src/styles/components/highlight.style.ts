import { makeStyles } from "tss-react/mui";

const highlightStyle = makeStyles()((theme) => {
  return {
    paddingAll:{
      width: "100%",
      maxWidth: "1140px",
      margin: "0px auto",
      backgroundColor: "#353156",
      [theme.breakpoints.down("md")]: {
        maxWidth: "720px",
      },
      [theme.breakpoints.down("sm")]: {
        maxWidth: "312px",
      },
    },
    paddingSwiper: {
      padding: "48px !important",
    },
    boxCard: {
      backgroundColor: "#3c3963",
      height: "100%",
    },
    boxImage: {
      display: "flex",
      height: "150px",
      [theme.breakpoints.down("md")]: {
        height: "26.042vw",
      },
      [theme.breakpoints.down("sm")]: {
        height: "55.556vw",
      },
    },
    boxSkeleton: {
      height: "150px",
      [theme.breakpoints.down("md")]: {
        height: "26.042vw",
      },
      [theme.breakpoints.down("sm")]: {
        height: "55.556vw",
      },
    },
    boxImageAuto: {
      width: "100%",
      height: "auto",
    },
    boxTextPadding: {
      padding: "7.175% 7.175% 0 7.175%",
      [theme.breakpoints.down("md")]: {
        padding: "5.48% 5.48% 0 5.48%",
      },
      [theme.breakpoints.down("sm")]: {
        padding: "6.9% 6.9% 0 6.9%",
      },
    },
    boxTextColor: {
      color: "#FFFFFF",
    },
    boxTextHeader: {
      padding: "12px 16px",
      backgroundColor: "#1f1d33",

    },
  };
});

export default highlightStyle;
