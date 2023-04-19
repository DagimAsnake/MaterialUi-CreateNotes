import React from "react";
import {Route, Routes} from 'react-router-dom'
import Create from "./pages/Create";
import Note from "./pages/Note";
import Layout from "./components/Layout";
// import {createTheme, ThemeProvider} from "@mui/material/styles"

// const theme = createTheme({ palette: { primary: {main: '#fefefe'} } })

function App() {
  return (
    // <ThemeProvider theme={theme}>
    <Layout>
      <Routes>
        <Route path="/" element={<Note />} />
        <Route path="/create" element={<Create />} />
      </Routes>
    </Layout>
  // </ThemeProvider>
  );
}

export default App;
