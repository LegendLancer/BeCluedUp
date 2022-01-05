import React from 'react';
import Head from 'next/head';

const Layout = (props) => {
  return (
    <div>
      <Head>
        <title>{props.pageTitle}</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <link rel="icon" href="/images/favicon.png" />
        <link rel="stylesheet" href="/plugins/bootstrap/bootstrap.min.css" />
        <link rel="stylesheet" href="/css/font-awesome.css" />
        <link rel="stylesheet" href="/css/animate.min.css" />
        <link rel="stylesheet" href="/css/fontello.css" />
        <link rel="stylesheet" href="/plugins/accordion.css" />
        <link rel="stylesheet" href="/plugins/glightbox.min.css" />
        <link rel="stylesheet" href="/css/style.css" />
        <link rel="stylesheet" href="/css/responsive.css" />
      </Head>

      {props.children}

      <script src="/plugins/accordion.min.js"></script>
      <script src="/plugins/glightbox.min.js"></script>
    </div>
  );
};
export default Layout;
