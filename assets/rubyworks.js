$(document).ready(function() {
  $('.nav')
    .mouseover(function(){
	    $('body').stop().animate(
		    {backgroundPosition:"-460px -155"}, 
  		  {duration:1500})
      })
    .mouseout(function(){
      $('body').stop().animate(
        {backgroundPosition:"0 -155"}, 
        {duration:1500})
      })
});

