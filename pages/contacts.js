import Script from 'next/script';
import { useEffect,useState } from "react";
import { ElfsightWidget } from 'react-elfsight-widget';

export default function Contacts(){

	const [elfLinkfb,setElfLinkfb] = useState("");
	const [elfLinktw,setElfLinktw] =useState("")
	const screenWidth = window.innerWidth;
	const whatsappWidthValue = screenWidth > 500 ? 600 : 250

	console.log(whatsappWidthValue)


	return(
		<>
			<section className="contact-us" >
	           <div className="facebook">
	                <h1>Like our page on facebook</h1>
					<ElfsightWidget widgetID="0b3330fc-2938-4d6d-a6bb-10b198a6ea7b"></ElfsightWidget>
	           </div>

				<div className="instagram">
					<h1>Follow us on instagram</h1>
					<ElfsightWidget widgetID='2d339f03-8644-4a10-b06c-b55633bd309d'></ElfsightWidget>
					<style jsx >
						{
							`.instagram {
								display: flex;
								flex-direction: column;
								align-items: center;
								color: white;
								padding: 20px;
								background:-moz-linear-gradient(left,#405DE6,#5851D8,#833AB4,#C13584,#E1306C, #FD1D1D,#F56040,#F77737,#FCAF45,#FFDC80);
								background:-webkit-linear-gradient(left,#405DE6,#5851D8,#833AB4,#C13584,#E1306C, #FD1D1D,#F56040,#F77737,#FCAF45,#FFDC80);
								background:-ms-linear-gradient(left,#405DE6,#5851D8,#833AB4,#C13584,#E1306C, #FD1D1D,#F56040,#F77737,#FCAF45,#FFDC80);
							}
							.instagram h1{
								font-weight: 100;
								padding: 15px 0;
							}`
						}
					</style>

				</div>

	           	<div className="twitter">
	                <h1>Follow us on twitter</h1>
					<ElfsightWidget widgetID="eff4d3b2-97a6-43a1-bf5e-a8c12cefdded"/>
	           </div>
			   <div className='whatsapp' style={{height:"fit-content"}}>
				   <h1>Chat with us on whatsapp</h1>
					<div className="whatsappchat-settings-component" id="whatsappChatWidgetPreview" style={{justifyContent: "center"}}>
						<div id="widgetwidth" style={{display: "block", backgroundColor: "white", width: `${whatsappWidthValue}px`, height:"inherit", borderRadius: "10px", boxShadow: "rgba(0, 0, 0, 0.4) 2px 2px 6px", font: "400 15px / 1.3 -apple-system, BlinkMacSystemFont, Roboto, Open Sans,Helvetica Neue, sans-serif", marginBottom:"25px"}}>
							<div id="whatsappChatWidgetHeaderPreview" style={{height: "100px", maxHeight: "100px", minHeight: "100px", backgroundColor: "rgb(10, 95, 84)", color: "white", borderRadius: "10px 10px 0px 0px", display: "flex", alignItems: "center"}}>
								<div style={{marginLeft: "20px"}}>
									<div style={{display: "flex", alignItems:"center"}}>
										<div id="whatsappPP" >
											<style jsx>
												{
													`
														#whatsappPP{
															border: 0px solid ;
															border-radius:50%;
															margin-right:10px; 
															width: 50px;
															height: 50px;
															background-image: url("./images/assets/logo-DarkBg.png");
															background-size: cover; 
														}
													`	
												}
											</style>
										</div>
										<div id="whatsappChatWidgetBrandPreview" style={{fontSize: "16px", fontWeight: "700"}}>Kombucha Kenya</div>
									</div>
									
									<div id="whatsappChatWidgetBrandSubTitlePreview" style={{fontSize: "13px", lineHeight: "18px", marginTop: "4px"}}>Replies within 1 day</div>
								</div>
							
							</div>
							<div style={{background: "url(https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png)"}}>
								<div  style={{backgroundColor: "white", display: "inline-block", margin: "20px", padding: "10px" , borderRadius: "10px"}}>
									<div id="whatsappChatWidgetBrandPreview2" style={{fontSize: "13px", fontWeight: "700", lineHeight: "18px", color: "rgba(0, 0, 0, 0.4)"}}>Kombucha Kenya</div>
									<div id="whatsappChatWidgetWelcomeTextPreview" style={{ whiteSpace: "pre-wrap" , fontSize: "14px", lineHeight: "19px", marginTop: "4px", color: "rgb(17, 17, 17)"}}>Hi there! <br/>How can I help you?</div>
								</div>
							</div>
							<div id="whatsappChatWidgetButtonPreview" style={{backgroundColor: "white", paddingBottom: "2px", borderRadius:"10px"}}>
								<a id="whatsappChatWidgetStartChat" role="button" href="https://api.whatsapp.com/send/?phone=254729302487" title="WhatsApp" style={{textDecoration: "none", color: "rgb(255, 255, 255)", fontSize: "15px", fontWeight: "700", lineHeight: "20px", cursor: "pointer", position: "relative", display: "flex", justifyContent: "center", alignItems: "center", padding: "8px 12px", borderRadius: "25px" , border: "none", backgroundColor: "rgb(77, 194, 71)", margin: "20px", overflow: "hidden"}} rel="noreferrer noopener">
									<svg width="20" height="20" viewBox="0 0 90 90" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd" style={{ width: "16px" , height: "16px", fill: "rgb(255, 255, 255)", zIndex: "1", flex: "0 0 16px"}}> 
										<path d="M90,43.841c0,24.213-19.779,43.841-44.182,43.841c-7.747,0-15.025-1.98-21.357-5.455L0,90l7.975-23.522   c-4.023-6.606-6.34-14.354-6.34-22.637C1.635,19.628,21.416,0,45.818,0C70.223,0,90,19.628,90,43.841z M45.818,6.982   c-20.484,0-37.146,16.535-37.146,36.859c0,8.065,2.629,15.534,7.076,21.61L11.107,79.14l14.275-4.537   c5.865,3.851,12.891,6.097,20.437,6.097c20.481,0,37.146-16.533,37.146-36.857S66.301,6.982,45.818,6.982z M68.129,53.938   c-0.273-0.447-0.994-0.717-2.076-1.254c-1.084-0.537-6.41-3.138-7.4-3.495c-0.993-0.358-1.717-0.538-2.438,0.537   c-0.721,1.076-2.797,3.495-3.43,4.212c-0.632,0.719-1.263,0.809-2.347,0.271c-1.082-0.537-4.571-1.673-8.708-5.333   c-3.219-2.848-5.393-6.364-6.025-7.441c-0.631-1.075-0.066-1.656,0.475-2.191c0.488-0.482,1.084-1.255,1.625-1.882   c0.543-0.628,0.723-1.075,1.082-1.793c0.363-0.717,0.182-1.344-0.09-1.883c-0.27-0.537-2.438-5.825-3.34-7.977   c-0.902-2.15-1.803-1.792-2.436-1.792c-0.631,0-1.354-0.09-2.076-0.09c-0.722,0-1.896,0.269-2.889,1.344   c-0.992,1.076-3.789,3.676-3.789,8.963c0,5.288,3.879,10.397,4.422,11.113c0.541,0.716,7.49,11.92,18.5,16.223   C58.2,65.771,58.2,64.336,60.186,64.156c1.984-0.179,6.406-2.599,7.312-5.107C68.398,56.537,68.398,54.386,68.129,53.938z"></path> 
									</svg>
									<span id="whatsappChatWidgetButtonTextPreview" style={{marginLeft: "8px", marginRight: "8px", zIndex: "1", color: "rgb(255, 255, 255)", fontWeight:"500"}}>Start Chat</span>
								</a>
							</div>
						</div> 
					</div>
			   	</div>
			   <Script id='waterMarkScript' strategy="afterInteractive">
 					 { 
					 useEffect(()=>{
						if(document.readyState =="complete") {
							 setElfLinkfb( document.getElementsByClassName("eapps-link")[0]);
							 setElfLinktw(document.getElementsByClassName("eapps-link")[1]);
						 }		
						if(elfLinktw && elfLinkfb){
							elfLinkfb.style.display="none"
							elfLinktw.style.display="none"
						}
						console.log(document.readyState)
					 },[document,elfLinkfb,elfLinktw,screenWidth])
					 }
					
				</Script>
				

        </section>
		</>
		)
}