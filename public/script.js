

// loader
var loader = document.querySelector(".loader");
window.addEventListener("load", function(){
	loader.classList.add("vanish");
})

// navigation
$(function(){
	const ham = $(".theSpan");
	const ham1 = $("#ham1");
	const ham2 = $("#ham2");
	const ham3 = $("#ham3");
	const menu = $(".navSm");
	const nav = $(".container");

	var toggle = false;
	ham.click(
		function toggleFunc(){
		if(!toggle){
	
			menu.css({"transform":"translateX(0vw)"});
			ham1.css({"transform" : "translate(-2px,4px) rotate(-45deg) "});
			ham2.css({"display":"none"});
			ham3.css({"transform" : "translate(-2px,-4px) rotate(45deg) "});
			toggle = true;

		}
		else{
	
			menu.css({"transform":"translateX(-50vw)"});
			ham1.css({"transform" : "translate(0px,0px) rotate(0deg) " });
			ham2.css({"display":"block"});
			ham3.css({"transform" : "translate(0px,0px) rotate(0deg) " });
			toggle = false;
			console.log(toggle);
		}
	}
	)

})

$(document).ready(function(){
// Slick carousel
    $('.carousel').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        fade: true
      });

      $(".card-deck").slick({
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplay: true,
        autoplaySpeed: 2000,
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
        
      });
});

////////////////////////////////////////////////////// products page//////////////////////////////////////////////
$(function(){

  displayKombuchaList = () =>{

    let choice = document.getElementById("selectKombucha").value;
    let allVarieties = document.getElementById("allVarieties");
    let herbalVarieties = document.getElementById("herbalVarieties");
    let fruitVarieties = document.getElementById("fruitVarieties");

    if(choice == "fruitVarieties"){
        $(".card-deck").slick("unslick");
        fruitVarieties.style.display = "block";
        allVarieties.style.display = "none";
        herbalVarieties.style.display = "none";
        $(".card-deck").slick({
          slidesToShow: 3,
          slidesToScroll: 3,
          autoplay: true,
          autoplaySpeed: 2000,
          variableWidth: false,
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
                centerMode:true
              }
            }
          ]
        })
    }
    else if( choice == "herbalVarieties"){
        $(".card-deck").slick("unslick");
        herbalVarieties.style.display = "block";
        allVarieties.style.display = "none";
        fruitVarieties.style.display = "none";
        $(".card-deck").slick({
          slidesToShow: 3,
          slidesToScroll: 3,
          autoplay: true,
          autoplaySpeed: 2000,
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
                centerMode:true
              }
            }
          ]
        })
    }
    else{
          $(".card-deck").slick("unslick");
          allVarieties.style.display = "block";
          herbalVarieties.style.display = "none";
          fruitVarieties.style.display = "none";
          $(".card-deck").slick({
            slidesToShow: 3,
            slidesToScroll: 3,
            autoplay: true,
            autoplaySpeed: 2000,
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
                  centerMode:true
                }
              }
            ]
          })
    }
  }
  displayKefirList = () =>{

    let choice = document.getElementById("selectKefir").value;
    let allKefirVarieties = document.getElementById("allKefirVarieties");
    let dairyKefir = document.getElementById("DairyKefir");
    let nonDairyKefir = document.getElementById("NonDairyKefir");

    if(choice == "DairyKefir"){
        $(".card-deck").slick("unslick");
        dairyKefir.style.display = "block";
        allKefirVarieties.style.display = "none";
        nonDairyKefir.style.display = "none";
        $(".card-deck").slick({
          slidesToShow: 3,
          slidesToScroll: 3,
          autoplay: true,
          autoplaySpeed: 2000,
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
                centerMode:true
              }
            }
          ]
        })
    }
    else if( choice == "NonDairyKefir"){
      $(".card-deck").slick("unslick");
      dairyKefir.style.display = "none";
      allKefirVarieties.style.display = "none";
      nonDairyKefir.style.display = "block";
      $(".card-deck").slick({
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplay: true,
        autoplaySpeed: 2000,
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
              centerMode:true
            }
          }
        ]
      })
    }
    else{
        $(".card-deck").slick("unslick");
        dairyKefir.style.display = "none";
        allKefirVarieties.style.display = "block";
        nonDairyKefir.style.display = "none";
        $(".card-deck").slick({
          slidesToShow: 3,
          slidesToScroll: 3,
          autoplay: true,
          autoplaySpeed: 2000,
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
                centerMode:true
              }
            }
          ]
        })
    }
  }

});

//////////////////////////////////////////////////// blogs Page/////////////////////////////////////////////////////////////////////
                     
