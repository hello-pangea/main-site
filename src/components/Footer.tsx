import { Box, Link, Typography } from "@mui/material";

export default function Footer() {
  return (
    <Box
      component={"footer"}
      sx={{
        py: 2,
        backgroundColor: (theme) => theme.palette.backgroundSecondary.main,
      }}
    >
      <Typography
        variant="body2"
        color="text.secondary"
        align="center"
        gutterBottom
      >
        {"Copyright © "}
        <Link color="inherit" href="https://reececarolan.com/">
          Reece Carolan
        </Link>{" "}
        {new Date().getFullYear()}
      </Typography>
      <Typography variant="body2" color="text.secondary" align="center">
        Made with ❤️ on{" "}
        <Link color="inherit" href="https://github.com/hello-pangea/">
          GitHub
        </Link>
      </Typography>
    </Box>
  );
}
