
$(document).ready(function(){
  
  // FONDO NAVBAR
  $(window).scroll(function(){
      if($(".navbar").offset().top >106){
        console.log('object')
          $(".navbar").addClass("fondo")
      } else {
          $(".navbar").removeClass("fondo")
      }
  })

  /*
  //BOTON DE BUSQUEDA DEL MENU
  $('.button-icon-search').click(
    function(){
    if (!$('.busqueda').hasClass("busqueda-activa")){
      $('.busqueda').addClass("busqueda-activa")    
    }else{
      $('.busqueda').removeClass("busqueda-activa")
    }
  })
*/

})


/*CAROUSEL DE MARCAS*/

$('.multi-item-carousel').on('slide.bs.carousel', function (e) {
  let $e = $(e.relatedTarget),
      itemsPerSlide = 3,
      totalItems = $('.carousel-item', this).length,
      $itemsContainer = $('.carousel-inner', this),
      it = itemsPerSlide - (totalItems - $e.index());
  if (it > 0) {
    for (var i = 0; i < it; i++) {
      $('.carousel-item', this).eq(e.direction == "left" ? i : 0).
        // append slides to the end/beginning
        appendTo($itemsContainer);
    }
  }
});