import HeadTag from "../components/HeadTag.js";
import {useState} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faChevronDown} from "@fortawesome/free-solid-svg-icons";
import ProductsCarousel from "../components/ProductsCarousel.js";
import {server} from "../config/index";
import axios from 'axios';
import {parse as flattedParse} from "flatted";

export async function getServerSideProps(){
	const res = await fetch(`${server}/api/products`);
	
	return {
		props : {
				products : await res.json()
		}
	}
} 

export default function  Products({products}) {
		const allKombuchaVarieties = [...products[0],...products[3]];
		const herbalVarieties = products[0];
		const fruitVarieties = products[3];
		const allKefirVarieties = [ ...products[1],...products[2]];
		const dairyKefir = products[1];
		const nonDairyKefir = products[2];
		
		const [choiceKombucha, setChoiceKombucha] = useState("allKombuchaVarieties");
		const [choiceKefir,setChoiceKefir] = useState("allKefirVarieties");
		function displayKombuchaList(e){
			setChoiceKombucha(e.target.value);
		}
		function displayKefirList(e){
			setChoiceKefir(e.target.value)
		}
	return(
	<>
		<HeadTag/>
		<div className="showcase-container">
			<div className="selectWrap">
                <select name="flavors" onChange={(e)=>displayKombuchaList(e)} id="selectKombucha">
                	<option value="allKombuchaVarieties">All Kombucha Varieties</option>
                    <option value="herbalVarieties">Herbal Tea Kombucha</option>
                    <option value="fruitVarieties">Fruit based Kombucha</option>
                </select>
                <div className="selectBtn"> <FontAwesomeIcon style={{paddingLeft:"10px",paddingBottom:"5px"}} icon={faChevronDown} /> </div>
            </div>
			{
				choiceKombucha === "allKombuchaVarieties" ? 
					<ProductsCarousel productsArray={allKombuchaVarieties} />
				: choiceKombucha === "herbalVarieties" ?
				 	<ProductsCarousel productsArray={herbalVarieties} />
				: 	<ProductsCarousel productsArray={fruitVarieties} />
				
			}
			                    <h4 className="kombuchaInfo">Head over to blogs to read more about kombucha</h4>
			<div className="selectWrap">
                <select name="flavors" onChange={(e)=>displayKefirList(e)} id="selectKefir">
                	<option value="allKefirVarieties">All Kefir Varieties</option>
                    <option value="dairyKefir">Dairy Kefir</option>
                    <option value="nonDairyKefir">Non-Dairy Kefir</option>
                </select>
                <div className="selectBtn"> <FontAwesomeIcon style={{paddingLeft:"10px",paddingBottom:"5px"}} icon={faChevronDown} /> </div>
            </div>
		</div> 
			{
				choiceKefir === "allKefirVarieties" ? 
				<ProductsCarousel productsArray={allKefirVarieties} />	
				: choiceKefir === "dairyKefir" ?
				<ProductsCarousel productsArray={dairyKefir} />
				: <ProductsCarousel productsArray={nonDairyKefir} />
			}
			                    <h4 className="kefirInfo">Head over to blogs to read more about Kefir</h4>
			 <section className="sheet">
                <h2>Skim through this weeks availability sheet to see what is available</h2>
                <p>List one contains Kombucha while list two contains kefir and our ancillary products</p>
                <div className="iframe-container">
                    <iframe loading="lazy" src="https://docs.google.com/spreadsheets/d/11zkurbAZY0tIwQGymXqeNHWw6Uu9v6AlAFsBnfH6qIM/edit?fbclid=IwAR0_7AFSNLq-Jzrddkg63hI0w0yOC_Ks2uEXrZxB70kMJQIerxtE9miPFII#gid=7941459"></iframe>
                </div>
            </section>
	</>)
}