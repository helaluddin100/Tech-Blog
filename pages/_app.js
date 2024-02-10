import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import "../styles/css/style.css";
import "../styles/css/custom.css";

import { Fragment, useEffect } from "react";

function MyApp({ Component, pageProps }) {
  const Layout = Component.layout || Fragment;

  return (
    <>
   

          <Layout>
            <Component {...pageProps} />
          </Layout>
    
          <script
           strategy="lazyOnload"
            async
            src="https://www.googletagmanager.com/gtag/js?id=G-SF8D61T2PB"
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-SF8D61T2PB');
            `,
            }}
          />
     

    </>
  );
}

export default MyApp;
