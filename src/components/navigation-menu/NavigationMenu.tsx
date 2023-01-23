import styled from "@emotion/styled";
import { NavigationMenuItem } from "@/types/navigation-menu";
import { navigationMenu } from "@/mock";
import { animated, useSpring } from "@react-spring/web";

const StyledMenu = styled.ul`
  display: none;

  @media screen and (min-width: 600px) {
    list-style-type: none;
    display: flex;
    flex-flow: row nowrap;
    gap: 10px;
  }
`;

const AnimatedMenu = animated(StyledMenu);

const menuItem = (item: NavigationMenuItem) => <li>{item}</li>;

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
      {navigationMenu.map((item) => menuItem(item))}
    </AnimatedMenu>
  );
}
