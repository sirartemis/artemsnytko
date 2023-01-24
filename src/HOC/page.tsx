import { LayoutFooter } from "@/components/layout-footer";
import { styled } from "@mui/material/styles";
import {
  createContext,
  FC,
  MouseEvent,
  useMemo,
  useRef,
  useState,
} from "react";
import { LayoutHeader } from "../components/layout-header";
import localFont from "@next/font/local";
import { createTheme, PaletteMode, ThemeProvider } from "@mui/material";
import { getTheme } from "@/helpers/getTheme";
import { darkTheme } from "@/styles/themes/dark";
import { lightTheme } from "@/styles/themes/light";

export const ColorModeContext = createContext({
  toggleTheme: () => {},
  mode: "",
});

declare module "@mui/material/styles" {
  interface PaletteOptions {
    header?: string;
    footer?: string;
  }

  interface Palette {
    header?: string;
    footer?: string;
  }
}

const monoFont = localFont({ src: "../../public/fonts/Mono400.ttf" });

const StyledLayout = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.primary.dark,
  color: theme.palette.text.primary,
  fontSize: "18px",
}));

const ComponentWrapper = styled("div")(({ theme }) => ({
  display: "flex",
  flexFlow: "column nowrap",
  gap: "4rem",
  alignItems: "center",
  justifyContent: "space-between",
  marginTop: "60px",
}));

const themes = {
  dark: darkTheme,
  light: lightTheme,
};

export default function page(Component: FC) {
  const Layout = (props: any) => {
    const [mode, setMode] = useState<PaletteMode>("dark");
    const headerRef = useRef<{ handleDrawerClose: () => void } | null>(null);

    const colorMode = useMemo(
      () => ({
        toggleTheme: () => {
          setMode(mode === "dark" ? "light" : "dark");
        },
        mode,
      }),
      [mode]
    );

    const clickHandler = (e: MouseEvent) => {
      if (headerRef) {
        headerRef?.current?.handleDrawerClose();
      }
    };

    const theme = useMemo(
      () => createTheme(getTheme(mode, themes[mode])),
      [mode]
    );

    return (
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <StyledLayout className={monoFont.className} onClick={clickHandler}>
            <LayoutHeader ref={headerRef} />
            <ComponentWrapper>
              <Component {...props} />
            </ComponentWrapper>
            <LayoutFooter />
          </StyledLayout>
        </ThemeProvider>
      </ColorModeContext.Provider>
    );
  };
  return Layout;
}
