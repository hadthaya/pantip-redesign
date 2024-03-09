import { Box, Card, CardContent, Grid, Typography } from "@mui/material";
import React from "react";
import Image from "next/image";
import AddCommentOutlinedIcon from "@mui/icons-material/AddCommentOutlined";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

import panTipTrendCardStyle from "@/styles/components/panTipTrendCard.style";

const PanTipTrendCard: React.FC = () => {
  const { classes } = panTipTrendCardStyle();

  return (
    <Box className={classes.boxPaddingAll}>
      <Grid container spacing={{ xs: 3 }}>
        <Grid item xs={12} sm={6} md={3}>
          <Card className={classes.boxCard}>
            <CardContent>
              <Box className={classes.boxImage}>
                <Image
                  src={"/images/panTipTrend/s8w0umpjwmsLuacO6Z9C-o.jpg"}
                  alt="imageLogo"
                  priority={true}
                  sizes="100vw"
                  width={328}
                  height={300}
                  className={classes.boxImageAuto}
                />
              </Box>

              <Box className={classes.boxTextPadding}>
                <Typography
                  className={classes.boxTextColor}
                  variant="fontMediumVw16Md14Sm12"
                  component="p"
                >
                  ชวนแชร์ปัญหาผิวเป็นสิวและวิธีการดูแลของคุณ
                </Typography>
                <Grid container sx={{ alignItems: "center" }}>
                  <Grid item xs={6}>
                    <Typography
                      className={classes.boxTextColor}
                      variant="fontMediumVw16Md14Sm12"
                      component="p"
                    >
                      3/9/2024
                    </Typography>
                  </Grid>
                  <Grid item xs={3}>
                    <AddCommentOutlinedIcon sx={{ color: "#FFFFFF" }} />
                  </Grid>
                  <Grid item xs={3}>
                    <AddCircleOutlineIcon sx={{ color: "#FFFFFF" }} />
                  </Grid>
                </Grid>
              </Box>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card className={classes.boxCard}>
            <CardContent>
              <Box className={classes.boxImage}>
                <Image
                  src={"/images/panTipTrend/s8w1c21mcn0IbrbPwn7Xg-o.jpg"}
                  alt="imageLogo"
                  priority={true}
                  sizes="100vw"
                  width={328}
                  height={300}
                  className={classes.boxImageAuto}
                />
              </Box>
              <Box className={classes.boxTextPadding}>
                <Typography
                  className={classes.boxTextColor}
                  variant="fontMediumVw16Md14Sm12"
                  component="p"
                >
                  ชวนแชร์ปัญหาผิวเป็นสิวและวิธีการดูแลของคุณ
                  ลุ้นรับเซรั่มใหม่ล่าสุดจากไบโอเดอร์มา! 100 รางวัล
                </Typography>
                <Grid container sx={{ alignItems: "center" }}>
                  <Grid item xs={6}>
                    <Typography
                      className={classes.boxTextColor}
                      variant="fontMediumVw16Md14Sm12"
                      component="p"
                    >
                      3/9/2024
                    </Typography>
                  </Grid>
                  <Grid item xs={3}>
                    <AddCommentOutlinedIcon sx={{ color: "#FFFFFF" }} />
                  </Grid>
                  <Grid item xs={3}>
                    <AddCircleOutlineIcon sx={{ color: "#FFFFFF" }} />
                  </Grid>
                </Grid>
              </Box>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card className={classes.boxCard}>
            <CardContent>
              <Box className={classes.boxImage}>
                <Image
                  src={"/images/panTipTrend/s8w0n81o8qW4Ivm8MNi1-o.jpg"}
                  alt="imageLogo"
                  priority={true}
                  sizes="100vw"
                  width={328}
                  height={300}
                  className={classes.boxImageAuto}
                />
              </Box>
              <Box className={classes.boxTextPadding}>
                <Typography
                  className={classes.boxTextColor}
                  variant="fontMediumVw16Md14Sm12"
                  component="p"
                >
                  ชวนแชร์ปัญหาผิวเป็นสิวและวิธีการดูแลของคุณ
                  ลุ้นรับเซรั่มใหม่ล่าสุดจากไบโอเดอร์มา! 100 รางวัล
                </Typography>
                <Grid container sx={{ alignItems: "center" }}>
                  <Grid item xs={6}>
                    <Typography
                      className={classes.boxTextColor}
                      variant="fontMediumVw16Md14Sm12"
                      component="p"
                    >
                      3/9/2024
                    </Typography>
                  </Grid>
                  <Grid item xs={3}>
                    <AddCommentOutlinedIcon sx={{ color: "#FFFFFF" }} />
                  </Grid>
                  <Grid item xs={3}>
                    <AddCircleOutlineIcon sx={{ color: "#FFFFFF" }} />
                  </Grid>
                </Grid>
              </Box>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card className={classes.boxCard}>
            <CardContent>
              <Box className={classes.boxImage}>
                <Image
                  src={"/images/panTipTrend/s8w0umpjwmsLuacO6Z9C-o.jpg"}
                  alt="imageLogo"
                  priority={true}
                  sizes="100vw"
                  width={328}
                  height={300}
                  className={classes.boxImageAuto}
                />
              </Box>
              <Box className={classes.boxTextPadding}>
                <Typography
                  className={classes.boxTextColor}
                  variant="fontMediumVw16Md14Sm12"
                  component="p"
                >
                  ชวนแชร์ปัญหาผิวเป็นสิวและวิธีการดูแลของคุณ
                  ลุ้นรับเซรั่มใหม่ล่าสุดจากไบโอเดอร์มา! 100 รางวัล
                </Typography>
                <Grid container sx={{ alignItems: "center" }}>
                  <Grid item xs={6}>
                    <Typography
                      className={classes.boxTextColor}
                      variant="fontMediumVw16Md14Sm12"
                      component="p"
                    >
                      3/9/2024
                    </Typography>
                  </Grid>
                  <Grid item xs={3}>
                    <AddCommentOutlinedIcon sx={{ color: "#FFFFFF" }} />
                  </Grid>
                  <Grid item xs={3}>
                    <AddCircleOutlineIcon sx={{ color: "#FFFFFF" }} />
                  </Grid>
                </Grid>
              </Box>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card className={classes.boxCard}>
            <CardContent>
              <Box className={classes.boxImage}>
                <Image
                  src={"/images/panTipTrend/s8xzy42duh9SG0DmZlix-o.png"}
                  alt="imageLogo"
                  priority={true}
                  sizes="100vw"
                  width={328}
                  height={300}
                  className={classes.boxImageAuto}
                />
              </Box>
              <Box className={classes.boxTextPadding}>
                <Typography
                  className={classes.boxTextColor}
                  variant="fontMediumVw16Md14Sm12"
                  component="p"
                >
                  ชวนแชร์ปัญหาผิวเป็นสิวและวิธีการดูแลของคุณ
                  ลุ้นรับเซรั่มใหม่ล่าสุดจากไบโอเดอร์มา! 100 รางวัล
                </Typography>
                <Grid container sx={{ alignItems: "center" }}>
                  <Grid item xs={6}>
                    <Typography
                      className={classes.boxTextColor}
                      variant="fontMediumVw16Md14Sm12"
                      component="p"
                    >
                      3/9/2024
                    </Typography>
                  </Grid>
                  <Grid item xs={3}>
                    <AddCommentOutlinedIcon sx={{ color: "#FFFFFF" }} />
                  </Grid>
                  <Grid item xs={3}>
                    <AddCircleOutlineIcon sx={{ color: "#FFFFFF" }} />
                  </Grid>
                </Grid>
              </Box>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card className={classes.boxCard}>
            <CardContent>
              <Box className={classes.boxImage}>
                <Image
                  src={"/images/panTipTrend/s8w0n81o8qW4Ivm8MNi1-o.jpg"}
                  alt="imageLogo"
                  priority={true}
                  sizes="100vw"
                  width={328}
                  height={300}
                  className={classes.boxImageAuto}
                />
              </Box>
              <Box className={classes.boxTextPadding}>
                <Typography
                  className={classes.boxTextColor}
                  variant="fontMediumVw16Md14Sm12"
                  component="p"
                >
                  ชวนแชร์ปัญหาผิวเป็นสิวและวิธีการดูแลของคุณ
                  ลุ้นรับเซรั่มใหม่ล่าสุดจากไบโอเดอร์มา! 100 รางวัล
                </Typography>
                <Grid container sx={{ alignItems: "center" }}>
                  <Grid item xs={6}>
                    <Typography
                      className={classes.boxTextColor}
                      variant="fontMediumVw16Md14Sm12"
                      component="p"
                    >
                      3/9/2024
                    </Typography>
                  </Grid>
                  <Grid item xs={3}>
                    <AddCommentOutlinedIcon sx={{ color: "#FFFFFF" }} />
                  </Grid>
                  <Grid item xs={3}>
                    <AddCircleOutlineIcon sx={{ color: "#FFFFFF" }} />
                  </Grid>
                </Grid>
              </Box>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card className={classes.boxCard}>
            <CardContent>
              <Box className={classes.boxImage}>
                <Image
                  src={"/images/panTipTrend/s8w1c21mcn0IbrbPwn7Xg-o.jpg"}
                  alt="imageLogo"
                  priority={true}
                  sizes="100vw"
                  width={328}
                  height={300}
                  className={classes.boxImageAuto}
                />
              </Box>
              <Box className={classes.boxTextPadding}>
                <Typography
                  className={classes.boxTextColor}
                  variant="fontMediumVw16Md14Sm12"
                  component="p"
                >
                  ชวนแชร์ปัญหาผิวเป็นสิวและวิธีการดูแลของคุณ
                  ลุ้นรับเซรั่มใหม่ล่าสุดจากไบโอเดอร์มา! 100 รางวัล
                </Typography>
                <Grid container sx={{ alignItems: "center" }}>
                  <Grid item xs={6}>
                    <Typography
                      className={classes.boxTextColor}
                      variant="fontMediumVw16Md14Sm12"
                      component="p"
                    >
                      3/9/2024
                    </Typography>
                  </Grid>
                  <Grid item xs={3}>
                    <AddCommentOutlinedIcon sx={{ color: "#FFFFFF" }} />
                  </Grid>
                  <Grid item xs={3}>
                    <AddCircleOutlineIcon sx={{ color: "#FFFFFF" }} />
                  </Grid>
                </Grid>
              </Box>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card className={classes.boxCard}>
            <CardContent>
              <Box className={classes.boxImage}>
                <Image
                  src={"/images/panTipTrend/s8xzy42duh9SG0DmZlix-o.png"}
                  alt="imageLogo"
                  priority={true}
                  sizes="100vw"
                  width={328}
                  height={300}
                  className={classes.boxImageAuto}
                />
              </Box>
              <Box className={classes.boxTextPadding}>
                <Typography
                  className={classes.boxTextColor}
                  variant="fontMediumVw16Md14Sm12"
                  component="p"
                >
                  ชวนแชร์ปัญหาผิวเป็นสิวและวิธีการดูแลของคุณ
                  ลุ้นรับเซรั่มใหม่ล่าสุดจากไบโอเดอร์มา! 100 รางวัล
                </Typography>
                <Grid container sx={{ alignItems: "center" }}>
                  <Grid item xs={6}>
                    <Typography
                      className={classes.boxTextColor}
                      variant="fontMediumVw16Md14Sm12"
                      component="p"
                    >
                      3/9/2024
                    </Typography>
                  </Grid>
                  <Grid item xs={3}>
                    <AddCommentOutlinedIcon sx={{ color: "#FFFFFF" }} />
                  </Grid>
                  <Grid item xs={3}>
                    <AddCircleOutlineIcon sx={{ color: "#FFFFFF" }} />
                  </Grid>
                </Grid>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default PanTipTrendCard;
