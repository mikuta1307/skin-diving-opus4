import '../styles/global.css';
import '../styles/header.css';
import '../styles/hero.css';
import '../styles/content.css';
import '../styles/products.css';
import '../styles/modal.css';
import { TargetProvider } from '../lib/context/TargetContext';

function MyApp({ Component, pageProps }) {
  return (
    <TargetProvider>
      <Component {...pageProps} />
    </TargetProvider>
  );
}

export default MyApp;