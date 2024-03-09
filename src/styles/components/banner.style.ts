import { makeStyles } from "tss-react/mui";

const bannerStyle = makeStyles()((theme) => {
  return {
    boxImage: {
      display: "flex",
      // height: "200px",
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      [theme.breakpoints.down("md")]: {
        // height: "26.042vw",
      },
      [theme.breakpoints.down("sm")]: {
        // height: "55.556vw",
      },
    },
    boxImageAuto: {
      display: 'block',
      width: "100%",
      height: "auto",
    },
  };
});

export default bannerStyle;
