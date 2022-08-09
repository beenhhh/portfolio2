/***** fullpage *****/

new fullpage('#fullpage', {
  sectionsColor: ['#9baec8', '#34495E  ', '#1C2833', '#1C2833', '#e3e0e0'],
  anchors: ['s1', 's2', 's3', 's4', 's5'],
  menu: '.gnb',
  autoScrolling: true,
  responsiveWidth:600,

});


/***** WOW *****/
new WOW().init();


/***** count *****/
$('.count').each(function() { 
  var $this = $(this),
      countTo = $this.attr('data-count');
  
  $({ countNum: $this.text()}).animate({
    countNum: countTo 
  },
  {
    duration: 3000,
    easing:'linear',
    step: function() {
      $this.text(Math.floor(this.countNum));
    },
    complete: function() { 
      $this.text(this.countNum);
    }
  });  
});


/***** swiper *****/
var swiper = new Swiper(".mySwiper", {
  cssMode: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
  },
  mousewheel: true,
  keyboard: true,
  loop:true,
  autoplay:{
    delay: 5000
  }


});


var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
    loop: true
});

typewriter.typeString('BEEN ')
    .pauseFor(2500)
    .typeString('BY')
    .pauseFor(2500)
    .deleteChars(7)
    .typeString('PORTFOLIO,')
    .pauseFor(2500)
    .deleteChars(10)
    .typeString('THANK YOU')
    .pauseFor(2500)
    .deleteChars(10)
    .start();
