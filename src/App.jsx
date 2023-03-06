import {
  Typography,
  AppBar,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  CssBaseline,
  Grid,
  Toolbar,
  Container,
  Button
} from "@mui/material";
import { PhotoCamera } from "@mui/icons-material";


// We are creating a hook called useStyles
// const useStyles = makeStyles((theme)=>({
//   container:{
//     backgroundColor: theme.palette.backgroud.paper,
//     padding:theme.spacing(8,0,6)
//   }
// }))

function App() {

  // const classes = useStyles() 
  return (
    <>
      <CssBaseline />{" "}
      {/*This is going to give a lot of default styling in the material ui applications */}
      <AppBar position="relative">
        {" "}
        {/* This is the navbar */}
        <Toolbar>
          <PhotoCamera />
          <Typography variant="h6">Photo Album</Typography>
        </Toolbar>
      </AppBar>
      <main>
        <div>
          <Container maxWidth="sm" style={{marginTop:'80px'}}>
            <Typography
              variant="h2"
              align="center"
              color="textPrimary"
              gutterBottom
            >
              {/** Gutter bottom adds some margin to the bottom of this specific typography */}
              Photo Album
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="textSecondary"
              paragraph
            >
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. 
            </Typography>
            <div>
              <Grid container spacing={2} justifyContent="center">
                <Grid item>
                  <Button variant="contained" color="primary"> 
                    See my photos
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="outlined" color="primary"> 
                    Secondary action
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
        <Container maxWidth="md" >
        <Grid container spacing={4} justifyContent="center" marginTop={10}>
          <Grid item>
            <Card>
              <CardMedia
              image="https://source.unsplash.com/random"
              title="Image title"
              style={{width:'100px',height:'100px'}}
              /> {/* To add images */}

              <CardContent>
                <Typography gutterBottom variant="h5">This is the card body</Typography>
                <Typography>This is a media card</Typography>
              </CardContent>
              <CardActions>
                <Button size="small" color="primary">
                  Add to cart
                </Button>
                <Button size="small" color="secondary">
                  Add to wishlist
                </Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
        </Container>
      </main>
    </>
  );
}

export default App;
