import styled from "@emotion/styled";
import localFont from "@next/font/local";
import { animated, useInView, useSpring } from "@react-spring/web";
import { forwardRef, useImperativeHandle, useState } from "react";
import { NavigationMenu } from "@/components/navigation-menu";
import { BurgerButton } from "@/components/burger-button";
import { SideMenu } from "../side-menu";
import { Avatar } from "../avatar";
import { ClickAwayListener, Portal } from "@mui/material";

const oswaldFont = localFont({ src: "../../../public/fonts/Oswald500.ttf" });

const StyledHeader = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 20px;
  background-color: #2d2d2e;
  position: fixed;
  z-index: 1000;
  top: 0;
  left: 0;
  font-size: 1.5rem;
`;

const AnimatedHeader = animated(StyledHeader);

const Header = forwardRef((props, ref) => {
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
