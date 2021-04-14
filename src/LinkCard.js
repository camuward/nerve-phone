import { forwardRef, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import ButtonBase from "@material-ui/core/ButtonBase";

const useStyles = makeStyles(theme => ({
  card: {
    height: 200,
    position: "relative",
    zIndex: 0,
  },
  cardButton: {
    justifyContent: "flex-start",
    alignItems: "flex-end",
    padding: `${theme.spacing(3)}px ${theme.spacing(2)}px`,
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    width: "100%",
  },
  cardImage: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    zIndex: 0,
    height: 200,
    backgroundSize: "cover",
  },
  cardBackdrop: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    background: "#000",
    opacity: 0.4,
    zIndex: 1,
    transition: "opacity 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
  },
  cardBackdropHide: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    opacity: 0,
    zIndex: 1,
    transition: "opacity 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
  },
  cardText: {
    zIndex: 2,
    color: "white",
    background: "transparent",
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(1),
    transition: "background 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
  },
  cardTextHighlight: {
    zIndex: 2,
    background: "black",
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(1),
    transition: "background 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
  },
}));

const LinkCard = forwardRef(
  ({ title, backgroundImage, backgroundColor, onClick, ...props }, ref) => {
    const classes = useStyles();
    const [hover, setHover] = useState(false);
    return (
      <Card
        className={classes.card}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        {...props}
      >
        <ButtonBase
          focusRipple
          onFocus={() => setHover(true)}
          onBlur={() => setHover(false)}
          onClick={onClick}
          ref={ref}
          className={classes.cardButton}
        >
          <span
            className={classes.cardImage}
            {...(backgroundImage
              ? { style: { backgroundImage: backgroundImage } }
              : backgroundColor
              ? { style: { background: backgroundColor } }
              : {})}
          />
          <span
            className={hover ? classes.cardBackdropHide : classes.cardBackdrop}
          />
          <span className={classes.cardText}>
            <Typography
              variant="h4"
              component="span"
              className={hover ? classes.cardTextHighlight : classes.cardText}
            >
              {title}
            </Typography>
          </span>
        </ButtonBase>
      </Card>
    );
  }
);

export default LinkCard;
