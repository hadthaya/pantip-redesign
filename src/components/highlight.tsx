import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import {
  Box,
  Card,
  CardContent,
  Grid,
  Typography,
  Skeleton,
} from "@mui/material";
import highlightStyle from "@/styles/components/highlight.style";

interface IProps {
  loading: boolean;
}

const Highlight: React.FC<IProps> = (props) => {
  const { classes } = highlightStyle();

  const { loading } = props;

  return (
    <Box className={classes.paddingAll}>
      <Grid container>
        <Grid item xs={12}>
          <Box className={classes.boxTextHeader}>
            <Typography
              className={classes.boxTextColor}
              variant="fontMediumVw20Md18Sm16"
              component="p"
            >
              Highlight
            </Typography>
          </Box>
        </Grid>
      </Grid>
      <Box>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={24}
          slidesPerView={1}
          breakpoints={{
            361: {
              slidesPerView: 2,
            },
            769: {
              slidesPerView: 4,
            },
          }}
          navigation
          grid={{ fill: "row", rows: 1 }}
          speed={1000}
          updateOnWindowResize
          className={classes.paddingSwiper}
          pagination={{ clickable: true, el: ".pagination" }}
        >
          <SwiperSlide>
            <Card className={classes.boxCard}>
              <CardContent>
                <Box className={classes.boxImage}>
                  {loading ? (
                    <Skeleton
                      variant="rectangular"
                      width="100%"
                      className={classes.boxSkeleton}
                      sx={{
                        background: "#D6D6D6",
                      }}
                    />
                  ) : (
                    <Image
                      src={"/images/panTipTrend/s8xzy42duh9SG0DmZlix-o.png"}
                      alt="imageLogo"
                      priority={true}
                      sizes="100vw"
                      width={328}
                      height={300}
                      className={classes.boxImageAuto}
                    />
                  )}
                </Box>
                <Box className={classes.boxTextPadding}>
                  <Typography
                    className={classes.boxTextColor}
                    variant="fontMediumVw16Md14Sm12"
                    component="p"
                  >
                    ชวนแชร์ปัญหาผิวเป็นสิวและวิธีการดูแลของคุณ
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </SwiperSlide>
          <SwiperSlide>
            <Card className={classes.boxCard}>
              <CardContent>
                <Box className={classes.boxImage}>
                  {loading ? (
                    <Skeleton
                      variant="rectangular"
                      width="100%"
                      className={classes.boxSkeleton}
                      sx={{
                        background: "#D6D6D6",
                      }}
                    />
                  ) : (
                    <Image
                      src={"/images/panTipTrend/s8xzy42duh9SG0DmZlix-o.png"}
                      alt="imageLogo"
                      priority={true}
                      sizes="100vw"
                      width={328}
                      height={300}
                      className={classes.boxImageAuto}
                    />
                  )}
                </Box>
                <Box className={classes.boxTextPadding}>
                  <Typography
                    className={classes.boxTextColor}
                    variant="fontMediumVw16Md14Sm12"
                    component="p"
                  >
                    ชวนแชร์ปัญหาผิวเป็นสิวและวิธีการดูแลของคุณ
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </SwiperSlide>
          <SwiperSlide>
            <Card className={classes.boxCard}>
              <CardContent>
                <Box className={classes.boxImage}>
                  {loading ? (
                    <Skeleton
                      variant="rectangular"
                      width="100%"
                      className={classes.boxSkeleton}
                      sx={{
                        background: "#D6D6D6",
                      }}
                    />
                  ) : (
                    <Image
                      src={"/images/panTipTrend/s8xzy42duh9SG0DmZlix-o.png"}
                      alt="imageLogo"
                      priority={true}
                      sizes="100vw"
                      width={328}
                      height={300}
                      className={classes.boxImageAuto}
                    />
                  )}
                </Box>
                <Box className={classes.boxTextPadding}>
                  <Typography
                    className={classes.boxTextColor}
                    variant="fontMediumVw16Md14Sm12"
                    component="p"
                  >
                    ชวนแชร์ปัญหาผิวเป็นสิวและวิธีการดูแลของคุณ
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </SwiperSlide>
          <SwiperSlide>
            <Card className={classes.boxCard}>
              <CardContent>
                <Box className={classes.boxImage}>
                  {loading ? (
                    <Skeleton
                      variant="rectangular"
                      width="100%"
                      className={classes.boxSkeleton}
                      sx={{
                        background: "#D6D6D6",
                      }}
                    />
                  ) : (
                    <Image
                      src={"/images/panTipTrend/s8xzy42duh9SG0DmZlix-o.png"}
                      alt="imageLogo"
                      priority={true}
                      sizes="100vw"
                      width={328}
                      height={300}
                      className={classes.boxImageAuto}
                    />
                  )}
                </Box>
                <Box className={classes.boxTextPadding}>
                  <Typography
                    className={classes.boxTextColor}
                    variant="fontMediumVw16Md14Sm12"
                    component="p"
                  >
                    ชวนแชร์ปัญหาผิวเป็นสิวและวิธีการดูแลของคุณ
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </SwiperSlide>
          <SwiperSlide>
            <Card className={classes.boxCard}>
              <CardContent>
                <Box className={classes.boxImage}>
                {loading ? (
                  <Skeleton
                    variant="rectangular"
                    width="100%"
                    className={classes.boxSkeleton}
                    sx={{
                      background: "#D6D6D6",
                    }}
                  />
                ) : (
                  <Image
                    src={"/images/panTipTrend/s8xzy42duh9SG0DmZlix-o.png"}
                    alt="imageLogo"
                    priority={true}
                    sizes="100vw"
                    width={328}
                    height={300}
                    className={classes.boxImageAuto}
                  />
                )}
                </Box>
                <Box className={classes.boxTextPadding}>
                  <Typography
                    className={classes.boxTextColor}
                    variant="fontMediumVw16Md14Sm12"
                    component="p"
                  >
                    ชวนแชร์ปัญหาผิวเป็นสิวและวิธีการดูแลของคุณ
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </SwiperSlide>
          <SwiperSlide>
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
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </SwiperSlide>
          <SwiperSlide>
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
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </SwiperSlide>
          <SwiperSlide>
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
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </SwiperSlide>
          <SwiperSlide>
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
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </SwiperSlide>
          ...
        </Swiper>
      </Box>
    </Box>
  );
};

export default Highlight;
