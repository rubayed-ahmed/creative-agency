import './App.css';
import {Button, CssBaseline, ThemeProvider} from "@mui/material"
import {RouterProvider} from "react-router-dom"
import { router } from './Router/Router';
import { theme } from './theme/theme';

function App() {
  return (
<ThemeProvider theme={theme}>
  <RouterProvider router={router}>
    <CssBaseline/>
  </RouterProvider>
</ThemeProvider>
  );
}


export default App;
