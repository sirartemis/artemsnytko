import { SideMenuProps } from "@/types/side-menu";
import Image from "next/image";
import { Button, Drawer } from "@mui/material";
import styled from "@emotion/styled";
import { NavigationMenuItem } from "@/types/navigation-menu";
import localFont from "@next/font/local";
import { navigationMenu } from "@/mock";

const oswaldFont = localFont({ src: "../../../public/fonts/Oswald500.ttf" });

const StyledDrawer = styled(Drawer)`
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
`;

const StyledMenu = styled.ul`
  display: flex;
  list-style-type: none;
  flex-flow: column nowrap;
  justify-content: space-around;
  align-items: center;
  gap: 20px;
  padding: 20px;
  font-size: 1.5rem;
`;

const StyledButton = styled(Button)`
  padding: 40px;
  width: 20px;
  height: 20px;
  align-self: center;
`;

const StyledWrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-around;
  align-items: center;
  gap: 20px;
  background-color: #8da7a7;
`;

const menuItem = (item: NavigationMenuItem) => <li>{item}</li>;

export default function SideMenu({ open, handleDrawerClose }: SideMenuProps) {
  return (
    <StyledDrawer open={open} anchor="bottom">
      <StyledWrapper onClick={(e) => e.stopPropagation()}>
        <StyledMenu className={oswaldFont.className}>
          {navigationMenu.map((item) => menuItem(item))}
        </StyledMenu>
        <StyledButton onClick={handleDrawerClose}>
          <Image src="/chevron-down.svg" width={20} height={20} alt="" />
        </StyledButton>
      </StyledWrapper>
    </StyledDrawer>
  );
}
