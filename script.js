




function revealToSpan(){
    document.querySelectorAll(".reveal")
.forEach(function(elem){
   let parent =  document.createElement("span");
   let child =  document.createElement("span");

   parent.classList.add("parent");
   child.classList.add("child");

    child.innerHTML = elem.innerHTML;
    parent.appendChild(child);

    elem.innerHTML = "";
    elem.appendChild(parent);

})
}

revealToSpan();



var tl = gsap.timeline();
tl.from(".child span",{
  x: 100,
  duration : 1 ,
  stagger : .2,
  opacity : 0,
  delay: 1,
  ease : Power3.easeInOut
})



tl.to(".parent .child",{
  y: "-100%",
  duration : 1 ,
  delay: 1,
  ease : Circ.easeInOut
})

tl.to("#loader",{
  height : 0,
  duration : 1 ,
  ease : Circ.easeInOut
 
})
tl.to("#green",{
  height : "100%",
  top: 0,
  duration : 1 ,
  delay: -.8,
  ease : Circ.easeInOut
 
})
tl.to("#green",{
  height : 0,
  duration : 1 ,
  delay: -.5,
  ease : Circ.easeInOut

 
})

tl.from(".row h1 , .row2 h1 , .row .text", {
  y: 100,
  stagger : .2,
  scale:1,
  opacity : 0,
  scrub:2,
  ease : Power3.easeInOut
})
tl.from(".row2 h3",{
  x: -100,
  stagger : .2,
  opacity : 0,
  ease : Power3.easeInOut
})



Shery.makeMagnet(".row .text" /* Element to target.*/, {
  //Parameters are optional.
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  duration: 1,
});

Shery.makeMagnet("#imagery #imgleft h1 span" /* Element to target.*/, {
  //Parameters are optional.
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  duration: 1,
});

Shery.makeMagnet("#work svg" /* Element to target.*/, {
  //Parameters are optional.
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  duration: 1,
});



Shery.imageEffect(".cnt img", {
    style: 4,
    debug: false,
    config:
        {"uColor":{"value":false},"uSpeed":{"value":0.6,"range":[0.1,1],"rangep":[1,10]},"uAmplitude":{"value":1.5,"range":[0,5]},"uFrequency":{"value":3.5,"range":[0,10]},"geoVertex":{"range":[1,64],"value":32},"zindex":{"value":"96999","range":[-9999999,9999999]},"aspect":{"value":0.7500000188606066},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":false},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.15,"range":[1,5]},"scrollType":{"value":0},"noEffectGooey":{"value":true},"onMouse":{"value":0},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.2,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0.002,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}}
    
  });
  Shery.imageEffect("#workthree .img1 img", {
    style: 4,
    debug: false,
    config:
        {"uColor":{"value":false},"uSpeed":{"value":0.6,"range":[0.1,1],"rangep":[1,10]},"uAmplitude":{"value":1.5,"range":[0,5]},"uFrequency":{"value":3.5,"range":[0,10]},"geoVertex":{"range":[1,64],"value":32},"zindex":{"value":"96999","range":[-9999999,9999999]},"aspect":{"value":0.7500000188606066},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":false},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.15,"range":[1,5]},"scrollType":{"value":0},"noEffectGooey":{"value":true},"onMouse":{"value":0},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.2,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0.002,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}}
    
  });







  Shery.imageEffect(".cnt2 video", {
    style: 3 /*OR 5 for different variant */,
    debug: false,
    config:{"uFrequencyX":{"value":79.39,"range":[0,100]},"uFrequencyY":{"value":32.06,"range":[0,100]},"uFrequencyZ":{"value":9.16,"range":[0,100]},"geoVertex":{"range":[1,64],"value":23.6},"zindex":{"value":"996999","range":[-9999999,9999999]},"aspect":{"value":0.5660439149777102},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":false},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":false},"maskVal":{"value":1,"range":[1,5]},"scrollType":{"value":0},"noEffectGooey":{"value":true},"onMouse":{"value":1},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.2,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0.002,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}}
    
  });









