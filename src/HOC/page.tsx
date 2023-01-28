import { FC, useEffect, useRef, useState } from "react";
import localFont from "@next/font/local";
import { styled } from "@mui/material";
import { LayoutHeader } from "@/components/layout-header";
import { LayoutFooter } from "@/components/layout-footer";
import Head from "next/head";

const oswaldFont = localFont({
  src: "../../public/fonts/Oswald500.ttf",
  variable: "--oswald-font",
});

const StyledLayout = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.primary.dark,
  color: theme.palette.text.primary,
  fontSize: "18px",
  fontFamily: "var(--oswald-font)",
}));

const ComponentWrapper = styled("div")(() => ({
  display: "flex",
  flexFlow: "column nowrap",
  gap: "4rem",
  alignItems: "center",
  justifyContent: "space-between",
  marginTop: "60px",
}));

export default function page(Component: FC) {
  const Layout = (props: any) => {
    const headerRef = useRef<{ handleDrawerClose: () => void } | null>(null);
    const titleRef = useRef<string>("");
    titleRef.current = Component.name;

    const clickHandler = () => {
      if (headerRef) {
        headerRef?.current?.handleDrawerClose();
      }
    };

    return (
      <StyledLayout className={oswaldFont.variable} onClick={clickHandler}>
        <LayoutHeader ref={headerRef} />
        <ComponentWrapper>
          <Head>
            <title>{titleRef.current} | Artem Snytko</title>
          </Head>
          <Component {...props} />
        </ComponentWrapper>
        <LayoutFooter />
      </StyledLayout>
    );
  };
  return Layout;
}
