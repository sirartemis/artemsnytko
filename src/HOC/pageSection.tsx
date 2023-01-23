import styled from "@emotion/styled";
import { animated, useInView, useSpring } from "@react-spring/web";
import { FC } from "react";

const StyledSection = styled.section`
  display: flex;
  align-items: center;
  min-height: 80vh;
  width: 100vw;
  background: #232324;
`;

const AnimatedSection = animated(StyledSection);

export default function pageSection(Component: FC) {
  const Wrapper = (props: any) => {
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
