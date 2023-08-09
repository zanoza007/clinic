(function($) {

    "use strict";

        document.addEventListener("DOMContentLoaded", function(){
        
          window.addEventListener('scroll', function() {
              
            if (window.scrollY > 50) {
              document.getElementById('primary-header').classList.add('fixed-top' , 'combat');
            } else {
              document.getElementById('primary-header').classList.remove('fixed-top', 'combat');
              // remove padding top from body
              document.body.style.paddingTop = '0';
            } 
          });
        }); 
        // DOMContentLoaded  end

        $(document).ready(function() {

          $(".user-items .search-item").click(function(){
              $(".search-box").toggleClass('active');
              $(".search-box .search-input").focus();
            });
            $(".close-button").click(function(){
              $(".search-box").toggleClass('active');
            });  

          var swiper = new Swiper(".testimonial-swiper", {
            loop: true,
            pagination: {
              el: ".swiper-pagination",
              clickable: true,
            },
          }); 


          var swiper = new Swiper(".team-swiper", {
            slidesPerView: 2,
            spaceBetween: 20,
            pagination: {
              el: "#our-team .swiper-pagination",
              clickable: true,
            },
            breakpoints: {
              0: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              1200: {
                slidesPerView: 2,
                spaceBetween: 10,
              },
            },
          });  


        }); // End of a document      



    })(jQuery);

    document.getElementById("goMaps").addEventListener("click", go);

function go() {
  alert("location.href");
}

var modal = document.getElementById("myModal");
var btns = document.querySelectorAll(".myBtn");
var span = document.getElementsByClassName("close")[0];

// Назначаем обработчик события для каждого элемента
btns.forEach(function(btn) {
  btn.onclick = function() {
    modal.style.display = "block";
  }
});

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}