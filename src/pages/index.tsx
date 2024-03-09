import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import homeStyle from "@/styles/pages";
import HeaderLayout from "@/layouts/headerLayout";
import PanTipTrendCard from "@/components/panTipTrendCard";
import Announce from "@/components/announce";
import Highlight from "@/components/highlight";
import Banner from "@/components/banner";

const Home: React.FC = () => {
  const { classes } = homeStyle();

  const [loading, setLoading] = React.useState<boolean>(true);

  React.useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLoading(false);
    }, 5000);
    return () => clearTimeout(timeoutId);
  }, []);
  return (
    <Box sx={{ backgroundColor: "#3c3963" }}>
      <HeaderLayout />
      <Box className={classes.boxPaddingBanner}>
        <Banner />
      </Box>
      <Box className={classes.boxPaddingTop}>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Box className={classes.boxPanTipTrendCard}>
            <Grid container>
              <Grid item xs={12}>
                <Box className={classes.boxTextHeader}>
                  <Typography
                    className={classes.boxTextColor}
                    variant="fontMediumVw20Md18Sm16"
                    component="p"
                  >
                    Announce
                  </Typography>
                </Box>
              </Grid>
              <Announce />
            </Grid>
          </Box>
        </Box>
      </Box>
      <Box className={classes.boxPaddingTop}>
        <Highlight loading={loading} />
      </Box>

      <Box className={classes.boxPaddingRealtime}>
        <Box className={classes.boxFlex}>
          <Box className={classes.boxPanTipTrendCard}>
            <Grid container>
              <Grid item xs={12}>
                <Box className={classes.boxTextHeader}>
                  <Typography
                    className={classes.boxTextColor}
                    variant="fontMediumVw20Md18Sm16"
                    component="p"
                  >
                    Pantip Realtime
                  </Typography>
                </Box>
              </Grid>
              <PanTipTrendCard />
            </Grid>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
export default Home;
