const copy = document.querySelector(".logos-slide").cloneNode(true);
document.querySelector(".logos").appendChild(copy);

var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    } 
  });
};
  var swiper = new Swiper(".mySwiper", {
    loop: true,
    disableOnInteraction: true,
/*     speed: 800,
    autoplay:{
      delay: 5000,
    }, */
    pagination: {
      el: '.swiper-pagination',
      type: 'fraction',
      formatFractionCurrent: function (number) {
          return ('0' + number).slice(-2);
      },
      formatFractionTotal: function (number) {
          return ('0' + number).slice(-2);
      },
      renderFraction: function (currentClass, totalClass) {
          return '<span class="' + currentClass + '"></span>' +
                 ' / ' +
                 '<span class="' + totalClass + '"></span>';
      }
  },
  });