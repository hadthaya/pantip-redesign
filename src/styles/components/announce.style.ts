import { makeStyles } from "tss-react/mui";

const announceStyle = makeStyles()((theme) => {
  return {
    boxPaddingAll: {
      padding: "24px",
    },
    boxTextPadding: {
      padding: "16px",
      borderBottom: '1px solid #FFFFFF',
      [theme.breakpoints.down("md")]: {
        padding: "16px",
      },
      [theme.breakpoints.down("sm")]: {
        padding: "16px",
      },
    },
    boxTextColor: {
      color: "#FFFFFF",
    },
  };
});

export default announceStyle;
