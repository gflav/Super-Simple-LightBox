$(document).ready(function() 
{

    
//    
//    
//    
// ------------------- ------------------- ------------------- Config
//    
//    

  
    
    
    
    
    
//    
//    
//    
// ------------------- ------------------- ------------------- Setup
//    
//    
// 
    
    
    
    
    
   

//    
//    
//    
// ------------------- ------------------- ------------------- Opening Build Animation
//    
//    
//

    var pageBuildAnimation = new TimelineMax({paused: false, onComplete:timelineDone, repeat:0, repeatDelay:0, yoyo:false});
    
    pageBuildAnimation.fromTo('.con_header', .4, {opacity:0, ease:Linear}, {opacity:1, ease:Power3.easeInOut}, .2);
    
    pageBuildAnimation.fromTo('.con_hero', .3, {opacity:0, ease:Linear}, {opacity:1, ease:Power3.easeInOut}, "+=.2");
    
    pageBuildAnimation.fromTo('.left', .5, {opacity:0, ease:Linear}, {opacity:1, ease:Power3.easeInOut}, "+=.1");
    
    pageBuildAnimation.fromTo('.center', .5, {opacity:0, ease:Linear}, {opacity:1, ease:Power3.easeInOut}, "-=.2");
    
    pageBuildAnimation.fromTo('.right', .5, {opacity:0, ease:Linear}, {opacity:1, ease:Power3.easeInOut}, "-=.2");
    
    pageBuildAnimation.fromTo('.con_footer', .4, {opacity:0, ease:Linear}, {opacity:1, ease:Power3.easeInOut}, "+=.1");
    
    pageBuildAnimation.fromTo('.content_hero', .3, {opacity:0, ease:Linear}, {opacity:1, ease:Power3.easeInOut}, "-=.1");
    
    pageBuildAnimation.fromTo('.title', .5, {opacity:0, ease:Linear}, {opacity:1, ease:Power3.easeInOut}, "+=.1");
    
    pageBuildAnimation.fromTo('.cta_play', .8, {opacity:0, ease:Linear}, {opacity:1, ease:Power3.easeInOut}, "+=.2");
    
    function timelineDone(){
        //pageBuildAnimation.reverse();
        //_flag=true;
    }
    
    

    
    var cta_animation = new TimelineMax({paused: true, onComplete:timelineDone2, repeat:0, repeatDelay:0, yoyo:false});
    
    cta_animation.to('.cta_play', .3, {color:'#ffc', backgroundPosition: '0px 0', ease:Power3.easeInOut}, 0);
    
    function timelineDone2(){
        //pageBuildAnimation.reverse();
        //_flag=true;
    }
    
    
    
    
    
    
    
    
    
    //
    //
    // FOR MODULE WINDOW *************
    //
    //
    var moduleAnimation = new TimelineMax({paused: true, onComplete:moduleAnimationDone, repeat:0, repeatDelay:0, yoyo:false});
    
    moduleAnimation.to('.module', .9, {display: "block", opacity: 1, ease:Power3.easeInOut}, 0);
    
    function moduleAnimationDone(){}
    //
    // END FOR MODULE WINDOW
    //
    
    
   
  
    
    
    
    
    
//    
//    
//    
// ------------------- ------------------- ------------------- MouseBinds 
/*      
    
.promo .left:hover{
    background: #bdd95e; 
}

.promo .left .frame:hover{
    background: #a5be52;
}
   
*/    
//
    
    
    
   $('.left').bind('mouseenter',function(event){
      TweenMax.to('.left', .3, {backgroundColor:'#bdd95e'});
      event.preventDefault();
   });
    
   $('.left').bind('mouseleave',function(event){
      TweenMax.to('.left', .7, {backgroundColor:'#819931'});
      event.preventDefault();
   });
//    
//    
//
   $('.center').bind('mouseenter',function(event){
      TweenMax.to('.center', .7, {backgroundColor:'#bdd95e'});
      event.preventDefault();
   });
   
   $('.center').bind('mouseleave',function(event){
      TweenMax.to('.center', .3, {backgroundColor:'#8ba437'});
      event.preventDefault();
   });
//    
//    
//  
   $('.right').bind('mouseenter',function(event){
      TweenMax.to('.right', .3, {backgroundColor:'#bdd95e'});
      event.preventDefault();
   });
    
   $('.right').bind('mouseleave',function(event){
      TweenMax.to('.right', .7, {backgroundColor:'#a0b94b'});
      event.preventDefault();
   });
//
//
//
    $('.cta_play').bind('mouseenter',function(event){
      cta_animation.play();
      event.preventDefault();
   });
    
   $('.cta_play').bind('mouseleave',function(event){
      cta_animation.reverse();
      event.preventDefault();
   });
    
    //
    // FOR MODULE WINDOW
    //
   $('.cta_play').bind('click',function(event){
      popModule('2uZsNcYQ1tzN&w');
      event.preventDefault();
   });
    
    //
    //FOR MODULE WINDOW
    //
   $('.moduleClose').bind('click',function(event){
      moduleAnimation.reverse();
      $('.moduleContent').html('');
      event.preventDefault();
   });
    
   $('.moduleClose2').bind('click',function(event){
      moduleAnimation.reverse();
      $('.moduleContent').html('');
      event.preventDefault();
   });
    

//  
//    
//    
// ------------------- ------------------- ------------------- Helper Functions
//    
//    
//
    
   // Window events    
   window.onscroll = function (event) {
       /*
       if(document.body.scrollTop > $('.con_site').position().top+198){
        $('.con_nav').addClass('top');
       }else{
        $('.con_nav').removeClass('top');
       }
       */   
   }
   
   window.onresize = function (event) {
     
   }
   
   
   
   //
   // FOR MODULE WINDOW
   //
   function popModule(_n){
       moduleAnimation.restart();   
       $('.moduleContent').html('<iframe scrolling="no" src="https://communications.fidelity.com/video/players/pdk/?pid='+_n+'=680&auto=true" width="680" height="379" frameborder="0" class="videoplayer" seamless allowfullscreen></iframe>');
   }
  
//    
//    
//    
// ------------------- ------------------- ------------------- Mobile FUNCTIONS
//    
//    
//
    
   
   
   
   
   
   
//
//
// ----------------------------------------------------------- INIT
   
    pageBuildAnimation.play();    

//END
});