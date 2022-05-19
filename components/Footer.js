import react from "react";
import Link from "next/link";
import Image from "next/image";



export default function Footer(){
	return(
		<footer className="footer">
                <div className="contacts">
                    <h3>Contacts</h3>
                    <ul>
                        <li>Email: info@kombuchakenya.co.ke </li>
                        <li>Phone: +254729302487</li>
                        <li>Socials: 
                            <Link href="https://www.facebook.com/KombuchaKe" target="_blank" >
                                <div style={{padding: "0 11px",display:"inline"}}>
                                    <Image className="socials-icons" width={20} height={20} src={require("../public/images/assets/fb-white.svg")} alt="facebook logo"/>
                                </div>
                            </Link>

                            <Link href="https://www.instagram.com/kombucha_kenya/" target="_blank" >
                                <div style={{padding: "0 11px",display:"inline"}}>
                                    <Image className="socials-icons" width={20} height={20} src={require("../public/images/assets/insta-white.svg")} alt="instagram logo"/>
                                </div>
                            </Link>
                            <Link href="https://twitter.com/kombucha_kenya" target="_blank">
                                <div style={{padding: "0 11px",display:"inline"}}>
                                    <Image className="socials-icons" width={20} height={20} src={require("../public/images/assets/twitter-white.svg")} alt="twitter logo"/>
                                </div>
                            </Link>
                        </li>
                    </ul>
                </div>
               
                <div className="logo">
                    <Image src={require("../public/images/assets/logo-DarkBg.png")} width={150} height={150} alt="logo for dark background"/>
                    <p>&copy; Copyright 2021 </p>
                </div>
               
                <div className="links">
                    <h3>Quick Links</h3>
                    <ul>
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="/blog">Blog</Link></li>
                        <li><Link href="/products">Products</Link></li>
                        <li><Link href="/about">About us</Link></li>
                        <li><Link href="/contacts">Contact us</Link></li>
                    </ul>
                </div>

                <style jsx>{
                    `
                        .footer{
                        height: 250px;
                        display: flex;
                        justify-content: space-around;
                        align-items: center;
                        background:-moz-linear-gradient(left,#1f3e1f,#126a36,#1f3e1f);
                        background:-webkit-linear-gradient(left,#1f3e1f,#126a36,#1f3e1f);
                        background:-ms-linear-gradient(left,#1f3e1f,#126a36,#1f3e1f);
                        
                        }

                        @media screen and (max-width: 425px){

                            .footer{
                                flex-direction: column;
                                height: fit-content;
                                align-items: center;
                                padding: 20px;
                            }
                        }
                    `
                }</style>
            </footer>
		)
}