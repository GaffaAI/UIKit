"use client";
import { useMediaQuery } from "react-responsive";

export const useBreakpoints = () => {
  const isUpSM = useMediaQuery({ minWidth: 640 }); // sm
  const isUpMD = useMediaQuery({ minWidth: 768 }); // md
  const isUpLG = useMediaQuery({ minWidth: 1024 }); // lg
  const isUpXL = useMediaQuery({ minWidth: 1280 }); // xl
  const isUp2XL = useMediaQuery({ minWidth: 1536 }); // 2xl

  const isDownSM = useMediaQuery({ maxWidth: 639 });
  const isDownMD = useMediaQuery({ maxWidth: 767 });
  const isDownLG = useMediaQuery({ maxWidth: 1023 });
  const isDownXL = useMediaQuery({ maxWidth: 1279 });
  const isDown2XL = useMediaQuery({ maxWidth: 1535 });

  return {
    isUpSM,
    isUpMD,
    isUpLG,
    isUpXL,
    isUp2XL,
    isDownSM,
    isDownMD,
    isDownLG,
    isDownXL,
    isDown2XL,
  };
};
