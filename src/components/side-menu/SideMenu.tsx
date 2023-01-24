import { SideMenuProps } from "@/types/side-menu";
import Image from "next/image";
import { Button, Drawer } from "@mui/material";
import { styled, useTheme } from "@mui/material/styles";
import { NavigationMenuItem } from "@/types/navigation-menu";
import localFont from "@next/font/local";
import { navigationMenu } from "@/mock";
import { color } from "@/styles/colors";

const oswaldFont = localFont({ src: "../../../public/fonts/Oswald500.ttf" });

const StyledDrawer = styled(Drawer)(({ theme }) => ({
  display: "flex",
  flexFlow: "column nowrap",
  justifyContent: "space-between",
  alignItems: "center",
  gap: "20px",
}));

const StyledMenu = styled("ul")(({ theme }) => ({
  display: "flex",
  listStyleType: "none",
  flexFlow: "column nowrap",
  justifyContent: "space-around",
  alignItems: "center",
  gap: "20px",
  padding: "20px",
  fontSize: "1.5rem",
}));

const StyledButton = styled(Button)(({ theme }) => ({
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

const menuItem = (item: NavigationMenuItem) => <li key={item}>{item}</li>;

export default function SideMenu({
  open,
  handleDrawerClose,
  toggleMode,
}: SideMenuProps) {
  return (
    <StyledDrawer open={open} anchor="bottom">
      <StyledWrapper onClick={(e) => e.stopPropagation()}>
        <StyledMenu className={oswaldFont.className}>
          {navigationMenu.map((item) => menuItem(item))}
        </StyledMenu>
        <StyledButton onClick={handleDrawerClose}>
          <Image
            loading="eager"
            src="/chevron-down.svg"
            width={20}
            height={20}
            alt=""
          />
        </StyledButton>
        <Button onClick={toggleMode}>toggle theme</Button>
      </StyledWrapper>
    </StyledDrawer>
  );
}
