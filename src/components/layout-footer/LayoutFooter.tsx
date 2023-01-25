import { styled, useTheme } from "@mui/material/styles";
import localFont from "@next/font/local";
import { Contacts } from "@/components/contacts";

const oswaldFont = localFont({ src: "../../../public/fonts/Oswald500.ttf" });

const StyledFooter = styled("div")(({ theme }) => ({
  display: "flex",
  flexFlow: "column nowrap",
  justifyContent: "space-around",
  gap: "20px",
  padding: "20px",
  alignItems: "center",
  width: "100%",
  background: theme.palette.footer,
  color: theme.palette.primary.contrastText,
}));

export default function LayoutFooter() {
  const theme = useTheme();
  return (
    <StyledFooter className={oswaldFont.className}>
      <Contacts />
      no rights reserved © Artem Snytko {Date().split(" ")[3]}
    </StyledFooter>
  );
}
