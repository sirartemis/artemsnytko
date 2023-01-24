import { MouseEventHandler } from "react";

export type SideMenuProps = {
  open: boolean;
  handleDrawerClose: MouseEventHandler<HTMLButtonElement>;
  toggleMode: () => void;
};
