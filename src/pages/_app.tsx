import type { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";
import { AnimatePresence } from "framer-motion";
import "../styles/global.css";
import "../styles/reset.css";
import Head from "next/head";
import { DefaultLayout, ProtectedLayout } from "@/components/layout";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient({
  defaultOptions: {},
});

type AppPropsWithSession = AppProps & {
  Component: {
    requireAuth: boolean;
  };
  pageProps: {
    session: any;
  };
};

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppPropsWithSession) {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1.0, minimum-scale=1, user-scalable=0"
        />
      </Head>
      <SessionProvider session={session}>
        <QueryClientProvider client={queryClient}>
          <AnimatePresence>
            <DefaultLayout>
              {Component.requireAuth && !session ? (
                <ProtectedLayout>
                  <Component {...pageProps} />
                </ProtectedLayout>
              ) : (
                <DefaultLayout>
                  <Component {...pageProps} />
                </DefaultLayout>
              )}
            </DefaultLayout>
          </AnimatePresence>
        </QueryClientProvider>
      </SessionProvider>
    </>
  );
}
