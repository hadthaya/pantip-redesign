import React from "react";
import Image from "next/image";
import bannerStyle from "@/styles/components/banner.style";
import { Box } from "@mui/material";

const Banner: React.FC = () => {
  const { classes } = bannerStyle();

  return (
    <Box>
      <Box className={classes.boxImage}>
        <Image
          src={"/images/banner/banner.png"}
          alt="imageLogo"
          priority={true}
          sizes="100vw"
          width={1440}
          height={200}
          className={classes.boxImageAuto}
        />
      </Box>
    </Box>
  );
};

export default Banner;
