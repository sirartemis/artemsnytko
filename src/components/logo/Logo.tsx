import { animated, useInView, useSpring } from "@react-spring/web";

const AnimatedLogo = animated("div");

export default function Logo() {
  const [viewRef, isInView] = useInView();
  const springs = useSpring({
    scale: isInView ? 1 : 0,
    config: {
      tension: 500,
    },
    delay: 300,
  });

  return (
    <AnimatedLogo ref={viewRef} style={springs}>
      Logo
    </AnimatedLogo>
  );
}
