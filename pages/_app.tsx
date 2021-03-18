import { GeistProvider, CssBaseline } from "@geist-ui/react";
import "../styles/globals.sass";

export default function MyApp({ Component, pageProps }) {
  return (
    <GeistProvider>
      <CssBaseline />
      <Component {...pageProps} />
    </GeistProvider>
  );
}
