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
  // swiper second
  var swiper = new Swiper(".mySwiper_2", {
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
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