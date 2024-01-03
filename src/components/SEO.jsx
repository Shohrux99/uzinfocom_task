import React from "react";
import Head from "next/head";

export default function SEO({ title }) {
  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1  maximum-scale=1, user-scalable=0" />
      <meta charSet="utf-8" />
      <title>{title}</title>
      <meta name="description" content="Next js" />
      <meta name="keywords" content="Cspace, coworking, co-working, center, tashkent" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title || "Next js template"} key="ogtitle" />
      <meta property="og:description" content="Next js" key="ogdesc" />
      <meta property="og:site_name" content={title || "Next js template"} key="ogsitename" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={title || "Next js template"} />
      <meta name="twitter:description" content="Next js" />
      <meta name="twitter:site" content={title || "Next js template"} />
    </Head>
  );
}
