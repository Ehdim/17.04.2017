$(document).ready(function() {
$("button").click(function(){
    $("#navbar-menu").toggle(500,function(){
          $('#navbar-menu ul li').css({
        'border-bottom':'1px solid grey',
    })
    });
})
});