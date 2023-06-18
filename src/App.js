import MenuIcon from "@mui/icons-material/Menu"
import React from 'react';
import { AppBar, Container, Toolbar, IconButton, Typography, Box, Button, Paper, Grid, Card, CardMedia, CardActions, CardContent, } from '@mui/material';
import { createTheme } from '@mui/system';
import AlignVerticalBottomIcon from '@mui/icons-material/AlignVerticalBottom';

const theme = createTheme({
    spacing: 8,
    palette: {
      primary: {
        main: '#4169E1',
      },
      secondary: {
        main: '#9575cd',
      },
      header: {
        main: '#FFFFFF',
      },
      black: {
        main: '#000000',
      },
      cyan: {
        main: '#e7f2f4',
      }
    },
    }
);

const cards = [1,2,3,4,5,6,7,8,9];

function App() {
  return (
    <>
    <AppBar sx = {{bgcolor: theme.palette.header.main}}  position="fixed">
      <Container>
        <Toolbar>
          <IconButton edge="start"  color = "inherit" aria-label="menu" sx={{mr: 3}}>
            <MenuIcon sx = {{ color: theme.palette.primary.main }}  />
          </IconButton>
          <Typography  variant="h6" sx={{ flexGrow: 1, color: theme.palette.primary.main }} >Илья Волков</Typography>
          <Box>
            <Button sx = {{ mr: 1, bgcolor: theme.palette.primary.main }}  variant="contained">Контакты</Button>
          </Box >
          <Button sx = {{ bgcolor: theme.palette.primary.main }} variant="contained" href="https://vk.com/aalout" target="_blank">Написать мне</Button>
        </Toolbar>
      </Container>
    </AppBar>

      <main>
        <Paper sx = {{position: "relative", backgroundPosition: "center", backgroundSize: "cover", backgroundRepeat: "no-repeat", top: 60, marginBottom: 4}}
        style={{backgroundImage: "url(https://d11d9oqz0intmj.cloudfront.net/usetldr/2220317/u/2262251/assets/ts-1687017878/29b49092-8c16-48dd-8ca9-170d7ce060e1-1687017877501)"}}>
          <Typography>
           ㅤㅤ
          </Typography>
          <Typography>
           ㅤㅤ
          </Typography>
          <Typography>
           ㅤㅤ
          </Typography>
          <Container fixed>
            <Grid container>
              <Grid item md={6}>
                <div sx = {{position: "relative", padding: 4, marginTop: 10}}>
                  <Typography sx = {{color: theme.palette.black.main, marginTop: 10}} component="h1" variant="h3" color="inherit" gutterBottom>
                    Дизайн и верстка
                  </Typography>
                  <Typography sx = {{color: theme.palette.black.main, marginTop: 5}} variant="h5" color="inherit" paragraph>
                    Хотите получить качественный дизайн и верстку
                    и потратить на это минимальное время?
                  </Typography>
                  <Button sx = {{marginTop: 4, bgcolor: theme.palette.primary.main}} variant="contained" href="https://vk.com/aalout" target="_blank">
                    Напишите мне
                  </Button>
                  <Typography sx = {{marginTop: 10}}>
                  ㅤㅤ
                  </Typography>
                </div>
              </Grid>
            </Grid>
          </Container>
        </Paper>
        <div>
          <Container maxWidth="sm">
            <Typography variant="h2" align = "center" gutterBottom sx = {{color: theme.palette.black.main, marginTop: 15}}>
              Обо мне
            </Typography>
            <Typography variant="h5" align = "center" paragraph sx = {{ color: theme.palette.black.main }}>
              Я - студент Института опережающих технологий "Школа Х".
              У меня большое количество проектов на счету, многие из
              которых включали в себя разработку React приложения.
              Я хочу получить больше опыта разработки, поэтому
              жду ваших предложений!
              
            </Typography>
            <div>
              <Grid container spacing={2} justify="center" sx = {{marginLeft: 17}}>
                <Grid item>
                  <Button variant="contained" sx = {{ bgcolor: theme.palette.primary.main }}>Портфолио</Button>
                </Grid>
                <Grid item>
                  <Button variant="contained" sx = {{ bgcolor: theme.palette.primary.main }}>Процесс</Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
        <Container sx = {{marginTop: 10 }} maxWidth="md">
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card>
                  <CardMedia sx = {{paddingTop: "56.25%"}} image="https://source.unsplash.com/random/?city,night" title="image title"/>
                  <CardContent sx = {{bgcolor: theme.palette.cyan.main, flexGrow: 1}}>
                  <Typography sx = {{bgcolor: theme.palette.cyan.main}} variant="h5" gutterBottom>
                    Проект
                  </Typography>
                  <Typography sx = {{bgcolor: theme.palette.cyan.main}}>
                    Здесь будет описание проекта
                  </Typography>
                  </CardContent>
                  <CardActions sx = {{bgcolor: theme.palette.cyan.main}}>
                    <Button size="small" sx = {{bgcolor: theme.palette.cyan.main, color: theme.palette.primary.main }} >
                      Подробнее
                    </Button>
                    <AlignVerticalBottomIcon sx = {{marginRight: 4}}/>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>

    <footer>
      <Container sx = {{marginTop: 7}}>
        <Toolbar >
          <Typography  variant="h6" sx={{ flexGrow: 1, color: theme.palette.black.main}} >Илья Волков</Typography>
          <Box sx = {{mr: 1}}>
            Политика конфиденциальности  
          </Box >
          Copywrite ©
        </Toolbar>
      </Container>
    </footer>


    </>
  );
}

export default App;
