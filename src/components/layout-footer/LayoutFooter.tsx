import styled from "@emotion/styled";
import localFont from "@next/font/local";

const oswaldFont = localFont({ src: "../../../public/fonts/Oswald500.ttf" });

const StyledFooter = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  padding: 20px;
  width: 100%;
  background: #132d2d;
`;

export default function LayoutFooter() {
  return <StyledFooter className={oswaldFont.className}>Hi</StyledFooter>;
}
