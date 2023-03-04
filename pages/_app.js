import '../styles/globals.css'
import { Inter } from '@next/font/google'
const inter = Inter({ subsets: ['latin'] })
import Head from 'next/head'
import { NextSeo } from 'next-seo';
import { Navbar, Footer, Learn, Contact } from '../components'
import Test from '../components/Test'
export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>BcaStudy</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width" />
        
  <link rel="icon" type="image/x-icon" href="/favicon.ico"></link>
      </Head>

      <NextSeo
        title="BcaStudy ccsu bca notes and question papers"
        titleTemplate="BcaStudy ccsu bca notes and question papers"
        defaultTitle="BcaStudy ccsu bca notes and question papers"
        description=" (Chaudhary Charan Singh University Meerut). 
        This website try to provide all the old question papers and Notes of B.C.A course of CCSU University."
        canonical="https://BcaStudy.vercel.app"
        openGraph={{
          url: "https://BcaStudy.vercel.app",
          title: "BcaStudy ccsu bca notes and question papers",
          description: `(Chaudhary Charan Singh University Meerut)
          This website try to provide all the old question papers and Notes of B.C.A courses of CCSU University`,
          images: [
            {
              url: "/icon-512.png",
              width: 800,
              height: 420,
              alt: "BcaStudy",
            },
          ],
        }}
        twitter={{
          cardType: "summary_large_image",
        }}
      />




      <div className={inter.className}>
        <Navbar />
        <Component {...pageProps} />
        <Learn />
        <Contact />
        <Footer />
        <Test/>
      </div>

    </>

  )
}