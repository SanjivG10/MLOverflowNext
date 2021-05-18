import React from "react";
import Head from "next/head";
import { SLOGAN } from "./../constants";

interface IProps {
  title: string;
}

export default function Header(props: IProps) {
  const { title } = props;
  return (
    <>
      <Head>
        <title>{title || SLOGAN}</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
    </>
  );
}
