import { PaletteMode } from "@mui/material";
import { Theme } from "@/types/theme";

export const getTheme = (mode: PaletteMode, theme: Theme) => ({
  palette: {
    mode,
    ...theme.palette,
  },
});
