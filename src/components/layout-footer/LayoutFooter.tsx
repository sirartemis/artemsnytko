import { styled, useTheme } from "@mui/material/styles";
import localFont from "@next/font/local";

const oswaldFont = localFont({ src: "../../../public/fonts/Oswald500.ttf" });

const StyledFooter = styled("div")(({ theme }) => ({
  display: "flex",
  flexFlow: "row wrap",
  justifyContent: "center",
  alignItems: "center",
  padding: "20px",
  width: "100%",
  background: theme.palette.footer,
  color: theme.palette.primary.contrastText,
}));

export default function LayoutFooter() {
  const theme = useTheme();
  return <StyledFooter className={oswaldFont.className}>Hi</StyledFooter>;
}
