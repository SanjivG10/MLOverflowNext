import React from "react";
import Head from "next/head";

export default function OpenGraphTags({
  title,
  description,
  ogTitle,
  image,
  url,
}: {
  title: string;
  description: string;
  ogTitle: string;
  image: string;
  url: string;
}) {
  return (
    <Head>
      <title>{title}</title>
      <meta property="og:url" content={url} />
      <meta property="og:type" content="article" />
      <meta property="og:title" content={ogTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
    </Head>
  );
}
