import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Footer from "components/Footer";

export default function Home() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Container
        maxWidth="lg"
        sx={{
          flex: 1,
          py: 4,
        }}
      >
        <Typography variant="h1" gutterBottom>
          Pangea
        </Typography>
        <Typography>Open source software</Typography>
      </Container>
      <Box sx={{ flex: 0 }}>
        <Footer />
      </Box>
    </Box>
  );
}
