import { LayoutFooter } from "@/components/layout-footer";
import styled from "@emotion/styled";
import { FC, MouseEvent, MutableRefObject, useRef } from "react";
import { LayoutHeader } from "../components/layout-header";
import localFont from "@next/font/local";

const monoFont = localFont({ src: "../../public/fonts/Mono400.ttf" });

const StyledLayout = styled.div`
  background-color: #1b1b1c;
`;

const ComponentWrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  gap: 4rem;
  align-items: center;
  justify-content: space-between;
  margin-top: 60px;
`;

export default function page(Component: FC) {
  const Layout = (props: any) => {
    const headerRef = useRef<{ handleDrawerClose: () => void } | null>(null);

    const clickHandler = (e: MouseEvent) => {
      if (headerRef) {
        headerRef?.current?.handleDrawerClose();
        console.log(e.target);
      }
    };

    return (
      <StyledLayout className={monoFont.className} onClick={clickHandler}>
        <LayoutHeader ref={headerRef} />
        <ComponentWrapper>
          <Component {...props} />
        </ComponentWrapper>
        <LayoutFooter />
      </StyledLayout>
    );
  };
  return Layout;
}
