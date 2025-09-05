$(function(){
let header=$("#header");
let header__top=$("#header__top");
let headerH=header.innerHeight();
let scrollPos=$(window).scrollTop();
console.log(scrollPos);
console.log(headerH);

$(window).on("scroll",function(){
scrollPos=$(this).scrollTop();
console.log(scrollPos);
});

$(window).on("scroll",function(){
  scrollPos=$(this).scrollTop();
  
  if(scrollPos>headerH){
    header__top.addClass("fixed");
  }
  else{
    header__top.removeClass("fixed");
  }
  console.log(scrollPos);
  });

  $("[data-scroll]").on("click" ,function(event){
    event.preventDefault();
    let elementId=$(this).data("scroll");
    let elementOffset=$(elementId).offset().top;
   
    $("html,body").animate({
      scrollTop:elementOffset-70
    });

  
});
});
 
 
 
 
 
 $('.portfolio-scroll').slick({
    arrows:false,
    centerMode: true,
    centerPadding: '300px',
    slidesToShow: 1,
    initialSlide: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '300px',
          slidesToShow: 1
        }
      },
      
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '10px',
          slidesToShow: 1
        }
      }
    ]
  });
  document.addEventListener("DOMContentLoaded", function() {
    const photoContentText = document.querySelector('.photo-content-text');
    const photoContentPhoto = document.querySelector('.photo-content-photo');

    function checkScroll() {
        const scrollPosition = window.scrollY + window.innerHeight;

        if (scrollPosition > photoContentText.offsetTop) {
            photoContentText.classList.add('active');
        }

        if (scrollPosition > photoContentPhoto.offsetTop) {
            photoContentPhoto.classList.add('active');
        }
    }

    window.addEventListener('scroll', checkScroll);
    checkScroll(); // Викликати при завантаженні сторінки для перевірки відразу
});
  document.addEventListener("DOMContentLoaded", function() {
    const teamScroll = document.querySelector('.team_scroll');
    const teamButton1 = document.querySelector('.team_button_1 img');
    const teamButton = document.querySelector('.team_button_2 img');
    const scrollAmount = 400;

    function scrollPhotos(direction) {
        if (direction === 'right') {
            teamScroll.scrollTo({
                left: teamScroll.scrollLeft + scrollAmount,
                behavior: 'smooth'
            });
        } else if (direction === 'left') {
            teamScroll.scrollTo({
                left: teamScroll.scrollLeft - scrollAmount,
                behavior: 'smooth'
            });
        }
    }

    teamButton1.addEventListener('click', function() {
        scrollPhotos('left');
    });

    teamButton.addEventListener('click', function() {
        scrollPhotos('right');
    });
});