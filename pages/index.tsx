import CodeRoundedIcon from "@mui/icons-material/CodeRounded";
import DnsRoundedIcon from "@mui/icons-material/DnsRounded";
import LockRoundedIcon from "@mui/icons-material/LockRounded";
import { Box, Card, Container, Grid, Typography } from "@mui/material";
import Footer from "components/Footer";
import Image from "next/image";

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
        <Grid container spacing={2} sx={{ my: 4 }} alignItems="center">
          <Grid item>
            <Typography variant="h1" gutterBottom>
              Pangea
            </Typography>
            <Typography>Open source software</Typography>
          </Grid>
          <Grid item xs justifyContent="center" display="flex">
            <Image
              src="/nature.svg"
              alt="Pangea nature"
              width={300}
              height={300}
            />
          </Grid>
        </Grid>
        <Grid container spacing={2} sx={{ my: 4 }}>
          <Grid item xs={12} sm={4}>
            <Card variant="outlined" sx={{ p: 2 }}>
              <Box sx={{ display: "flex", alignItems: "center", pb: 2 }}>
                <CodeRoundedIcon
                  sx={{ mr: 2, color: (theme) => theme.palette.primary.main }}
                />
                <Typography variant="h3">Open source</Typography>
              </Box>
              <Typography>Our software is free and open source.</Typography>
            </Card>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Card variant="outlined" sx={{ p: 2 }}>
              <Box sx={{ display: "flex", alignItems: "center", pb: 2 }}>
                <DnsRoundedIcon
                  sx={{ mr: 2, color: (theme) => theme.palette.primary.main }}
                />
                <Typography variant="h3">Modern</Typography>
              </Box>
              <Typography>We aim to use modern technology.</Typography>
            </Card>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Card variant="outlined" sx={{ p: 2 }}>
              <Box sx={{ display: "flex", alignItems: "center", pb: 2 }}>
                <LockRoundedIcon
                  sx={{ mr: 2, color: (theme) => theme.palette.primary.main }}
                />
                <Typography variant="h3">Privacy</Typography>
              </Box>
              <Typography>Your data belongs to you.</Typography>
            </Card>
          </Grid>
        </Grid>
      </Container>
      <Box sx={{ flex: 0 }}>
        <Footer />
      </Box>
    </Box>
  );
}
