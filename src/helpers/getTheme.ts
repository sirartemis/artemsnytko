import { Theme } from "@/types/theme";
import { PaletteMode } from "@mui/material";

export const getTheme = (mode: PaletteMode, theme: Theme) => ({
  palette: {
    mode,
    ...theme.palette,
  },
});
