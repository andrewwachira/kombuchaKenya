import Image from 'next/image'
import CarouselHomePage from "../components/CarouselHomePage.js";
import Link from "next/link";


export default function Home() {
  return (
    <>

   
               
     <CarouselHomePage/>
        <section className="jumbotron" >
            <div className="container">
               <div className="text"><h1>We specialize in two products</h1></div> 
                <div className="jumbo-images">
                    <div className="image-container">
                        <Link href="/products"><img src="./images/index/kombucha-bottle.jpg" alt="Kombucha bottle"/></Link>
                        <h3>Kombucha</h3>
                    </div>
                    <h4>&</h4>
                    <div className="image-container">
                       <Link href="/products"><img src="./images/index/kefir-bottle.jpg" alt="Kefir bottle"/></Link> 
                        <h3>Kefir</h3>
                    </div>
                    
                </div>
            </div>
        </section>

        <section className="tea" >
            <div className="text">
                <h2>Kombucha Kenya Products are <span>Proudly Kenyan!  </span><i className="em em-flag-ke" aria-role="presentation" aria-label="Kenya Flag"></i> </h2>
                <p>Kenya is home to the richest produce in the world. Kenya is the largest exporter of tea in Africa and 3rd in the world.
                   But Kenya does not  only shine her glory from just tea, but also coffee, fruits,vegetables,herbs, nuts, oils and any 
                   other gift mother nature gave our 47 valiant countries.
                   <br/>
                   <br/>
                   When you consume any of our products you are not only enriching your health, but you are 
                   supporting the small scale farmers in many parts of Kenya that work hard to produce the best produce,
                   that go into manufacturing our esteemed products. 
                </p>
            </div>
        </section>

        <section className="icons">
                <div className="container">
                    <div>
                        <img src="./images/assets/leaf.png" alt="nature icon"/>
                        <p>We are deeply connected to nature. For this reason, we use the best of
                            what nature can provide in our products.
                        </p>
                    </div>
                    <div>
                        <img src="./images/assets/recycle.png" alt="recycle icon"/>
                        <p>As environmentally conscious as we are,it is inherent of us to recycle our packaging 
                            products so that we can gradually win the fight of plastic and glass waste pollution.
                        </p>
                    </div>
                    <div>
                        <img src="./images/assets/shipment.png" alt=""/>
                        <p>We deliver your orders to you.We charge 200/= for delivery all across Nairobi County,
                            and for residents beyond Nairobi, we ship your orders through your preferred courier service.
                        </p>
                    </div>
                </div>
            </section>
           
            
     </>
  )
}


