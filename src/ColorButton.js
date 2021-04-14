import { forwardRef } from "react";

import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import ButtonBase from "@material-ui/core/ButtonBase";

const useStyles = makeStyles(theme => ({
  paper: {
    width: "100%",
    minHeight: 60,
    position: "relative",
    zIndex: 0,
    overflow: "hidden",
    backgroundColor: theme.palette.background.default
  },
  button: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
  },
  box: {
    zIndex: 1,
    gap: theme.spacing(2),
    padding: `0 ${theme.spacing(1)}px`
  },
}));

const Preview = ({ gradient, border, ...props }) => {
  return (
    <span
      style={{
        display: "inline-block",
        height: 45,
        width: 45,
        background: gradient,
        borderRadius: 4,
        border: (border ? `solid 2px ${border}` : "none")
      }}
      {...props}
    />
  );
};

const ColorButton = forwardRef(
  ({ preview, onClick, children, border, ...props }, ref) => {
    const classes = useStyles();
    return (
      <Paper className={classes.paper} ref={ref} {...props}>
        <ButtonBase onClick={onClick} className={classes.button}>
          <Grid container wrap="nowrap" direction="row" alignItems="center" className={classes.box}>
            <Grid item>
              <Preview border={border} gradient={preview} />
            </Grid>
            <Grid item zeroMinWidth>{children}</Grid>
          </Grid>
        </ButtonBase>
      </Paper>
    );
  }
);

export default ColorButton;
