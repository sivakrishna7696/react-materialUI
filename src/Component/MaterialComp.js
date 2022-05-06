import React from 'react'
import {Typography,AppBar,Card,CardActions,CardContent,CardMedia,CssBaseline,Grid ,Toolbar, Container, Button } from '@material-ui/core'
import { PhotoCamera } from '@material-ui/icons'
import {makeStyles} from '@material-ui/core/styles'
import usestyles from './styles'


function MaterialComp() {
    const classes = usestyles();
  return (
    <>
        <CssBaseline />
        <AppBar position="relative">
            <Toolbar>
                <PhotoCamera />
                <Typography variant="h6">
                    Photo album
                </Typography>
            </Toolbar>
        </AppBar>
        <main>
            <div className={classes.container}>
                <Container maxWidth="sm" style={{marginTop:'100px'}}>
                    <div className='classes.button'> 
                    <Typography variant="h2" align='center'>Album layout</Typography>
                    <Typography variant="h5" align='center'>Something short and leading about the collection below—its contents, the creator, etc. Make it short and sweet, but not too short so folks don't simply skip over it entirely.
</Typography>
                   <Grid container spacing={2} justify="center">
                        <Grid item >
                            <Button variant="contained" color="primary">MAIN CALL TO ACTION</Button>
                        </Grid>
                        <Grid item>
                            <Button variant="outlined">SECONDARY ACTION</Button>
                        </Grid>
                   </Grid>
                   </div>
                </Container>

                <container className={classes.cardGrid} maxWidth="md">
                    <Grid container spacing={4}>
                            <Grid item>
                                <card className={classes.card}>
                                    <cardMedia className={classes.cardMedia} 
                                    image="https://images.unsplash.com/photo-1494253109108-2e30c049369b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8cmFuZG9tfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
                                    title="image title"
                                    />
                                    <img style={{width:"100%"}} src="https://images.unsplash.com/photo-1494253109108-2e30c049369b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8cmFuZG9tfGVufDB8fDB8fA%3D%3D&w=1000&q=80" />
                                </card>
                                <CardContent className={classes.cardContent}>
                                        <Typography variant="h5">
                                                heading
                                        </Typography>
                                        <Typography variant="h5">
                                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste eos iure porro. Qui fugit tenetur excepturi. Repellat officiis quae enim.
                                        </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size="small" color="primary">view</Button>
                                    <Button size="small" color="primary">edit</Button>

                                </CardActions>
                            </Grid>
                    </Grid>


                    
                </container>
            </div>
        </main>
        <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image="/static/images/cards/contemplative-reptile.jpg"
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    </>
  )
}

export default MaterialComp