//read 1
$(function(){
  var modal = $(".modal-r1");
  $(".read-1").click(function(){$("body").css({"overflow-y":"hidden"}); $(".modal-r1").css({"display":"block"})})
  $(".close-btn").click(function(){$("body").css({"overflow-y":"scroll"});$(".modal-r1").css({"display":"none"})})
  
  let flip = false;
	 setInterval(function(){
			while(!flip){
				$(".flip-1").css({"transform":"rotateY(180deg)"})
			 	flip = true;
			}
	 },3000)
	 setInterval(function(){
			while(flip){
				$(".flip-1").css({"transform":"rotateY(360deg)"})
			 	flip = false;
			}
	 	},6000)
})

                                         
//read 2
$(function(){
  $(".read-2").click(function(){$("body").css({"overflow-y":"hidden"}); $(".modal-r2").css({"display":"block"}) })
  $(".close-btn").click(function(){$("body").css({"overflow-y":"scroll"}); $(".modal-r2").css({"display":"none"})})

  let flip = false;
	 setInterval(function(){
			while(!flip){
				$(".flip-2").css({"transform":"rotateY(180deg)"})
			 	flip = true;
			}
			
	 },4500)
	 setInterval(function(){
			while(flip){
				$(".flip-2").css({"transform":"rotateY(360deg)"})
			 	flip = false;
			}
	 	},9000)
})

                                          
//read 3
$(function(){
  $(".read-3").click(function(){$("body").css({"overflow-y":"hidden"}); $(".modal-r3").css({"display":"block"}) })
  $(".close-btn").click(function(){$("body").css({"overflow-y":"scroll"});$(".modal-r3").css({"display":"none"})})
  
  let flip = false;
	 setInterval(function(){
			while(!flip){
				$(".flip-3").css({"transform":"rotateY(180deg)"})
			 	flip = true;
			}
			
	 },3700)
	 setInterval(function(){
			while(flip){
				$(".flip-3").css({"transform":"rotateY(360deg)"})
			 	flip = false;
			}
	 	},7400)
})
   

//read 4
$(function(){
  $(".read-4").click(function(){$("body").css({"overflow-y":"hidden"}); $(".modal-r4").css({"display":"block"})})
  $(".close-btn").click(function(){$("body").css({"overflow-y":"scroll"}); $(".modal-r4").css({"display":"none"})})

  let flip = false;
	 setInterval(function(){
			while(!flip){
				$(".flip-4").css({"transform":"rotateY(180deg)"})
			 	flip = true;
			}
			
	 },3700)
	 setInterval(function(){
			while(flip){
				$(".flip-4").css({"transform":"rotateY(360deg)"})
			 	flip = false;
			}
	 	},7400)
})


//read 5
$(function(){
  $(".read-5").click(function(){$("body").css({"overflow-y":"hidden"}); $(".modal-r5").css({"display":"block"}) })
  $(".close-btn").click(function(){$("body").css({"overflow-y":"scroll"});$(".modal-r5").css({"display":"none"})})

  let flip = false;
	 setInterval(function(){
			while(!flip){
				$(".flip-5").css({"transform":"rotateY(180deg)"})
			 	flip = true;
			}
			
	 },5000)
	 setInterval(function(){
			while(flip){
				$(".flip-5").css({"transform":"rotateY(360deg)"})
			 	flip = false;
			}
	 	},10000)
})


//read 6
$(function(){
  $(".read-6").click(function(){$("body").css({"overflow-y":"hidden"}); $(".modal-r6").css({"display":"block"}) })
  $(".close-btn").click(function(){$("body").css({"overflow-y":"scroll"});$(".modal-r6").css({"display":"none"})})

  let flip = false;
  setInterval(function(){
     while(!flip){
       $(".flip-6").css({"transform":"rotateY(180deg)"})
        flip = true;
     }
     
  },5600)
  setInterval(function(){
     while(flip){
       $(".flip-6").css({"transform":"rotateY(360deg)"})
        flip = false;
     }
    },11200)
})


//read 7
$(function(){
  $(".read-7").click(function(){$("body").css({"overflow-y":"hidden"}); $(".modal-r7").css({"display":"block"}) })
  $(".close-btn").click(function(){$("body").css({"overflow-y":"scroll"}); $(".modal-r7").css({"display":"none"})})

  let flip = false;
  setInterval(function(){
     while(!flip){
       $(".flip-7").css({"transform":"rotateY(180deg)"})
        flip = true;
     }
     
  },4900)
  setInterval(function(){
     while(flip){
       $(".flip-7").css({"transform":"rotateY(360deg)"})
        flip = false;
     }
    },9800)
})


//read 8
$(function(){
  $(".read-8").click(function(){$("body").css({"overflow-y":"hidden"}); $(".modal-r8").css({"display":"block"}) })
  $(".close-btn").click(function(){$("body").css({"overflow-y":"scroll"}); $(".modal-r8").css({"display":"none"})})

  let flip = false;
  setInterval(function(){
     while(!flip){
       $(".flip-8").css({"transform":"rotateY(180deg)"})
        flip = true;
     }
     
  },4000)
  setInterval(function(){
     while(flip){
       $(".flip-8").css({"transform":"rotateY(360deg)"})
        flip = false;
     }
    },8000)
})