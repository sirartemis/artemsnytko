import { Divider, styled } from "@mui/material";
import { animated, useSpring } from "@react-spring/web";
import { navigationMenu, link } from "@/mock";
import { NavigationMenuItem } from "@/types/navigation-menu";
import { ThemeSwitcher } from "@/components/theme-switcher";
import { AnimationSwitcher } from "@/components/animation-switcher";
import Link from "next/link";

const StyledMenu = styled("ul")(({ theme }) => ({
  display: "none",

  [theme.breakpoints.up("sm")]: {
    listStyleType: "none",
    display: "flex",
    flexFlow: "row nowrap",
    gap: "10px",
    lineHeight: "21px",
  },
}));

const AnimatedMenu = animated(StyledMenu);

const menuItem = (item: NavigationMenuItem) => (
  <Link key={item} href={link[item]}>
    <li>{item}</li>
  </Link>
);

export default function NavigationMenu() {
  const springs = useSpring({
    from: {
      transform: "scale(0)",
    },
    to: {
      transform: "scale(1)",
    },
    config: {
      tension: 500,
    },
    delay: 500,
  });

  return (
    <AnimatedMenu style={{ ...springs }}>
      <AnimationSwitcher />
      <Divider orientation="vertical" flexItem />
      <ThemeSwitcher />
      <Divider orientation="vertical" flexItem />
      {navigationMenu.map((item) => menuItem(item))}
    </AnimatedMenu>
  );
}
