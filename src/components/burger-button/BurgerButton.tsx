import { BurgerButtonProps } from "@/types/burger-button";
import { IconButton } from "@mui/material";
import Image from "next/image";
import styled from "@emotion/styled";

const StyledBurger = styled.div`
  display: none;

  @media screen and (max-width: 600px) {
    display: block;
  }
`;

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
