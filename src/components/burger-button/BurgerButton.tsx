import { BurgerButtonProps } from "@/types/burger-button";
import { IconButton } from "@mui/material";
import Image from "next/image";
import { styled } from "@mui/material";

const StyledBurger = styled("div")(({ theme }) => ({
  display: "none",

  [theme.breakpoints.down("sm")]: {
    display: "block",
  },
}));

export default function BurgerButton({
  clickHandler,
  visibility,
}: BurgerButtonProps) {
  return (
    <StyledBurger>
      <IconButton
        color="inherit"
        aria-label="open drawer"
        onClick={clickHandler}
        edge="start"
        sx={{ ...(visibility && { display: "none" }) }}
      >
        <Image loading="eager" src="bars.svg" width={30} height={30} alt="" />
      </IconButton>
    </StyledBurger>
  );
}
