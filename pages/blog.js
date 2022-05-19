import Link from "next/link"

// export async function getStaticProps(){
//     const res = await fetch("http://localhost:5000/")
// }
export default function Blog() {
    

	return(

		<>
			<div className="hero">
                <div className="center-images-lg">
                	<div className="images">
                    	<img src="./images/blogs/hero/hero1.jpg"/>
    	                <img src="./images/blogs/hero/hero2.jpg"/>
    	                <img src="./images/blogs/hero/hero3.jpg"/>
    	                <img src="./images/blogs/hero/hero4.jpg"/>
    	                <img src="./images/blogs/hero/hero5.jpg"/>
                	</div>

                    <style jsx>{
                        `
                        .center-images-lg{
                            display:flex;
                            justify-content: center;
                        }
                        `}
                    </style>
                </div>
	            <div className="hero-text">
	                <h3>Welcome to <span>YOUR</span> den of knowledge.</h3>
	                 <h4>Read about interesting kombucha and Kefir articles here. We have jotted these down just for you!</h4>
	            </div>
        	</div>

        	<div className="blogs">
            	<div className="container">
            		<div className="wrap-1">
                    
                    	<h3 id="reads-title">Beginner Reads</h3>

                    	<div className="grid-1">
                        
		                    <div className="read-1" >
	                            <div className=" flipcard-inner flip-1" >
                                    
	                                <div className="flip-front">
	                                    <img src="./images/blogs/1.jpg" alt=""/> 
	                                </div>
		                               
                                    <div className="text flip-back flip-back-1">
                                        <Link href="/blogs/1">
                                            <a>
                                            <h4>What is Kombucha?</h4>
                                            <p>click to read</p>
                                            </a>
                                        </Link>
                                            
                                    </div>
                        	    </div>
                            
                        </div>

                        <div className="read-2 flipcard">
                            <div className="flipcard-inner flip-2">
                                <div className="flip-front">
                                    <img src="./images/blogs/whydrinkkombucha.jpg" alt=""/> 
                                </div>
                                <div className="text flip-back">
                                    <Link href="/blogs/2">
                                        <a>
                                        <h4>Why should you drink Kombucha or Kefir?</h4>
                                        <p>Click to read</p>
                                        </a>
                                    </Link>
                                    
                                </div>
                            </div>                      
                        </div>

                        <div className="read-3 flipcard">
                            <div className="flipcard-inner flip-3">
                                <div className="flip-front">
                                    <img src="./images/blogs/whatiskefir.jpg" alt=""/>
                                </div>
                            
                                <div className="text flip-back flip-back-3">
                                    <Link href="/blogs/3">
                                        <a>
                                        <h4>What is Kefir? </h4>
                                        <p>Click to read</p>
                                        </a>
                                    </Link>
                                    
                                </div>  
                            </div>                       
                        </div>
                        
                    </div>
                
                   
                	</div>

                	<div className="wrap-2"> 

                    <h3 id="reads-title">Some More Deeper Reads</h3> 

                    <div className="grid-2">
                        
                        <div className="read-4 ">
                            <div className="flipcard-inner flip-4">
                                <div className="flip-front">
                                    <img src="./images/blogs/history-journal.jpg" alt=""/>
                                </div>
                            
                                <div className="text flip-back flip-back-4 ">
                                    <Link href="/blogs/4">
                                        <a>
                                        <h4>Learn about the beautiful history of Kombucha and that of Kefir </h4>
                                        <p>Click to discover their history tales</p>
                                        </a>
                                    </Link>
                                    
                                </div>  
                            </div>                       
                        </div>

                        <div className="read-5 ">
                            <div className="flipcard-inner flip-5">
                                <div className="flip-front">
                                    <img src="./images/blogs/flavors.jpg" alt=""/>
                                </div>
                            
                                <div className="text flip-back flip-back-5">
                                    <Link href="/blogs/5">
                                        <a>
                                        <h4>We have a bunch of flavors/varieties both in Kombucha and Kefir </h4>
                                        <p>Click to read about them</p>
                                        </a>
                                    </Link>
                                    
                                </div>  
                            </div>                       
                        </div>

                        <div className="read-6 ">
                            <div className="flipcard-inner flip-6">
                                <div className="flip-front">
                                    <img src="./images/blogs/kefirgrains.jpg" alt=""/>
                                </div>
                            
                                <div className="text flip-back flip-back-6">
                                    <Link href="/blogs/6">
                                        <a>
                                        <h4>How does Kefir stand out from Yogurt or Mala? What is the difference? </h4>
                                        <p>Click to discover</p>
                                        </a>
                                    </Link>                                       
                                </div>  
                            </div>                       
                        </div>

                        <div className="read-7 ">
                            <div className="flipcard-inner flip-7">
                                <div className="flip-front">
                                    <img src="./images/blogs/kombucha-mannerisms.jpg" alt=""/>
                                </div>

                                <div className="text flip-back flip-back-7">
                                    <Link href="/blogs/7">
                                        <a>
                                        <h4>Kombucha has a lot of quircks and it is important you know about them </h4>
                                        <p>Read about Kombucha mannerisms here</p>
                                        </a>
                                    </Link>
                                    
                                </div>  
                            </div>                       
                        </div>

                        <div className="read-8 ">
                            <div className="flipcard-inner flip-8">
                                <div className="flip-front">
                                    <img src="./images/blogs/homebrew.jpg" alt=""/>
                                </div>
                            
                                <div className="text flip-back flip-back-8">
                                    <Link href="/blogs/8">
                                        <a>
                                        <h4>How does home-brewed kombucha/kefir differ from commercial ones? </h4>
                                        <p>Click for enlightenment</p>
                                        </a>
                                    </Link>
                                    
                                </div>  
                            </div>                       
                        </div>


                    </div>
                </div>
            	</div>
            </div>
		</>
		)
}