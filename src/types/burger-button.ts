import { MouseEventHandler } from "react";

export type BurgerButtonProps = {
  clickHandler: MouseEventHandler<HTMLButtonElement>;
  visibility: boolean;
};
