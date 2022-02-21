import { Box, Link, Typography } from "@mui/material";

export default function Footer() {
  return (
    <Box
      sx={{
        py: 2,
        backgroundColor: (theme) => theme.palette.backgroundSecondary.main,
      }}
    >
      <Typography variant="body2" color="text.secondary" align="center">
        {"Copyright © "}
        <Link color="inherit" href="https://reececarolan.com/">
          Reece Carolan
        </Link>{" "}
        {new Date().getFullYear()}.
      </Typography>
    </Box>
  );
}
