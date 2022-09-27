import { Container, ThemeProvider } from '@mui/material'
import Appbar from '../components/appbar'
import theme from '../styles/theme'

function Home() {
  return (
    <ThemeProvider theme={theme}>
      <Container
        maxwidth="xl"
        sx={{
          background: '#fff'
        }}
      >
        <Appbar />
        {
          /*
          banner
          promotions
          title
          product 
          footer
          searchBox
          appdrawer
          */
        }
      </Container>
    </ThemeProvider>
  )
}

export default Home