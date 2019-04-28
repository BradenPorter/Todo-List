$("ul").on("click", "li", function(){
  $(this).toggleClass("completed");
  //Below is the LONG way of toggling some css
  // if($(this).css("color")==="rgb(128, 128, 128)"){//If already gray
  //   $(this).css({
  //     color:"black",
  //     textDecoration:"none"
  //   });
  // }
  // else{
  // $(this).css({
  //   color: "gray",
  //   textDecoration: "line-through"
  // });
  // }
});

//click on X to delete todo
$("ul").on("click", "span", function(event){
  $(this).parent().fadeOut(500,function(){
    $(this).remove();
  });
  event.stopPropagation();
});

$("input[type='text']").keypress(function(event){
  if(event.which===13){
    var todoText=$(this).val();
    $(this).val("");
    $("ul").append("<li><span><i class = 'fa fa-trash'></i></span> " + todoText + "</li>")
  }
});

$(".fa-angle-double-down").click(function(){
  $("input[type='text']").fadeToggle();
});
