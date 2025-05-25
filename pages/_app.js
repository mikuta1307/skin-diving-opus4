import '../public/styles/global.css';
import '../public/styles/header.css';
import '../public/styles/hero.css';
import '../public/styles/content.css';
import '../public/styles/products.css';
import '../public/styles/modal.css';
import { TargetProvider } from '../lib/context/TargetContext';

function MyApp({ Component, pageProps }) {
  return (
    <TargetProvider>
      <Component {...pageProps} />
    </TargetProvider>
  );
}

export default MyApp;