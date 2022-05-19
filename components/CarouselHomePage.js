import Slider from "react-slick";

export default function CarouselHomePage(){
	const settings = {
		dots: false,
        infinite: true,
        autoplay: true,
        autoSpeed: 3500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows:false,
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
return(
	<Slider {...settings} className="carousel">
           	<img src="./images/carousel/group.jpg" alt="carousel Image"/>
            <img src="./images/carousel/DSC_0004.jpg" alt="carousel Image"/>
            <img src="./images/carousel/pineapple.jpg" alt="carousel Image"/>
            <img src="./images/carousel/tea-picking.jpg" alt="carousel Image"/>
    </Slider>

	)
	
}