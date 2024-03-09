import announceStyle from "@/styles/components/announce.style";
import { Box, Grid, Typography } from "@mui/material";
import React from "react";

const Announce: React.FC = () => {
  const { classes } = announceStyle();
  return (
    <Box className={classes.boxPaddingAll}>
      <Grid container>
        <Grid item xs={12}>
          <Box className={classes.boxTextPadding}>
            <Typography
              className={classes.boxTextColor}
              variant="fontMediumVw16Md14Sm12"
              component="p"
            >
              🎧 Pantip Daily Podcast 🎧 3 อันดับกระทู้ฮิตบนพันทิป ประจำวันที่ 7
              มีนาคม 📊
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Box className={classes.boxTextPadding}>
            <Typography
              className={classes.boxTextColor}
              variant="fontMediumVw16Md14Sm12"
              component="p"
            >
              🎧 Pantip Daily Podcast 🎧 3 อันดับกระทู้ฮิตบนพันทิป ประจำวันที่ 7
              มีนาคม 📊
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Box className={classes.boxTextPadding}>
            <Typography
              className={classes.boxTextColor}
              variant="fontMediumVw16Md14Sm12"
              component="p"
            >
              🎧 Pantip Daily Podcast 🎧 3 อันดับกระทู้ฮิตบนพันทิป ประจำวันที่ 7
              มีนาคม 📊
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Announce;
