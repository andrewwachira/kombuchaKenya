import '../styles/globals.css';
import Head from "next/head";
import Script from 'next/script';
import Navbar from "../components/Navbar.js";
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
            <Head>
              
                <title>Kombucha Kenya</title>
                <link rel="shortcut icon" href="/tab-icon.png" />
                <meta charSet="utf-8"/>
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
                <link rel="icon" href="images/assets/tab-icon.png" type="image/gif" sizes="100x100"/>
                <link rel="preconnect" href="https://fonts.gstatic.com"/>
                <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@100&display=swap" rel="stylesheet"/>
                <link href="https://fonts.googleapis.com/css2?family=Maven+Pro:wght@400;700&display=swap" rel="stylesheet"/>
                <link href="https://fonts.googleapis.com/css2?family=Kaushan+Script&display=swap" rel="stylesheet"/>
                <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css"/>
                <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick-theme.css"/>
                <link href="https://emoji-css.afeld.me/emoji.css" rel="stylesheet"/>
            </Head> 
            
            <Navbar/> 
            <Component {...pageProps} />
            <Footer/>
            <Script src="https://v2.txt.me/livechat/js/wrapper/d99cf5f3c4a642deb94ec9ddc3d6e990" async></Script>
              
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
