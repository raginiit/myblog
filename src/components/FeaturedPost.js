import {
  Button,
  Card,
  CardActions,
  CardContent,
  makeStyles,
  Typography,
} from "@material-ui/core";
// import React from 'react';

const useStyles = makeStyles({
  title: {
    fontSize: 40,
    fontFamily: "Montesrrat",
  },
  cover: {
    backgroundImage: "https://www.peakpx.com/en/hd-wallpaper-desktop-nnzvp",
    backgroundPosition: "center",
    padding: "35px 25 px",
  },
});

const FeaturedPost = () => {
  const classes = useStyles();

  return (
    <Card className={classes.cover}>
      <CardContent className={classes.textContainer}>
        <Typography className={classes.title}>
          
          Title of longer featured of blog post{" "}
        </Typography>
        <Typography variant="h5">
          
          Multiples lines of text that form the idea,informing new readers
          quickly. 
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant="text" className={classes.btn}>
          Read more...
        </Button>
      </CardActions>
    </Card>
  );
};

export default FeaturedPost;
