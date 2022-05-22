import HeadTag from "../components/HeadTag.js";
import {useState} from "react";
import Slider from "react-slick";
import Link from "next/link"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown
} from "@fortawesome/free-solid-svg-icons";
import { server } from "../config/index.js";


export async function getStaticProps(){
	const res = await fetch(`${server}/api/products`);
	const products = await res.json();
	
	return {
		props : {
			products
		}
	}
}

export default function  Products({products}) {
	console.log(products)
		const allKombuchaVarieties = [...products[0],...products[3]];
		const herbalVarieties = products[0];
		const fruitVarieties = products[3];
		const allKefirVarieties = [ ...products[1],...products[2]];
		const dairyKefir = products[1];
		const nonDairyKefir = products[2];
		const settings = {
			dots: false,
	        infinite: true,
	        autoplay: true,
	        autoSpeed: 3500,
	        slidesToShow: 3,
	        slidesToScroll: 3,
	        arrows:false,
			adaptiveHeight: true,
	        responsive : [
          {
            breakpoint: 1025,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              autoplay: true,
              autoplaySpeed: 2000,
              centerMode:true
            }
          },
          {
            breakpoint: 769,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              autoplay: true,
              autoplaySpeed: 2000,
              centerMode:true
            }
          },
          {
            breakpoint: 426,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              autoplay: true,
              autoplaySpeed: 2000,
              
            }
          }
        ]
		};
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
					<Slider {...settings} className="card-deck">
						{
							allKombuchaVarieties.map(p=> 
							<div className="cardWrap" key={p.productid}>
                            <div className="card">
                                <img src={p.product_image}alt=""/>
                                <h3>{p.flavor_name}</h3>
                                <div className="buttons">
                                    <Link href={`${p.product_read}`} target="_blank"  rel="noreferrer">Read</Link>
                                    <Link target="_blank"  rel="noreferrer" href="https://docs.google.com/forms/d/1kENyWO7qJE--R5wUtMq_b82U2fFiVs_gxR50k5XPC8w/edit">Buy</Link>
                                </div>
                            </div> 
                        </div>
							)
						}
					</Slider>
				 : choiceKombucha === "herbalVarieties" ?
					<Slider {...settings} className="card-deck">
						{
							herbalVarieties.map(p=> 
							<div className="cardWrap" key={p.productid}>
                            <div className="card">
                                <img src={p.product_image}alt=""/>
                                <h3>{p.flavor_name}</h3>
                                <div className="buttons">
                                    <Link href="#" target="_blank"  rel="noreferrer">Read</Link>
                                    <Link target="_blank"  rel="noreferrer" href="https://docs.google.com/forms/d/1kENyWO7qJE--R5wUtMq_b82U2fFiVs_gxR50k5XPC8w/edit">Buy</Link>
                                </div>
                            </div> 
                        </div>
							)
						}
					</Slider>
				: choiceKombucha === "fruitVarieties" ?
				 	<Slider {...settings} className="card-deck">
						{
							fruitVarieties.map(p=> 
							<div className="cardWrap" key={p.productid}>
                            <div className="card">
                                <img src={p.product_image}alt=""/>
                                <h3>{p.flavor_name}</h3>
                                <div className="buttons">
                                    <Link href="#" target="_blank"  rel="noreferrer">Read</Link>
                                    <Link target="_blank"  rel="noreferrer" href="https://docs.google.com/forms/d/1kENyWO7qJE--R5wUtMq_b82U2fFiVs_gxR50k5XPC8w/edit">Buy</Link>
                                </div>
                            </div> 
                        </div>
							)
						}
					</Slider>
				: 	<Slider {...settings} className="card-deck">
						{
							allKombuchaVarieties.map(p=> 
							<div className="cardWrap" key={p.productid}>
                            <div className="card">
                                <img src={p.product_image}alt=""/>
                                <h3>{p.flavor_name}</h3>
                                <div className="buttons">
                                    <Link href="#" target="_blank"  rel="noreferrer">Read</Link>
                                    <Link target="_blank"  rel="noreferrer" href="https://docs.google.com/forms/d/1kENyWO7qJE--R5wUtMq_b82U2fFiVs_gxR50k5XPC8w/edit">Buy</Link>
                                </div>
                            </div> 
                        </div>
							)
						}
					</Slider>
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
								<Slider {...settings} className="card-deck" >
									{
										allKefirVarieties.map(p=> 
										<div className="cardWrap" key={p.productid}>
			                            <div className="card">
			                                <img src={p.product_image}alt=""/>
			                                <h3>{p.flavor_name}</h3>
			                                <div className="buttons">
			                                    <Link href="#" target="_blank"  rel="noreferrer">Read</Link>
			                                    <Link target="_blank"  rel="noreferrer" href="https://docs.google.com/forms/d/1kENyWO7qJE--R5wUtMq_b82U2fFiVs_gxR50k5XPC8w/edit">Buy</Link>
			                                </div>
			                            </div> 
			                        </div>
										)
									}
								</Slider>		
				: choiceKefir === "dairyKefir" ?
					<Slider {...settings} className="card-deck">
						{
							dairyKefir.map(p=> 
							<div className="cardWrap" key={p.productid}>
                            <div className="card">
                                <img src={p.product_image}alt=""/>
                                <h3>{p.flavor_name}</h3>
                                <div className="buttons">
                                    <Link href="#" target="_blank"  rel="noreferrer">Read</Link>
                                    <Link target="_blank"  rel="noreferrer" href="https://docs.google.com/forms/d/1kENyWO7qJE--R5wUtMq_b82U2fFiVs_gxR50k5XPC8w/edit">Buy</Link>
                                </div>
                            </div> 
                        </div>
							)
						}
					</Slider>
				: choiceKefir === "nonDairyKefir" ?
				 	<Slider {...settings} className="card-deck">
						{
							nonDairyKefir.map(p=> 
							<div className="cardWrap"key={p.productid}>
                            <div className="card">
                                <img src={p.product_image}alt=""/>
                                <h3>{p.flavor_name}</h3>
                                <div className="buttons">
                                    <Link href="#" target="_blank"  rel="noreferrer">Read</Link>
                                    <Link target="_blank"  rel="noreferrer" href="https://docs.google.com/forms/d/1kENyWO7qJE--R5wUtMq_b82U2fFiVs_gxR50k5XPC8w/edit">Buy</Link>
                                </div>
                            </div> 
                        </div>
							)
						}
					</Slider>
				: 	<Slider {...settings} className="card-deck">
						{
							allKefirVarieties.map(p=> 
							<div className="cardWrap" key={p.productid}>
                            <div className="card">
                                <img src={p.product_image}alt=""/>
                                <h3>{p.flavor_name}</h3>
                                <div className="buttons">
                                    <Link href="#" target="_blank"  rel="noreferrer">Read</Link>
                                    <Link target="_blank"  rel="noreferrer" href="https://docs.google.com/forms/d/1kENyWO7qJE--R5wUtMq_b82U2fFiVs_gxR50k5XPC8w/edit">Buy</Link>
                                </div>
                            </div> 
                        </div>
							)
						}
					</Slider>
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
