import { useState } from "react";
import { Container, Grid, Box } from "@mui/material";
import Header from "./components/Header";
import Footer from "./components/Footer";
import InputBox from "./components/InputBox";
import OutputBox from "./components/OutputBox";

const App = () => {
  const [result, setResult] = useState("");

  return (
    <Box>
      <Header />
      <Container sx={{ mt: 4, mb: 4, maxWidth: "100vw" }}>
        <Grid container spacing={3} sx={{ height: "65vh" }}>
          <Grid item xs={12} md={6} sx={{ display: "flex" }}>
            <InputBox setResult={setResult} />
          </Grid>
          <Grid item xs={12} md={6} sx={{ display: "flex" }}>
            <OutputBox result={result} />
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </Box>
  );
};

export default App;
