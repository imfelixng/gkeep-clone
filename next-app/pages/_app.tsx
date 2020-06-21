import { AppProps } from 'next/app'
import '../assets/style/index.scss'

function App({ Component, pageProps }: AppProps) {
    return <Component {...pageProps} />;
}
export default App;