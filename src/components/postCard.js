import { CardActionArea, CardContent, CardMedia, Hidden, Typography } from "@material-ui/core";
// import { Classes } from '@material-ui/styles';
import React from "react";



const useStyles = makeStyle({
  card:{
    display:"flex",
  },
  cardDetails:{
    width:160,
  },

});

const postCard = ( post) => {
  const classes = useStyles();


  return (
    <Grid item xs={12} md={6}>
      <CardActionArea
        components="a"
        href="  https://wallpaper.dog/generic-wallpapers  "
      >
        <Card className={classes.card}>
          <div className={classes.cardDetails}>
            <CardContent>
              <Typography component="h2" variant="h5">
                {postCard.title}
              </Typography>
              <Typography variant="subtitles1" color="textSecondary">
                {postCard.date}
              </Typography>
              <Typography variant="subtitles1" paragraph>
                {postCard.description}
              </Typography>
              <Typography variant="subtitle" style={{ color: "skyblue" }}>
                continue reading...
              </Typography>
            </CardContent>
          </div>
           
           <Hidden xsDown>
            <CardMedia  class={ classes.CardMedia}/>
            image={post.image}
            tiltle={post.imageTitle}

           </Hidden>

        </Card>
      </CardActionArea>
    </Grid>
  );
};

export default postCard;
