import Link from "next/link";
import {useState} from "react";
import Image from 'next/image';

export default function Navbar(){
    const[toggle,setToggle] = useState(true);

    function toggleFunc(){
        setToggle(!toggle);
    }

	return (

		<nav >
                    <div className="container">
                        
                        <div className="navLg" style={{height:"143px"}}>
                            <ul>
                                <li><Link href="/blog">Blog</Link></li>
                                <li><Link href="/about">About us</Link></li>
                            </ul>

                            <Link href="/"><Image src={require("../public/images/assets/front-logo.svg")} width={120} height={120}alt="Logo Image"/></Link>

                            <ul>
                                <li><Link href="/products">Products</Link></li>
                                <li><Link href="/contacts">Contact us</Link></li>
                            </ul>
                        </div>
                        
                        <img src="./images/assets/front-logo.svg" alt="Logo Image"/>

                        <div className="theSpan" onClick={ ()=>toggleFunc()}>
                            <span className="ham" id="ham1"
                                style={!toggle ? {transform : "translate(-2px,4px) rotate(-45deg) "} : {transform : "translate(0px,0px) rotate(0deg) " }} 
                            ></span>
                            <span className="ham" id="ham2"
                                style={!toggle ? {display:"none"} : {display:"block"}}
                            ></span>
                            <span className="ham" id="ham3"
                                style={!toggle ? {transform : "translate(-2px,-4px) rotate(45deg)"} : {transform : "translate(0px,0px) rotate(0deg)" }}
                            ></span>
                        </div>

                        <div className="navSm" style={!toggle ? {transform:"translateX(0vw)"} : {transform:"translateX(-50vw)"}}>                       
                            <ul>
                                <li><Link href="/">Home</Link></li>
                                <li><Link href="/blog">Blog</Link></li>
                                <li><Link href="/about">About us</Link></li>
                                <li><Link href="/products">Products</Link></li>
                                <li><Link href="/contacts">Contact us</Link></li>
                            </ul>
                        </div>
                    
                    </div>
            </nav> 
		)
}