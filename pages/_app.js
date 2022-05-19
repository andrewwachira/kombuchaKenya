import '../styles/globals.css';
import Head from "next/head";
import Script from 'next/script';
import Navbar from "../components/Navbar.js";
import HeadTag from "../components/HeadTag.js";
import Footer from "../components/Footer.js";
import {useState,useEffect} from 'react';
import "@fortawesome/fontawesome-svg-core/styles.css"; // import Font Awesome CSS
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

function MyApp({ Component, pageProps }) {
  const[loading,setLoading] = useState(false);
  
  useEffect(()=>{
    setLoading(true);
  },[])

  return(
  <>
    { loading ? 
        (
         <>
            <html>
                <HeadTag/>
              <body>
                  <Navbar/>
                <Head>
                  <title>Kombucha Kenya</title>
                  <link rel="shortcut icon" href="/tab-icon.png" />
                </Head>  
                <Component {...pageProps} />
                <Footer/>
                <Script src="https://v2.txt.me/livechat/js/wrapper/d99cf5f3c4a642deb94ec9ddc3d6e990" async></Script>
              </body>
            </html>
        </>
        )
        
        :

        (
          <div className="loader">
              <div className="lds-circle">
                  <div>
                      <img src="./images/assets/logo-DarkBg.png"/>
                  </div>
              </div>
              <p>Loading...</p>
          </div>
        )
      
    }
  </>
   
    )

}

export default MyApp
