import React from "react";

import {
  AppBar,
  Grid,
  Dialog,
  DialogContent,
  Box,
  IconButton,
  Toolbar,
  Typography,
  Slide,
} from "@mui/material";
import { TransitionProps } from "@mui/material/transitions";
import CloseIcon from "@mui/icons-material/Close";

import SingleColor from "../singleColor/singleColor";

import { ColorOrigin } from "../../models/colorOrigin.model";

import * as styles from "../../styles/styles";

const COLOR_GROUPS = [
  "Серийный цвет",
  "RAL Classic",
  "New Inspiration",
  "Серия Metallic",
  "Серия Terra",
  "Серия Pastell",
  "Серия Nature",
];

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

type DialogColorsProps = {
  show: boolean;
  colors: ColorOrigin[];
  colorCurrId: string;
  closeDialog: () => void;
  setColor: (colorId: string) => void;
};

const DialogColors: React.FC<DialogColorsProps> = ({
  show,
  colors,
  colorCurrId,
  closeDialog,
  setColor,
}) => {
  const handleSetColor = (colorId: string) => {
    setColor(colorId);
    closeDialog();
  };

  const renderColor = (color: any) => {
    return (
      <Grid
        key={color.id}
        size={{
          xs: 6,
          sm: 4,
          md: 3
        }}>
        <SingleColor
          color={color}
          highlighted={colorCurrId === color.id}
          handleClick={handleSetColor}
        />
      </Grid>
    );
  };

  return (
    <Box>
      <Dialog
        onClose={closeDialog}
        open={show}
        fullScreen
        slots={{ transition: Transition }}
      >
        <AppBar sx={{ position: "relative" }} color="transparent">
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={closeDialog}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
              Палитра цветов Arbonia
            </Typography>
          </Toolbar>
        </AppBar>
        <DialogContent>
          <Box sx={{
            marginTop: "20px"
          }}>
            <Typography sx={{ ...styles.smallText }}>
              По техническим причинам не является возможным абсолютно точно
              передать цвета.
            </Typography>
          </Box>

          {COLOR_GROUPS.map((group) => {
            return (
              <Box key={group} sx={{
                marginTop: "50px"
              }}>
                <Box sx={{
                  marginBottom: "20px"
                }}>
                  <Typography
                    sx={{
                      display: "inline",
                      color: "#333333",
                      fontSize: "14px",
                      textTransform: "uppercase"
                    }}>
                    {group}
                  </Typography>
                </Box>
                <Grid container spacing={2}>
                  {colors
                    .filter((x) => x.group === group)
                    .map((color) => {
                      return renderColor(color);
                    })}
                </Grid>
              </Box>
            );
          })}

          <Box sx={{
            marginTop: "30px"
          }} />
        </DialogContent>
      </Dialog>
    </Box>
  );
};

export default DialogColors;
