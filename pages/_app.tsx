import "../styles/globals.css";
import type { AppProps } from "next/app";
import { AppCacheProvider } from "@mui/material-nextjs/v16-pagesRouter";

import Layout from "../components/layout/layout";

// AppCacheProvider: один Emotion-кэш на сервере и в браузере — стили MUI
// отдаются в <head> при SSR, классы при гидратации совпадают (React #418).
function MyApp(props: AppProps) {
  const { Component, pageProps } = props;
  return (
    <AppCacheProvider {...props}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AppCacheProvider>
  );
}

export default MyApp;
