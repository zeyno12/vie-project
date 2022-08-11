// opennavlist
const openList=document.querySelector(".open_list")
openList.addEventListener("click",()=>{
const openData=document.getElementById("second_li")
openData.classList.toggle("active")
});
// swiper
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 5,
    freeMode: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 4,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 5,
        spaceBetween: 50,
      },
    },
  });
  // swiper second
  var swiperr = new Swiper(".mySwiper_2", {
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
  var swiperr = new Swiper(".mySwiper_2", {
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 4,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 5,
        spaceBetween: 50,
      },
    },
  });
  // /preloader
  var  loader=document.getElementById("preloader");
  window.addEventListener("load",function () {
    loader.style.display="none";
    setTimeout(function(){        
      $('#load').delay(150).fadeOut('slow'); 
  }, 30000);
  })
  // burger
  const burger=document.querySelector(".burger");
if(burger){
  burger.addEventListener("click", function () {
      const mobilnav = document.querySelector(".main_list");
      if (mobilnav.style.transform == "translateX(-500px)") {
        mobilnav.style.transform = "translateX(0px)";
      }
      else  {
        mobilnav.style.transform = "translateX(-500px)";
      }
    })
}