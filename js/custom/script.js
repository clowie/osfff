/**
 * scripts.js
 */
/*global TimelineMax: true,TimelineLite: true,TweenMax: true,Bounce:true, Back:true, Quad:true, Expo:true, Elastic:true */

(function($) {

  // requires parent container to have absolute or relative positioning and overflow:hidden
  function fitImage($container) {
    $container.imageFill();
  }

  // create a timeline
  var tl = new TimelineMax();


  // ---------------------------------------
  // Add animation for each step
  // ---------------------------------------

  var i;

  // INTRO (plays automatically, pauses at end)
  $('#slide-title h1').lettering();
  var intro = new TimelineMax();
  intro.add(TweenMax.to($('#slide-title'),0,{immediateRender:false,css:{display:'block'}}));
  intro.add(TweenMax.fromTo($('body'),0.5,{backgroundColor:'#fff'},{delay:0.5,backgroundColor:'#99cee2'}));
  $('#slide-title h1 span').css({position:'relative'}).each(function() {
    intro.add(TweenMax.from(this, 2, {css:{top: Math.random()*200+600, left: (Math.random()*1000)-500, rotation:Math.random()*720-360}, ease:Expo.easeOut}),1.25);
  });
  intro.add(TweenMax.from($('#author,.instructions'), 0.5, {opacity:0}));
  tl.add(intro);


  // SLIDE ======================================================================== //

  // each slide gets a timeline
  var slideGithub = new TimelineMax();

  // for each slide, animate out the previous content
  $('#slide-title h1 span').css({position:'relative'}).each(function() {
    slideGithub.add(TweenMax.to(this, 1.5, {css:{opacity:0, top: Math.random()*-200-400, left: (Math.random()*1000)-500, rotation:Math.random()*720-360}, ease:Expo.easeInOut}),0);
  });
  slideGithub.add(TweenMax.to($('#author,.instructions').css({position:'relative'}), 0.5, {opacity:0}),0);
  slideGithub.add(TweenMax.to($('#slide-title'),0,{immediateRender:false,css:{display:'none'}}));

  // then animate in the new slide content
  slideGithub.add(TweenMax.to($('#slide-github'),0,{immediateRender:false,css:{display:'block'}}),1);
  slideGithub.add(TweenMax.to($('body'),0.5,{backgroundColor:'#4183c4'}),1);
  slideGithub.add(TweenMax.from($('#slide-github .step1'),0.5,{opacity:0}));
  slideGithub.add(TweenMax.from($('#slide-github .step2'),0.5,{opacity:0,rotationY:720, transformOrigin:"50% 50%", perspective:2000,delay:-0.25}));
  slideGithub.add(TweenMax.from($('#octocat'),0.25,{left:-300,delay:0.75}));
  slideGithub.add(TweenMax.from($('#slide-github .step3'),0.25,{opacity:0,top:50,ease:Expo.easeOut,delay:-0.125}));
  tl.add(slideGithub);


  // SLIDE ======================================================================== //
  var slideWhy = new TimelineMax();
  // outro prev slide
  slideWhy.add(TweenMax.to($('#octocat'),0.25,{left:-300, ease:Expo.easeIn}),0);
  slideWhy.add(TweenMax.to($('#slide-github .step1'),0.25,{left:'100%', ease:Expo.easeIn}),0);
  slideWhy.add(TweenMax.to($('#slide-github .step2'),0.25,{left:'100%', ease:Expo.easeIn}),0);
  slideWhy.add(TweenMax.to($('#slide-github .step3'),0.25,{left:'100%', ease:Expo.easeIn}),0);
  slideWhy.add(TweenMax.to($('#slide-github'),0,{immediateRender:false,css:{display:'none'}}));

  // set initial state
  $('#slide-why .step').css({position:'absolute',top:125});
  $('#slide-why .step5').css({position:'absolute',top:240});

  // intro
  slideWhy.add(TweenMax.to($('#slide-why'),0,{immediateRender:false,css:{display:'block'}}));
  slideWhy.add(TweenMax.to($('body'),0.5,{backgroundColor:'#fff2d0'}));
  slideWhy.add(TweenMax.fromTo($('#slide-why .step1'),0.5,{top:240},{top:120}),0);
  slideWhy.add(TweenMax.fromTo($('#slide-why .step1 h1'),0.5,{fontSize:'0px'},{fontSize:'160px'}),0);

  var slideWhy1 = new TimelineMax();
  slideWhy1.add(TweenMax.to($('#slide-why .step1 h1'),0.25,{fontSize:'120px'}));
  slideWhy1.add(TweenMax.to($('#slide-why .step1'),0.25,{top:30}),0);
  slideWhy1.add(TweenMax.from($('#slide-why .step2'),0.5,{opacity:0}));
  slideWhy1.add(TweenMax.from($('#slide-why .step2 .step-a'),0.5,{right:-400,ease:Expo.easeOut}),0);
  slideWhy1.add(TweenMax.from($('#slide-why .step2 .img-left'),0.5,{rotationY:-720, transformOrigin:"50% 50%", perspective:2000, ease:Expo.easeOut}),0);

  var slideWhy2 = new TimelineMax();
  slideWhy2.add(TweenMax.to($('#slide-why .step2'),0.25,{opacity:0}));
  slideWhy2.add(TweenMax.to($('#slide-why .step2 .img-left'),0.5,{rotationY:720, transformOrigin:"50% 50%", perspective:2000, ease:Expo.easeInOut}),0);
  slideWhy2.add(TweenMax.from($('#slide-why .step3 .img-left'),0.5,{rotationY:-720, transformOrigin:"50% 50%", perspective:2000, ease:Expo.easeInOut}),0);
  slideWhy2.add(TweenMax.from($('#slide-why .step3 .step-a'),0.5,{right:-400,ease:Expo.easeOut}),0);
  slideWhy2.add(TweenMax.from($('#slide-why .step3'),0.5,{opacity:0}),0);

  var slideWhy3 = new TimelineMax();
  slideWhy3.add(TweenMax.to($('#slide-why .step3'),0.25,{opacity:0}));
  slideWhy3.add(TweenMax.to($('#slide-why .step3 .img-left'),0.5,{rotationY:720, transformOrigin:"50% 50%", perspective:2000, ease:Expo.easeInOut}),0);
  slideWhy3.add(TweenMax.from($('#slide-why .step4 .img-left'),0.5,{rotationY:-720, transformOrigin:"50% 50%", perspective:2000, ease:Expo.easeInOut}),0);
  slideWhy3.add(TweenMax.from($('#slide-why .step4 .step-a'),0.5,{right:-400,ease:Expo.easeOut}),0);
  slideWhy3.add(TweenMax.from($('#slide-why .step4'),0.5,{opacity:0}),0);

  var slideWhy4 = new TimelineMax();
  slideWhy4.add(TweenMax.to($('#slide-why .step4'),0.25,{opacity:0}));
  slideWhy4.add(TweenMax.from($('#slide-why .step5'),0.5,{opacity:0,left:-400,ease:Expo.easeOut}));

  // add all steps, one at a time to keep pauses
  tl.add(slideWhy);
  tl.add(slideWhy1);
  tl.add(slideWhy2);
  tl.add(slideWhy3);
  tl.add(slideWhy4);


  // SLIDE ======================================================================== //
  var slideEpic = new TimelineMax();
  // outro prev slide
  slideEpic.add(TweenMax.to($('#slide-why .step5'),0.25,{left:400,ease:Expo.easeIn}));
  slideEpic.add(TweenMax.to($('#slide-why'),0.25,{opacity:0}),0);
  slideEpic.add(TweenMax.to($('#slide-why'),0,{immediateRender:false,css:{display:'none'}}));

  // intro
  slideEpic.add(TweenMax.to($('#slide-epic'),0,{immediateRender:false,css:{display:'block'}}));
  slideEpic.add(TweenMax.to($('body'),0.5,{backgroundColor:'#c00000'}));
  slideEpic.add(TweenMax.from($('#slide-epic img').css('position','relative'),0.75,{opacity:0,top:150,rotationY:450, delay:-0.25,transformOrigin:"50% 50%", perspective:2000,ease:Expo.easeOut}));
  tl.add(slideEpic);


  // SLIDE ======================================================================== //
  var slideFamous = new TimelineMax();
  // outro prev slide
  slideFamous.add(TweenMax.to($('#slide-epic'),0.25,{opacity:0}));
  slideFamous.add(TweenMax.to($('#slide-epic'),0,{immediateRender:false,css:{display:'none'}}));

  // intro
  slideFamous.add(TweenMax.to($('#slide-famous'),0,{immediateRender:false,css:{display:'block'}}));
  slideFamous.add(TweenMax.to($('body'),0.75,{backgroundColor:'#d63dbc'}),0);
  slideFamous.add(TweenMax.from($('#slide-famous .step1'),0.5,{opacity:0,rotationX:360, transformOrigin:"50% 50%", perspective:2000,ease:Expo.easeOut}));

  var slideFamous1 = new TimelineMax();
  slideFamous1.add(TweenMax.from($('#slide-famous .step1'),0.25,{top:240,ease:Expo.easeInOut}));
  slideFamous1.add(TweenMax.to($('#slide-famous .step2'),0,{immediateRender:false,css:{display:'block'}}));
  slideFamous1.add(TweenMax.from($('#slide-famous .step2'),0.25,{opacity:0}));

  var slideFamous2 = new TimelineMax();
  slideFamous2.add(TweenMax.to($('#slide-famous .step2'),0.5,{opacity:0}));
  slideFamous2.add(TweenMax.to($('#slide-famous .step2 img'),0.5,{rotationY:720, transformOrigin:"50% 50%", perspective:2000, ease:Expo.easeIn, delay:-0.5}));
  slideFamous2.add(TweenMax.to($('#slide-famous .step2'),0,{immediateRender:false,css:{display:'none'}}));
  // slideFamous2.add(TweenMax.from($('#slide-famous .step3'),0,{immediateRender:false,css:{display:'none'}}));
  slideFamous2.add(TweenMax.from($('#slide-famous .step3'),0.5,{opacity:0,delay:0.01}));
  slideFamous2.add(TweenMax.from($('#slide-famous .step3 img'),0.5,{rotationY:720, transformOrigin:"50% 50%", perspective:2000, ease:Expo.easeOut, delay:-0.5}));
  slideFamous2.add(TweenMax.to($('body'),0.5,{backgroundColor:'#344cb1',delay:-0.5}));


  tl.add(slideFamous);
  tl.add(slideFamous1);
  tl.add(slideFamous2);


  // SLIDE ======================================================================== //
  var slideSuck = new TimelineMax();
  // outro prev slide
  slideSuck.add(TweenMax.to($('#slide-famous'),0.25,{opacity:0}));
  slideSuck.add(TweenMax.to($('#slide-famous'),0,{immediateRender:false,css:{display:'none'}}));

  // intro
  slideSuck.add(TweenMax.to($('#slide-suck'),0,{immediateRender:false,css:{display:'block'}}));
  slideSuck.add(TweenMax.to($('body'),1,{backgroundColor:'#c9d787'}),0);
  $('#slide-suck .step').lettering();
  slideSuck.add(TweenMax.from($('#slide-suck .step1'),0.25,{opacity:0}));
  $('#slide-suck .step1').find('span').css({position:'relative'}).each(function() {
    slideSuck.add(TweenMax.from($(this),0.25+Math.random(),{
      top:Math.random()*400-200, ease:Expo.easeOut
    }),1);
  });

  var slideSuck1 = new TimelineMax();
  slideSuck1.add(TweenMax.from($('#slide-suck .step2'),0.25,{opacity:0}));
  $('#slide-suck .step2').find('span').css({position:'relative'}).each(function() {
    slideSuck1.add(TweenMax.from($(this),0.25,{
      left:Math.random()*400-200, ease:Expo.easeOut
    }),0);
  });

  tl.add(slideSuck);
  tl.add(slideSuck1);


  // SLIDE ======================================================================== //
  var slideLearning = new TimelineMax();
  // outro prev slide
  slideLearning.add(TweenMax.to($('#slide-suck'),0.25,{opacity:0}));
  slideLearning.add(TweenMax.to($('#slide-suck'),0,{immediateRender:false,css:{display:'none'}}));

  // intro
  slideLearning.add(TweenMax.to($('#slide-learning'),0,{immediateRender:false,css:{display:'block'}}));
  slideLearning.add(TweenMax.to($('body'),0.5,{backgroundColor:'#284e4f'}));

  $('#slide-learning .step1').lettering();
  slideLearning.add(TweenMax.from($('#slide-learning .step1'),0.5,{opacity:0,letterSpacing:'50px',ease:Expo.easeOut}));
  slideLearning.add(TweenMax.from($('#slide-learning .step2'),1,{opacity:0,rotationX:90, transformOrigin:"50% bottom", perspective:2000,ease:Expo.easeOut}));

  var slideLearning1 = new TimelineMax();
  slideLearning1.add(TweenMax.to($('#slide-learning .step2'),0.25,{opacity:0,rotationX:90, transformOrigin:"50% bottom", perspective:2000}));
  slideLearning1.add(TweenMax.from($('#slide-learning .step3'),1,{opacity:0,rotationX:90, transformOrigin:"50% bottom", perspective:2000,ease:Expo.easeOut}));

  var slideLearning2 = new TimelineMax();
  slideLearning2.add(TweenMax.to($('#slide-learning .step3'),0.25,{opacity:0,rotationX:90, transformOrigin:"50% bottom", perspective:2000}));
  slideLearning2.add(TweenMax.from($('#slide-learning .step4'),1,{opacity:0,rotationX:90, transformOrigin:"50% bottom", perspective:2000,ease:Expo.easeOut}));

  tl.add(slideLearning);
  tl.add(slideLearning1);
  tl.add(slideLearning2);


  // SLIDE ======================================================================== //
  var slideMe = new TimelineMax();
  // outro prev slide
  slideMe.add(TweenMax.to($('#slide-learning'),0.25,{opacity:0}));
  slideMe.add(TweenMax.to($('#slide-learning'),0,{immediateRender:false,css:{display:'none'}}));

  // intro
  slideMe.add(TweenMax.to($('#slide-me'),0,{immediateRender:false,css:{display:'block'}}));
  slideMe.add(TweenMax.from($('#slide-me'),0.25,{opacity:0}));
  slideMe.add(TweenMax.to($('body'),0.5,{backgroundColor:'#363942',delay:-0.25}));
  slideMe.add(TweenMax.from($('#slide-me .step1'),0.25,{opacity:0,rotation:-720,fontSize:'10px',ease:Expo.easeOut}));
  tl.add(slideMe);

  var slideMe1 = new TimelineMax();
  slideMe1.add(TweenMax.to($('#slide-me .step1'),0.25,{rotation:720,fontSize:'10px',opacity:0,ease:Expo.easeIn}));
  slideMe1.add(TweenMax.from($('#slide-me .step2'),0.25,{rotation:-720,fontSize:'10px',opacity:0,ease:Expo.easeOut}));

  var slideMe2 = new TimelineMax();
  slideMe2.add(TweenMax.to($('#slide-me .step2'),0.25,{rotation:720,fontSize:'10px',opacity:0,ease:Expo.easeIn}));
  slideMe2.add(TweenMax.from($('#slide-me .step3'),0.25,{rotation:-720,fontSize:'10px',opacity:0,ease:Expo.easeOut}));

  var slideMe3 = new TimelineMax();
  slideMe3.add(TweenMax.to($('#slide-me .step3'),0.25,{rotation:720,fontSize:'10px',opacity:0,ease:Expo.easeIn}));
  slideMe3.add(TweenMax.from($('#slide-me .step4'),0.25,{rotation:-720,fontSize:'10px',opacity:0,ease:Expo.easeOut}));

  tl.add(slideMe);
  tl.add(slideMe1);
  tl.add(slideMe2);
  tl.add(slideMe3);


  // SLIDE ======================================================================== //
  var slideSuccess = new TimelineMax();
  // outro prev slide
  slideSuccess.add(TweenMax.to($('#slide-me'),0.25,{opacity:0}));
  slideSuccess.add(TweenMax.to($('#slide-me'),0,{immediateRender:false,css:{display:'none'}}));

  // intro
  slideSuccess.add(TweenMax.to($('body'),1,{backgroundColor:'#959fb2'}),0);
  slideSuccess.add(TweenMax.to($('#slide-success'),0,{immediateRender:false,css:{display:'block'}}),0.25);
  slideSuccess.add(TweenMax.from($('#slide-success .step1'),0.25,{opacity:0,rotationX:Math.random()*90,rotationY:Math.random()*90, transformOrigin:Math.round(Math.random()*100)+'% '+Math.round(Math.random()*100)+'%'+' '+(Math.round(Math.random()*400)-200), perspective:2000}),0.25);
  tl.add(slideSuccess);

  var slideSuccess1 = new TimelineMax();
  slideSuccess1.add(TweenMax.to($('#slide-success .step1'),0.25,{opacity:0,rotationX:Math.random()*90,rotationY:Math.random()*90, transformOrigin:Math.round(Math.random()*100)+'% '+Math.round(Math.random()*100)+'%'+' '+(Math.round(Math.random()*400)-200), perspective:2000}));
  slideSuccess1.add(TweenMax.from($('#slide-success .step2'),0.25,{opacity:0,rotationX:Math.random()*90,rotationY:Math.random()*90, transformOrigin:Math.round(Math.random()*100)+'% '+Math.round(Math.random()*100)+'%'+' '+(Math.round(Math.random()*400)-200), perspective:2000}),0);
  tl.add(slideSuccess1);

  var slideSuccess2 = new TimelineMax();
  slideSuccess2.add(TweenMax.to($('#slide-success .step2'),0.25,{opacity:0,rotationX:Math.random()*90,rotationY:Math.random()*90, transformOrigin:Math.round(Math.random()*100)+'% '+Math.round(Math.random()*100)+'%'+' '+(Math.round(Math.random()*400)-200), perspective:2000}));
  slideSuccess2.add(TweenMax.from($('#slide-success .step3'),0.25,{opacity:0,rotationX:Math.random()*90,rotationY:Math.random()*90, transformOrigin:Math.round(Math.random()*100)+'% '+Math.round(Math.random()*100)+'%'+' '+(Math.round(Math.random()*400)-200), perspective:2000}),0);
  tl.add(slideSuccess2);

  var slideSuccess3 = new TimelineMax();
  slideSuccess3.add(TweenMax.to($('#slide-success .step3'),0.25,{opacity:0,rotationX:Math.random()*90,rotationY:Math.random()*90, transformOrigin:Math.round(Math.random()*100)+'% '+Math.round(Math.random()*100)+'%'+' '+(Math.round(Math.random()*400)-200), perspective:2000}));
  slideSuccess3.add(TweenMax.from($('#slide-success .step4'),0.25,{opacity:0,rotationX:Math.random()*90,rotationY:Math.random()*90, transformOrigin:Math.round(Math.random()*100)+'% '+Math.round(Math.random()*100)+'%'+' '+(Math.round(Math.random()*400)-200), perspective:2000}),0);
  tl.add(slideSuccess3);

  var slideSuccess4 = new TimelineMax();
  slideSuccess4.add(TweenMax.to($('#slide-success .step4'),0.25,{opacity:0,rotationX:Math.random()*90,rotationY:Math.random()*90, transformOrigin:Math.round(Math.random()*100)+'% '+Math.round(Math.random()*100)+'%'+' '+(Math.round(Math.random()*400)-200), perspective:2000}));
  slideSuccess4.add(TweenMax.from($('#slide-success .step5'),0.25,{opacity:0,rotationX:Math.random()*90,rotationY:Math.random()*90, transformOrigin:Math.round(Math.random()*100)+'% '+Math.round(Math.random()*100)+'%'+' '+(Math.round(Math.random()*400)-200), perspective:2000}),0);
  tl.add(slideSuccess4);

  var slideSuccess5 = new TimelineMax();
  slideSuccess5.add(TweenMax.to($('#slide-success .step5'),0.25,{opacity:0,rotationX:Math.random()*90,rotationY:Math.random()*90, transformOrigin:Math.round(Math.random()*100)+'% '+Math.round(Math.random()*100)+'%'+' '+(Math.round(Math.random()*400)-200), perspective:2000}));
  slideSuccess5.add(TweenMax.from($('#slide-success .step6'),0.25,{opacity:0,rotationX:Math.random()*90,rotationY:Math.random()*90, transformOrigin:Math.round(Math.random()*100)+'% '+Math.round(Math.random()*100)+'%'+' '+(Math.round(Math.random()*400)-200), perspective:2000}),0);
  tl.add(slideSuccess5);

  var slideSuccess6 = new TimelineMax();
  slideSuccess6.add(TweenMax.to($('#slide-success .step6'),0.25,{opacity:0,rotationX:Math.random()*90,rotationY:Math.random()*90, transformOrigin:Math.round(Math.random()*100)+'% '+Math.round(Math.random()*100)+'%'+' '+(Math.round(Math.random()*400)-200), perspective:2000}));
  slideSuccess6.add(TweenMax.from($('#slide-success .step7'),0.25,{opacity:0,rotationX:Math.random()*90,rotationY:Math.random()*90, transformOrigin:Math.round(Math.random()*100)+'% '+Math.round(Math.random()*100)+'%'+' '+(Math.round(Math.random()*400)-200), perspective:2000}),0);
  tl.add(slideSuccess6);

  var slideSuccess7 = new TimelineMax();
  slideSuccess7.add(TweenMax.to($('#slide-success .step7'),0.25,{opacity:0,rotationX:Math.random()*90,rotationY:Math.random()*90, transformOrigin:Math.round(Math.random()*100)+'% '+Math.round(Math.random()*100)+'%'+' '+(Math.round(Math.random()*400)-200), perspective:2000}));
  slideSuccess7.add(TweenMax.from($('#slide-success .step8'),0.25,{opacity:0,rotationX:Math.random()*90,rotationY:Math.random()*90, transformOrigin:Math.round(Math.random()*100)+'% '+Math.round(Math.random()*100)+'%'+' '+(Math.round(Math.random()*400)-200), perspective:2000}),0);
  tl.add(slideSuccess7);


  // SLIDE ======================================================================== //
  var slideHotsnot = new TimelineMax();
  // outro prev slide
  slideHotsnot.add(TweenMax.to($('#slide-success'),0.25,{opacity:0}));
  slideHotsnot.add(TweenMax.to($('#slide-success'),0,{immediateRender:false,css:{display:'none'}}));

  // intro
  slideHotsnot.add(TweenMax.to($('#slide-hotsnot'),0,{immediateRender:false,css:{display:'block'}}));
  slideHotsnot.add(TweenMax.from($('#slide-hotsnot .step1a'),0.5,{opacity:0,rotationY:-90,left:-400,ease:Expo.easeOut}),0.25);
  slideHotsnot.add(TweenMax.from($('#slide-hotsnot .step1b'),0.5,{opacity:0,rotationY:90,right:-400,ease:Expo.easeOut}),0.25);
  slideHotsnot.add(TweenMax.to($('body'),1,{backgroundColor:'#7d8a2e'}),0);
  tl.add(slideHotsnot);

  var slideHotsnot1 = new TimelineMax();
  slideHotsnot1.add(TweenMax.to($('#slide-hotsnot .step1a'),0.5,{opacity:0,rotationY:-90,right:-400,ease:Expo.easeOut}),0.25);
  slideHotsnot1.add(TweenMax.to($('#slide-hotsnot .step1b'),0.5,{opacity:0,rotationY:90,left:-400,ease:Expo.easeOut}),0.25);
  slideHotsnot1.add(TweenMax.from($('#slide-hotsnot .step2a'),0.5,{opacity:0,rotationY:-90,right:-400,ease:Expo.easeOut}),0.25);
  slideHotsnot1.add(TweenMax.from($('#slide-hotsnot .step2b'),0.5,{opacity:0,rotationY:90,left:-400,ease:Expo.easeOut}),0.25);
  slideHotsnot1.add(TweenMax.to($('body'),1,{backgroundColor:'#91aa9d'}),0);
  tl.add(slideHotsnot1);

  var slideHotsnot2 = new TimelineMax();
  slideHotsnot2.add(TweenMax.to($('#slide-hotsnot .step2a'),0.5,{opacity:0,rotationY:-90,right:-400,ease:Expo.easeOut}),0.25);
  slideHotsnot2.add(TweenMax.to($('#slide-hotsnot .step2b'),0.5,{opacity:0,rotationY:90,left:-400,ease:Expo.easeOut}),0.25);
  slideHotsnot2.add(TweenMax.from($('#slide-hotsnot .step3'),0.5,{opacity:0,rotationX:90,bottom:-400,ease:Expo.easeOut}),0.25);
  slideHotsnot2.add(TweenMax.to($('body'),1,{backgroundColor:'#c7d93d'}),0);
  tl.add(slideHotsnot2);

  var slideHotsnot3 = new TimelineMax();
  slideHotsnot3.add(TweenMax.to($('#slide-hotsnot .step3'),0.5,{opacity:0,rotationX:90,bottom:-400,ease:Expo.easeOut}),0.25);
  slideHotsnot3.add(TweenMax.from($('#slide-hotsnot .step4'),0.5,{opacity:0,rotationX:90,bottom:-400,ease:Expo.easeOut}),0.25);
  tl.add(slideHotsnot3);


  // SLIDE ======================================================================== //
  var slideSecrets = new TimelineMax();
  // outro prev slide
  slideSecrets.add(TweenMax.to($('#slide-hotsnot'),0.25,{opacity:0}));
  slideSecrets.add(TweenMax.to($('#slide-hotsnot'),0,{immediateRender:false,css:{display:'none'}}));

  // intro
  slideSecrets.add(TweenMax.to($('#slide-secrets'),0,{immediateRender:false,css:{display:'block'}}));
  slideSecrets.add(TweenMax.from($('#slide-secrets .title'),0.5,{opacity:0}));
  slideSecrets.add(TweenMax.from($('#slide-secrets .step1'),0.75,{opacity:0,rotationY:-90, transformOrigin:"50% bottom -500", perspective:500,ease:Expo.easeIn}));
  slideSecrets.add(TweenMax.to($('body'),1,{backgroundColor:'#e68500'}),0);
  tl.add(slideSecrets);

  var slideSecrets1 = new TimelineMax();
  slideSecrets1.add(TweenMax.from($('#slide-secrets .step2'),0.75,{opacity:0,rotationY:-90, transformOrigin:"50% bottom -500", perspective:500,ease:Expo.easeIn}));
  tl.add(slideSecrets1);

  var slideSecrets2 = new TimelineMax();
  slideSecrets2.add(TweenMax.from($('#slide-secrets .step3'),0.75,{opacity:0,rotationY:-90, transformOrigin:"50% bottom -500", perspective:500,ease:Expo.easeIn}));
  tl.add(slideSecrets2);


  // SLIDE ======================================================================== //
  var slideHero = new TimelineMax();
  // outro prev slide
  slideHero.add(TweenMax.to($('#slide-secrets'),0.25,{opacity:0}));
  slideHero.add(TweenMax.to($('#slide-secrets'),0,{immediateRender:false,css:{display:'none'}}));

  // intro
  slideHero.add(TweenMax.to($('#slide-hero'),0,{immediateRender:false,css:{display:'block'}}));
  slideHero.add(TweenMax.from($('#slide-hero'),0.5,{opacity:0,top:-30}));
  slideHero.add(TweenMax.from($('#slide-hero .octocats img').eq(0),1.5,{opacity:0,rotationX:90, transformOrigin:"50% top", perspective:2000,ease:Elastic.easeOut}),0.5);
  slideHero.add(TweenMax.from($('#slide-hero .octocats img').eq(1),1.5,{opacity:0,rotationX:90, transformOrigin:"50% top", perspective:2000,ease:Elastic.easeOut}),0.75);
  slideHero.add(TweenMax.from($('#slide-hero .octocats img').eq(2),1.5,{opacity:0,rotationX:90, transformOrigin:"50% top", perspective:2000,ease:Elastic.easeOut}),1);
  slideHero.add(TweenMax.from($('#slide-hero .octocats img').eq(3),1.5,{opacity:0,rotationX:90, transformOrigin:"50% top", perspective:2000,ease:Elastic.easeOut}),1.25);
  slideHero.add(TweenMax.from($('#slide-hero .octocats img').eq(4),1.5,{opacity:0,rotationX:90, transformOrigin:"50% top", perspective:2000,ease:Elastic.easeOut}),1.375);
  slideHero.add(TweenMax.to($('body'),1,{backgroundColor:'#d9f1f7'}),0);
  tl.add(slideHero);


  // SLIDE ======================================================================== //
  var slideHow = new TimelineMax();

  $('#slide-how .step').find('.step-a,.step-b').lettering();

  // outro prev slide
  slideHow.add(TweenMax.to($('#slide-hero'),0.25,{opacity:0,top:-100,ease:Expo.easeIn}));
  slideHow.add(TweenMax.to($('#slide-hero'),0,{immediateRender:false,css:{display:'none'}}));

  // intro
  slideHow.add(TweenMax.to($('#slide-how'),0,{immediateRender:false,css:{display:'block'}}));
  $('#slide-how .step').eq(0).find('.step-a span').css('position','relative').each(function(index) {
    slideHow.add(TweenMax.from($(this),0.25,{opacity:0,left:Math.random()*800-400,top:-50,ease:Back.easeOut}),0.25+index*0.025);
  });
  $('#slide-how .step').eq(0).find('.step-b span').css('position','relative').each(function(index) {
    slideHow.add(TweenMax.from($(this),0.25,{opacity:0,left:Math.random()*800-400,top:200,ease:Back.easeOut}),0.25+index*0.025);
  });
  tl.add(slideHow);

  var slideHow1 = new TimelineMax();
  slideHow1.add(TweenMax.to($('#slide-how .step').eq(0),0.25,{opacity:0}));
  $('#slide-how .step').eq(1).find('.step-a span').css('position','relative').each(function(index) {
    slideHow1.add(TweenMax.from($(this),0.25,{opacity:0,left:Math.random()*800-400,top:-50,ease:Back.easeOut}),0.25+index*0.025);
  });
  $('#slide-how .step').eq(1).find('.step-b span').css('position','relative').each(function(index) {
    slideHow1.add(TweenMax.from($(this),0.25,{opacity:0,left:Math.random()*800-400,top:200,ease:Back.easeOut}),0.25+index*0.025);
  });
  tl.add(slideHow1);

  var slideHow2 = new TimelineMax();
  slideHow2.add(TweenMax.to($('#slide-how .step').eq(1),0.25,{opacity:0}));
  $('#slide-how .step').eq(2).find('.step-a span').css('position','relative').each(function(index) {
    slideHow2.add(TweenMax.from($(this),0.25,{opacity:0,left:Math.random()*800-400,top:-50,ease:Back.easeOut}),0.25+index*0.025);
  });
  $('#slide-how .step').eq(2).find('.step-b span').css('position','relative').each(function(index) {
    slideHow2.add(TweenMax.from($(this),0.25,{opacity:0,left:Math.random()*800-400,top:200,ease:Back.easeOut}),0.25+index*0.025);
  });
  tl.add(slideHow2);

  var slideHow3 = new TimelineMax();
  slideHow3.add(TweenMax.to($('#slide-how .step').eq(2),0.25,{opacity:0}));
  $('#slide-how .step').eq(3).find('.step-a span').css('position','relative').each(function(index) {
    slideHow3.add(TweenMax.from($(this),0.25,{opacity:0,left:Math.random()*800-400,top:-50,ease:Back.easeOut}),0.25+index*0.025);
  });
  $('#slide-how .step').eq(3).find('.step-b span').css('position','relative').each(function(index) {
    slideHow3.add(TweenMax.from($(this),0.25,{opacity:0,left:Math.random()*800-400,top:200,ease:Back.easeOut}),0.25+index*0.025);
  });
  tl.add(slideHow3);

  var slideHow4 = new TimelineMax();
  slideHow4.add(TweenMax.to($('#slide-how .step').eq(3),0.25,{opacity:0}));
  $('#slide-how .step').eq(4).find('.step-a span').css('position','relative').each(function(index) {
    slideHow4.add(TweenMax.from($(this),0.25,{opacity:0,left:Math.random()*800-400,top:-50,ease:Back.easeOut}),0.25+index*0.025);
  });
  $('#slide-how .step').eq(4).find('.step-b span').css('position','relative').each(function(index) {
    slideHow4.add(TweenMax.from($(this),0.25,{opacity:0,left:Math.random()*800-400,top:200,ease:Back.easeOut}),0.25+index*0.025);
  });
  tl.add(slideHow4);


  // SLIDE ======================================================================== //
  var slideExample = new TimelineMax();
  // outro prev slide
  slideExample.add(TweenMax.to($('#slide-how'),0.25,{opacity:0}));
  slideExample.add(TweenMax.to($('#slide-how'),0,{immediateRender:false,css:{display:'none'}}));

  // intro
  slideExample.add(TweenMax.to($('#slide-example'),0,{immediateRender:false,css:{display:'block'}}));
  slideExample.add(TweenMax.from($('#slide-example'),1.5,{opacity:0,rotationY:720, transformOrigin:"50% 50%", perspective:1000, ease:Elastic.easeOut}));
  slideExample.add(TweenMax.to($('body'),1,{backgroundColor:'#99cee2'}),0);
  tl.add(slideExample);


  // SLIDE ======================================================================== //
  var slideDemo = new TimelineMax();
  // outro prev slide
  slideDemo.add(TweenMax.to($('#slide-example'),0.25,{opacity:0}));
  slideDemo.add(TweenMax.to($('#slide-example'),0,{immediateRender:false,css:{display:'none'}}));

  // intro
  slideDemo.add(TweenMax.to($('#slide-demo'),0,{immediateRender:false,css:{display:'block'}}));
  slideDemo.add(TweenMax.from($('#slide-demo'),0.25,{opacity:0,top:-600,ease:Expo.easeOut}));
  slideDemo.add(TweenMax.to($('body'),1,{backgroundColor:'#e9f2a0'}),0);
  tl.add(slideDemo);

  var slideDemo1 = new TimelineMax();
  slideDemo1.add(TweenMax.to($('#slide-demo .step').eq(0),0.125,{opacity:0,top:-600,ease:Expo.easeOut}));
  slideDemo1.add(TweenMax.from($('#slide-demo .step').eq(1),0.25,{opacity:0,top:-600,ease:Expo.easeOut}));
  tl.add(slideDemo1);

  var slideDemo2 = new TimelineMax();
  slideDemo2.add(TweenMax.to($('#slide-demo .step').eq(1),0.125,{opacity:0,top:-600,ease:Expo.easeOut}));
  slideDemo2.add(TweenMax.from($('#slide-demo .step').eq(2),0.25,{opacity:0,top:-600,ease:Expo.easeOut}));
  tl.add(slideDemo2);

  var slideDemo3 = new TimelineMax();
  slideDemo3.add(TweenMax.to($('#slide-demo .step').eq(2),0.125,{opacity:0,top:-600,ease:Expo.easeOut}));
  slideDemo3.add(TweenMax.from($('#slide-demo .step').eq(3),0.25,{opacity:0,top:-600,ease:Expo.easeOut}));
  tl.add(slideDemo3);

  var slideDemo4 = new TimelineMax();
  slideDemo4.add(TweenMax.to($('#slide-demo .step').eq(3),0.125,{opacity:0,top:-600,ease:Expo.easeOut}));
  slideDemo4.add(TweenMax.from($('#slide-demo .step').eq(4),0.25,{opacity:0,top:-600,ease:Expo.easeOut}));
  tl.add(slideDemo4);

  var slideDemo5 = new TimelineMax();
  slideDemo5.add(TweenMax.to($('#slide-demo .step').eq(4),0.125,{opacity:0,top:-600,ease:Expo.easeOut}));
  slideDemo5.add(TweenMax.from($('#slide-demo .step').eq(5),0.25,{opacity:0,top:-600,ease:Expo.easeOut}));
  tl.add(slideDemo5);


  // SLIDE ======================================================================== //
  var slideTips = new TimelineMax();
  // outro prev slide
  slideTips.add(TweenMax.to($('#slide-demo'),0.25,{opacity:0}));
  slideTips.add(TweenMax.to($('#slide-demo'),0,{immediateRender:false,css:{display:'none'}}));

  // intro
  slideTips.add(TweenMax.to($('#slide-tips'),0,{immediateRender:false,css:{display:'block'}}));
  slideTips.add(TweenMax.from($('#slide-tips'),0.25,{opacity:0}));
  slideTips.add(TweenMax.from($('#slide-tips .step').eq(0),0.25,{opacity:0,fontSize:'1px',ease:Quad.easeOut}));
  slideExample.add(TweenMax.to($('body'),1,{backgroundColor:'#3498db'}),0);
  tl.add(slideTips);

  var slideTips1 = new TimelineMax();
  slideTips1.add(TweenMax.to($('#slide-tips .step').eq(0),0.25,{opacity:0}));
  slideTips1.add(TweenMax.from($('#slide-tips .step').eq(1),0.25,{opacity:0,fontSize:'1px',ease:Quad.easeOut}));
  tl.add(slideTips1);

  var slideTips2 = new TimelineMax();
  slideTips2.add(TweenMax.to($('#slide-tips .step').eq(1),0.25,{opacity:0}));
  slideTips2.add(TweenMax.from($('#slide-tips .step').eq(2),0.25,{opacity:0,fontSize:'1px',ease:Quad.easeOut}));
  tl.add(slideTips2);


  // SLIDE ======================================================================== //
  var slideTimid = new TimelineMax();
  // outro prev slide
  slideTimid.add(TweenMax.to($('#slide-tips'),0.25,{opacity:0}));
  slideTimid.add(TweenMax.to($('#slide-tips'),0,{immediateRender:false,css:{display:'none'}}));

  // intro
  slideTimid.add(TweenMax.to($('#slide-timid'),0,{immediateRender:false,css:{display:'block'}}));
  slideTimid.add(TweenMax.from($('#slide-timid'),0.25,{opacity:0,top:-600,ease:Back.easeOut}));
  slideTimid.add(TweenMax.to($('body'),1,{backgroundColor:'#e74c3c'}),0);
  tl.add(slideTimid);

  var slideTimid1 = new TimelineMax();
  slideTimid1.add(TweenMax.to($('#slide-timid .step').eq(0),0.125,{opacity:0,top:-600}));
  slideTimid1.add(TweenMax.from($('#slide-timid .step').eq(1),0.25,{opacity:0,top:600,ease:Back.easeOut}));
  tl.add(slideTimid1);

  var slideTimid2 = new TimelineMax();
  slideTimid2.add(TweenMax.to($('#slide-timid .step').eq(1),0.125,{opacity:0,top:600}));
  slideTimid2.add(TweenMax.from($('#slide-timid .step').eq(2),0.25,{opacity:0,top:-600,ease:Back.easeOut}));
  tl.add(slideTimid2);


  // SLIDE ======================================================================== //
  var slideAction = new TimelineMax();
  // outro prev slide
  slideAction.add(TweenMax.to($('#slide-timid'),0.25,{opacity:0}));
  slideAction.add(TweenMax.to($('#slide-timid'),0,{immediateRender:false,css:{display:'none'}}));

  // intro
  slideAction.add(TweenMax.to($('#slide-action'),0,{immediateRender:false,css:{display:'block'}}));
  tl.add(slideAction);
  slideAction.add(TweenMax.to($('body'),1,{backgroundColor:'#08a689'}),0);

  var slideAction1 = new TimelineMax();
  slideAction1.add(TweenMax.from($('#slide-action .step').eq(0),0.5,{opacity:0, top:600, ease:Bounce.easeOut}));
  tl.add(slideAction1);

  var slideAction2 = new TimelineMax();
  slideAction2.add(TweenMax.from($('#slide-action .step').eq(1),0.5,{opacity:0, top:600, ease:Bounce.easeOut}));
  tl.add(slideAction2);

  var slideAction3 = new TimelineMax();
  slideAction3.add(TweenMax.from($('#slide-action .step').eq(2),0.5,{opacity:0, top:600, ease:Bounce.easeOut}));
  tl.add(slideAction3);

  var slideAction4 = new TimelineMax();
  slideAction4.add(TweenMax.from($('#slide-action .step').eq(3),0.5,{opacity:0, top:600, ease:Bounce.easeOut}));
  tl.add(slideAction4);


  // SLIDE ======================================================================== //
  var slideEnd = new TimelineMax();
  // outro prev slide
  slideEnd.add(TweenMax.to($('#slide-action'),0.25,{opacity:0}));
  slideEnd.add(TweenMax.to($('#slide-action'),0,{immediateRender:false,css:{display:'none'}}));

  // intro
  $('#slide-end h1').lettering();
  slideEnd.add(TweenMax.to($('#slide-end'),0,{immediateRender:false,css:{display:'block'}}));
  $('#slide-end span').each(function(index) {
    slideEnd.add(TweenMax.from($(this).css('position','relative'),0.5,{opacity:0,top:Math.random()*800-400,left:Math.random()*800-400,ease:Expo.easeInOut}),0.5+(0.05*index*Math.random()));
  });

  tl.add(slideEnd);

  // SLIDE ======================================================================== //
  var slideAppendix = new TimelineMax();
  // outro prev slide
  slideAppendix.add(TweenMax.to($('#slide-end'),0.25,{opacity:0}));
  slideAppendix.add(TweenMax.to($('#slide-end'),0,{immediateRender:false,css:{display:'none'}}));

  // intro
  slideAppendix.add(TweenMax.to($('#slide-appendix'),0,{immediateRender:false,css:{display:'block'}}));
  slideAppendix.add(TweenMax.from($('#slide-appendix'),0.5,{opacity:0}));

  tl.add(slideAppendix);


  // send the timeline into TweenDeck - DONE!
  $.tweendeck(tl);


}(jQuery));
