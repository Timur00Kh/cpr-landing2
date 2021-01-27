// https://nextjs.org/docs/advanced-features/custom-document
// https://nextjs.org/docs/advanced-features/custom-document#typescript

import React from 'react';
import DocumentNext, { Html, Head, Main, NextScript } from 'next/document';

class Document extends DocumentNext {
  render(): JSX.Element {
    return (
      <Html lang="ru">
        <Head>
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <script
            type="text/javascript"
            dangerouslySetInnerHTML={{
              __html: `
                  (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
                    m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
                    (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
        
                    ym(71549047, "init", {
                    clickmap:true,
                    trackLinks:true,
                    accurateTrackBounce:true,
                    webvisor:true
                  });
          `
            }}
          />
          <noscript>
            <div>
              <img
                src="https://mc.yandex.ru/watch/71549047"
                style={{ position: 'absolute', left: '-9999px' }}
                alt=""
              />
            </div>
          </noscript>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default Document;
