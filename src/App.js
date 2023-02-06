import { Container, ThemeProvider } from "@material-ui/core";
import React from "react";
import FeaturedPost from "./components/FeaturedPost";
import Header from "./components/Header";
import { createTheme } from "@material-ui/core/styles";
import "./App.css";
import { Grid } from "@material-ui/core";
import { featuredPosts } from "./data/Data";

function App() {
  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <Container>
        <Header />
        <FeaturedPost />
        <br />
        <Grid container spacing ={4}>
          {featuredPosts.map((post) => (
            <PostCard post={post} key={post.title} />

          ))}
        </Grid>
        <Grid container spacing={5} className={classes.mainGrid}>
        <Main/>
        <Sidebar/>
        </Grid>
      </Container>
    </ThemeProvider>
  );
}

export default App;
