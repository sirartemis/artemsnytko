import Image from "next/image";
import localFont from "@next/font/local";
import { Button, Drawer, styled } from "@mui/material";
import { link, navigationMenu } from "@/mock";
import { SideMenuProps } from "@/types/side-menu";
import { NavigationMenuItem } from "@/types/navigation-menu";
import { color } from "@/styles/colors";
import { ThemeSwitcher } from "@/components/theme-switcher";
import { AnimationSwitcher } from "@/components/animation-switcher";
import { Contacts } from "@/components/contacts";
import Link from "next/link";

const oswaldFont = localFont({ src: "../../../public/fonts/Oswald500.ttf" });

const StyledDrawer = styled(Drawer)(() => ({
  display: "flex",
  flexFlow: "column nowrap",
  justifyContent: "space-between",
  alignItems: "center",
  gap: "20px",
}));

const StyledMenu = styled("ul")(() => ({
  display: "flex",
  listStyleType: "none",
  flexFlow: "column nowrap",
  justifyContent: "space-around",
  alignItems: "center",
  gap: "20px",
  padding: "20px",
  fontSize: "1.5rem",
}));

const StyledButton = styled(Button)(() => ({
  padding: "40px",
  width: "20px",
  height: "20px",
  alignSelf: "center",
}));

const StyledWrapper = styled("div")(({ theme }) => ({
  display: "flex",
  flexFlow: "column nowrap",
  justifyContent: "space-around",
  alignItems: "center",
  gap: "20px",
  backgroundColor: theme.palette.primary.light,
  color: color.pastel.deep,
}));

const Controls = styled("div")(() => ({
  display: "flex",
  flexFlow: "row nowrap",
  justifyContent: "center",
  alignItems: "center",
  gap: "20px",
}));

const menuItem = (item: NavigationMenuItem) => (
  <Link key={item} href={link[item]}>
    <li>{item}</li>
  </Link>
);

export default function SideMenu({ open, handleDrawerClose }: SideMenuProps) {
  return (
    <StyledDrawer open={open} anchor="bottom">
      <StyledWrapper onClick={(e) => e.stopPropagation()}>
        <StyledMenu className={oswaldFont.className}>
          <Controls>
            <AnimationSwitcher />
            <ThemeSwitcher />
          </Controls>
          <Contacts />
          {navigationMenu.map((item) => menuItem(item))}
        </StyledMenu>
        <StyledButton onClick={handleDrawerClose}>
          <Image src="/chevron-down.svg" width={20} height={20} alt="" />
        </StyledButton>
      </StyledWrapper>
    </StyledDrawer>
  );
}
