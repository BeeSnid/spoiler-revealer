$(".spoiler span").hide();
$(".spoiler").append("<button>Reveal Spoiler!</button>");
$("button").click(fucntion(){
  $(this).prev().show();
  $(".spoiler span").show();
  $(this).remove();
});
