import { styled, useTheme } from "@mui/material/styles";
import localFont from "@next/font/local";
import { animated, useInView, useSpring } from "@react-spring/web";
import { forwardRef, useImperativeHandle, useState } from "react";
import { NavigationMenu } from "@/components/navigation-menu";
import { BurgerButton } from "@/components/burger-button";
import { SideMenu } from "../side-menu";
import { Avatar } from "../avatar";

const oswaldFont = localFont({ src: "../../../public/fonts/Oswald500.ttf" });

const StyledHeader = styled("div")(({ theme }) => ({
  display: "flex",
  flexFlow: "row nowrap",
  justifyContent: "space-between",
  alignItems: "center",
  width: "100%",
  padding: "20px",
  backgroundColor: theme.palette.header,
  position: "fixed",
  zIndex: "1000",
  top: 0,
  left: 0,
  fontSize: "1.5rem",
}));

const AnimatedHeader = animated(StyledHeader);

const Header = forwardRef((props, ref) => {
  const theme = useTheme();
  const [open, setOpen] = useState(false);

  const [headerRef, springs] = useInView(() => ({
    from: {
      opacity: 0,
      height: 0,
      padding: 0,
    },
    to: {
      padding: 20,
      opacity: 1,
      height: 60,
    },
  }));

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    open && setOpen(false);
  };

  useImperativeHandle(ref, () => ({
    handleDrawerClose,
  }));

  return (
    <AnimatedHeader
      className={oswaldFont.className}
      ref={headerRef}
      style={springs}
    >
      <Avatar />
      <NavigationMenu />
      <BurgerButton visibility={open} clickHandler={handleDrawerOpen} />
      <SideMenu open={open} handleDrawerClose={handleDrawerClose} />
    </AnimatedHeader>
  );
});

Header.displayName = "Header";

export default Header;
