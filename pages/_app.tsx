import '../styles/globals.scss';

function MyApp({ Component, pageProps }: any) {
  const getLayout = Component.getLayout || ((page: JSX.Element) => page);
  return (
    getLayout(
      <Component {...pageProps} />
    )
  );
}

export default MyApp;
