import Layout from '../components/layout'
import '../styles/globals.css';
import { Montserrat } from 'next/font/google'

const montserrat = Montserrat({
  weight: ['200','300','400','700'],
  subsets: ['latin'],
})

const App = ({ Component, pageProps }) => {
  return (
    <>
      <style jsx global>{`
        html, body {
          font-family: ${montserrat.style.fontFamily};
        }
      `}</style>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default App;