$(document).ready(function() 
{

    //
    // FOR MODULE WINDOW *************
    //

    var moduleAnimation = new TimelineMax({paused: true, onComplete:moduleAnimationDone, repeat:0, repeatDelay:0, yoyo:false});
    
    moduleAnimation.to('.module', .4, {display: "block", opacity: 1, ease:Cubic.easeInOut}, 0);
    
    function moduleAnimationDone(){}
    
    //
    // FOR MODULE WINDOW
    //
    
   $('.cta_play').bind('click',function(event){
      popModule('16090957');
      event.preventDefault();
   });

   $('.moduleClose').bind('click',function(event){
      moduleAnimation.reverse();
      $('.moduleContent').html('');
      event.preventDefault();
   });
    

   //
   // FOR MODULE WINDOW
   //
    
   function popModule(_n){
       moduleAnimation.restart();   
       $('.moduleContent').html('<iframe src="https://player.vimeo.com/video/'+_n+'?color=ffffff" width="680" height="379" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>');
   }
    

});