import { AnimationContext } from "@/HOC/page";
import { FormControlLabel, Switch, SwitchProps } from "@mui/material";
import { styled, useTheme } from "@mui/material/styles";
import localFont from "@next/font/local";
import { useContext } from "react";

const oswaldFont = localFont({
  src: "../../../public/fonts/Oswald500.ttf",
  variable: "--oswald-font",
});

const AnimationSwitch = styled((props: SwitchProps) => (
  <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
  width: 42,
  height: 26,
  padding: 0,
  "& .MuiSwitch-switchBase": {
    margin: 2,
    padding: 0,
    transform: "translateX(1px)",
    "&.Mui-checked": {
      color: "#fff",
      transform: "translateX(16px)",
      "& + .MuiSwitch-track": {
        opacity: 1,
        backgroundColor:
          theme.palette.mode === "dark"
            ? theme.palette.text.secondary
            : theme.palette.footer,
      },
    },
  },
  "& .MuiSwitch-thumb": {
    backgroundColor: theme.palette.mode === "dark" ? "#fff" : "#fff",
    width: 22,
    height: 22,
    boxSizing: "border-box",
  },
  "& .MuiSwitch-track": {
    opacity: 1,
    backgroundColor:
      theme.palette.mode === "dark" ? "#8796A5" : theme.palette.primary.dark,
    borderRadius: 26 / 2,
  },
}));

const StyledForm = styled(FormControlLabel)(({ theme }) => ({
  display: "flex",
  flexFlow: "row nowrap",
  justifyContent: "center",
  alignItems: "center",
  gap: "10px",
  margin: 0,
  "& span": {
    fontFamily: "var(--oswald-font)",
  },
}));

export default function AnimationSwitcher() {
  const theme = useTheme();
  const { toggleAnimation, animation } = useContext(AnimationContext);

  return (
    <StyledForm
      control={<AnimationSwitch checked={!animation} />}
      label={"animation"}
      onChange={toggleAnimation}
    />
  );
}
