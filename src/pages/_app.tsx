import { createContext, useEffect, useMemo, useState } from "react";
import {
  createTheme,
  PaletteMode,
  ThemeProvider,
  useMediaQuery,
} from "@mui/material";
import { darkTheme } from "@/styles/themes/dark";
import { lightTheme } from "@/styles/themes/light";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { getTheme } from "@/helpers/getTheme";
import { Globals } from "@react-spring/web";

export const ColorModeContext = createContext({
  toggleTheme: () => {},
  mode: "",
});

export const AnimationContext = createContext({
  toggleAnimation: () => {},
  animation: false,
});

const themes = {
  dark: darkTheme,
  light: lightTheme,
};

export default function App({ Component, pageProps }: AppProps) {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const [mode, setMode] = useState<PaletteMode>("dark");
  const [animation, setAnimation] = useState<boolean>(false);

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

  const theme = useMemo(
    () => createTheme(getTheme(mode, themes[mode])),
    [mode]
  );

  return (
    <AnimationContext.Provider value={animationContext}>
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />;
        </ThemeProvider>
      </ColorModeContext.Provider>
    </AnimationContext.Provider>
  );
}
