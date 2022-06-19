import Slider from "react-slick";
import Link from "next/link";


export default function ProductsCarousel ({productsArray}) {
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

    return <Slider {...settings} className="card-deck">
        {
            productsArray.map( (p)=> 
                    <div  key={p.productid} className ="card-wrap">
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
}