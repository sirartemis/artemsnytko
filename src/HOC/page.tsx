import { createContext, FC, useEffect, useMemo, useRef, useState } from "react";
import localFont from "@next/font/local";
import {
  createTheme,
  PaletteMode,
  ThemeProvider,
  useMediaQuery,
  styled,
} from "@mui/material";
import { getTheme } from "@/helpers/getTheme";
import { darkTheme } from "@/styles/themes/dark";
import { lightTheme } from "@/styles/themes/light";
import { Globals } from "@react-spring/web";
import { LayoutHeader } from "@/components/layout-header";
import { LayoutFooter } from "@/components/layout-footer";

export const ColorModeContext = createContext({
  toggleTheme: () => {},
  mode: "",
});

export const AnimationContext = createContext({
  toggleAnimation: () => {},
  animation: false,
});

const monoFont = localFont({
  src: "../../public/fonts/Mono400.ttf",
  variable: "--mono-font",
});

const StyledLayout = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.primary.dark,
  color: theme.palette.text.primary,
  fontSize: "18px",
  fontFamily: "var(--mono-font)",
}));

const ComponentWrapper = styled("div")(() => ({
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
    const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
    const [mode, setMode] = useState<PaletteMode>("dark");
    const [animation, setAnimation] = useState<boolean>(false);
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

    const animationContext = useMemo(
      () => ({
        toggleAnimation: () => {
          setAnimation(!animation);
        },
        animation,
      }),
      [animation]
    );

    const clickHandler = () => {
      if (headerRef) {
        headerRef?.current?.handleDrawerClose();
      }
    };

    const theme = useMemo(
      () => createTheme(getTheme(mode, themes[mode])),
      [mode]
    );

    useEffect(() => {
      Globals.assign({
        skipAnimation: animation,
      });

      return () => {
        Globals.assign({
          skipAnimation: !animation,
        });
      };
    });

    useEffect(() => {
      setMode(prefersDarkMode ? "dark" : "light");
    }, [prefersDarkMode]);

    return (
      <AnimationContext.Provider value={animationContext}>
        <ColorModeContext.Provider value={colorMode}>
          <ThemeProvider theme={theme}>
            <StyledLayout className={monoFont.variable} onClick={clickHandler}>
              <LayoutHeader ref={headerRef} />
              <ComponentWrapper>
                <Component {...props} />
              </ComponentWrapper>
              <LayoutFooter />
            </StyledLayout>
          </ThemeProvider>
        </ColorModeContext.Provider>
      </AnimationContext.Provider>
    );
  };
  return Layout;
}
