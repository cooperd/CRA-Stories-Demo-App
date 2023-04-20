import './App.css';
import ResponsiveAppBar from "./components/AppBar";
import Stories from "./components/Stories";
import AppBottomNavigation from "./components/AppBottomNevigation";
import Container from "@mui/material/Container";
import {Box, CssBaseline} from "@mui/material";

function App() {
  return (
      <Box sx={{
              display: 'flex',
              flexDirection: 'column',
              minHeight: '100vh',
          }}
        >
        <CssBaseline />
        <ResponsiveAppBar/>
        <Container component="main" maxWidth="sm" sx={{ px: 0 }} >
          <Stories/>
        </Container>
          <Box
              component="footer"
              sx={{
                  position: 'fixed', bottom: 0, left: 0, right: 0,
                  px:0,
                  mt: 'auto',
                  backgroundColor: (theme) =>
                      theme.palette.mode === 'light'
                          ? theme.palette.grey[200]
                          : theme.palette.grey[800],
              }}
          >
              <Container sx={{ px:0 }}>
                <AppBottomNavigation/>
              </Container>
          </Box>
    </Box>
  );
}

export default App;
