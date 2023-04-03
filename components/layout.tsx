import Head from "next/head";
import Header from "./header";
import Footer from "./footer";
import CookieBanner from "./cookieBanner";
import React, { useEffect } from "react";
import posthog from "posthog-js";
export default function Layout({
  children,
  title,
  description,
}: React.PropsWithChildren<{ title?: string; description?: string }>) {
  useEffect(() => {
    posthog.init("phc_AwMx2i6HK2EXHYERJOPh94xJQnG6CSA3ClelH6lOC5M", {
      api_host: "https://app.posthog.com",
    });
  }, []);
  return (
    <>
      <Head>
        <title>{`AInsideHub - ${title}`}</title>
        <meta name="description" content={description}></meta>
      </Head>
      <Header />
      {children}
      {posthog.has_opted_in_capturing() ||
      posthog.has_opted_out_capturing() ? null : (
        <CookieBanner />
      )}
      <Footer />
    </>
  );
}
