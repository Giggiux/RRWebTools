// page/_app.js
import { GlobalStyles } from 'twin.macro';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export default function MyApp({ Component, pageProps }) {
  return (
    <div>
      <GlobalStyles />
      <Component {...pageProps} />
    </div>
  );
}
