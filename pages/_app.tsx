import { CacheProvider, EmotionCache } from "@emotion/react";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import createEmotionCache from "lib/createEmotionCache";
import { AppProps } from "next/app";
import Head from "next/head";
import theme from "theme/theme";

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

export default function App(props: MyAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <title>Pangea</title>
        <meta name="description" content="Open source software." />
        <meta property="og:title" content="Pangea" />
        <meta property="og:description" content="Open source software." />
        <meta property="og:image" content="https://hellopangea.com/ogimg.png" />
        <meta property="og:url" content="https://hellopangea.com/" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg"></link>
        <link rel="alternate icon" href="/favicon.png"></link>
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </CacheProvider>
  );
}
