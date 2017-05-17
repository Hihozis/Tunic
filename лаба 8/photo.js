$(document).ready(function(){
  $(window).load(function() {
    $('#featured').orbit({
      'bullets': true,
      'timer' : true,
      'animation' : 'horizontal-slide'
    });
  });
  $(function() {
     $("#tabs-1" ).tabs();
  });
  $(".group1").colorbox({rel:'group1'});
});
