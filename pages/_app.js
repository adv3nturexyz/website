import Head from 'next/head';
import Script from 'next/script';

import '../styles/globals.css';

const MyApp = ({ Component, pageProps }) => (
  <>
    <Head>
      <title>Omniv3rse | Web3 Gaming</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
      <link rel="preconnect" href="https://stijndv.com" />
      <link rel="stylesheet" href="https://stijndv.com/fonts/Eudoxus-Sans.css" />
      {/* <!-- Google tag (gtag.js) --> */}
      <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=G-K4TVEB7SLK"
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-K4TVEB7SLK', {
            page_path: window.location.pathname,
          });
          `,
        }}
      />
      {/* <!-- Mailchimp code snippet --> */}
      <Script
        id="mcjs"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
          !function(c,h,i,m,p){m=c.createElement(h),p=c.getElementsByTagName(h)[0],m.async=1,m.src=i,p.parentNode.insertBefore(m,p)}(document,"script","https://chimpstatic.com/mcjs-connected/js/users/5f31e382e95fa2e353915e688/31b74d347e4e4c5fa70983123.js");
          `,
        }}
      />
    </Head>
    <Component {...pageProps} />
  </>
);

export default MyApp;
