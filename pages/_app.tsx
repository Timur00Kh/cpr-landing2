import React from 'react';
import { AppProps } from 'next/app';
// import { Provider } from 'react-redux';
// import { LayoutTree } from '@moxy/next-layout';

import { PrimaryLayout } from '@/layouts/PrimaryLayout';
import { useStore } from '@/store/store';
import '@/styles/index.scss';
import Head from 'next/head';

function App({ Component, pageProps }: AppProps): JSX.Element {
  // const store = useStore(pageProps.initialReduxState);

  return (
    <PrimaryLayout>
      <>
        <Head>
          <title>CPR Landing2</title>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"
          />
        </Head>
        <Component {...pageProps} />
      </>
    </PrimaryLayout>
  );

  // return (
  //   <Provider store={store}>
  //     <LayoutTree
  //       // @ts-ignore
  //       defaultLayout={<PrimaryLayout />}
  //       Component={Component}
  //       pageProps={pageProps}
  //     />
  //   </Provider>
  // );
}

export default App;
