import { styled, useTheme } from "@mui/material/styles";
import { animated, useInView, useSpring } from "@react-spring/web";
import { FC } from "react";

const StyledSection = styled("section")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  background: theme.palette.primary.main,
}));

const AnimatedSection = animated(StyledSection);

export default function pageSection(Component: FC) {
  const Wrapper = (props: any) => {
    const theme = useTheme();
    const [sectionRef, isInView] = useInView();

    const springs = useSpring({
      scale: isInView ? 1 : 0,
      config: {
        tension: 500,
      },
    });

    return (
      <AnimatedSection ref={sectionRef} style={springs}>
        <Component {...props} />
      </AnimatedSection>
    );
  };

  return Wrapper;
}
