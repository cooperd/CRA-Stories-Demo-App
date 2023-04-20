import './App.css';
import ResponsiveAppBar from "./components/AppBar";
import AppStories from "./components/AppStories";
import AppBottomNavigation from "./components/AppBottomNevigation";
import {Box} from "@mui/material";

function App() {
  return (
    <>
      <ResponsiveAppBar/>
      <AppStories/>
      <Box
        component="footer"
        sx={{
          position: 'fixed', bottom: 0, left: 0, right: 0,
          px:0,
          mt: 'auto'
      }}
      >
        <AppBottomNavigation/>
      </Box>
  </>
  );
}

export default App;
