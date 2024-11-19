function locomotiveanimation(){
  gsap.registerPlugin(ScrollTrigger);
  // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll
  const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
  });
  // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
  locoScroll.on("scroll", ScrollTrigger.update);
  // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
  ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
      return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
      return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
  });
  // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
  ScrollTrigger.refresh();

}
// This is loader part :-> 
function loaderAnimation(){
  var t1 = gsap.timeline();
  t1.from("#line1-part1",{
    opacity:0,
    onStart: function(){
      var h5 = document.querySelector("#line1-part1 h5");
      var count = 0;
      setInterval(function(){
        if(count<100){
          count++;
          h5.innerHTML = count;
        } else count = 100;
      },20); 
    }
  })
  t1.from(".line h1",{
    y:150,
    stagger:0.25,
    duration:0.5,
    delay:0.1,
  })
  t1.to(".line h2",{
    animationName: "anime",
    opacity:1,
  })
  t1.from("#lines h5",{
    opacity:0,
  })
  t1.to("#loader",{
    opacity:0,
    duration:0.2,
    delay:1,
  })
  t1.from("#page1",{
    delay:0.1,
    y:1600,
    // opacity:0,
    duration:0.5,
    ease:Power4,
  })
  t1.to("#loader",{
    display:"none",
  })
  t1.from("#nav",{
    opacity:0,
  })
  t1.from(".hero",{
    opacity:0,
    y:80,
    stagger:0.1,
    duration:0.3,
    delay:0.1,
  })
} 
// this is crsr part :
function cursorAnimation(){
  Shery.mouseFollower({
    skew:true,
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration:0.5,
  })
  // this is for make magnet :
  Shery.makeMagnet(".svgs #svgs1");
 Shery.makeMagnet("#nav-part2 h4");
 //  video ke nadr ka cursur
  var videocontainer = document.querySelector("#video-container");
  var video = document.querySelector("#video-container video");
  videocontainer.addEventListener("mouseenter",function(){
    videocontainer.addEventListener("mousemove",function(dets){
      gsap.to(".mousefollower",{
        opacity:0,
      })
      gsap.to("#crsr2",{
        left:dets.x - 570,
        y:dets.y - 300,
      })
    })
  })
  videocontainer.addEventListener("mouseleave",function(){
    gsap.to(".mousefollower",{
      opacity:1,
    })
    gsap.to("#crsr2",{
      left:"67%",
      top:"-15%",
    })
  })
  // video play and pause ka code :
  var flag = 0;
  videocontainer.addEventListener("click",function(){
    if(flag == 0){
      video.play()
      video.style.opacity = 1
      document.querySelector("#crsr2").innerHTML = `<i class="ri-pause-line"></i>`
      gsap.to("#crsr2",{
        scale:0.5,
      })
      flag = 1;
    } else{
      video.pause()
      video.style.opacity = 0
      document.querySelector("#crsr2").innerHTML = `<i class="ri-play-fill"></i>`
      gsap.to("#crsr2",{
        scale:1,
      })
      flag = 0;
    }
  })
}
function sheryAnimation(){
  Shery.imageEffect(".image-div", {
    style: 5 /*OR 5 for different variant */,
    // debug: true,
    config:{"a":{"value":2,"range":[0,30]},"b":{"value":0.75,"range":[-1,1]},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":0.7272663877266388},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":true},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.3,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":true},"onMouse":{"value":0},"noise_speed":{"value":0.66,"range":[0,10]},"metaball":{"value":0.5,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0,"range":[0,0.1]},"noise_height":{"value":0.43,"range":[0,2]},"noise_scale":{"value":8,"range":[0,100]}},
    gooey:true,
  });
}

locomotiveanimation();
loaderAnimation();
cursorAnimation();
sheryAnimation();

// ye mera flag ke liye code hai
document.addEventListener("mousemove",function(dets){
  gsap.to("#flag",{
    x:dets.x,
    y:dets.y,
  })
})
document.querySelector("#hero2").addEventListener("mouseenter",function(){
  gsap.to("#flag",{
    opacity:1,
  })
})
document.querySelector("#hero2").addEventListener("mouseleave",function(){
  gsap.to("#flag",{
    opacity:0,
  })
})

// ye mera page3-circle4 ke liye hai
var circle4 = document.querySelector(".page3-circle4");
circle4.addEventListener("mouseenter",function(){
  circle4.style.height = "20vw"
  circle4.style.width = "20vw"
})
circle4.addEventListener("mouseleave",function(){
  circle4.style.height = "23vw"
  circle4.style.width = "23vw"
})






// this part for textillate.js cdn :
// var text = document.querySelector("#footer h1")
// text.addEventListener("mouseenter",function(){
//   text.style.fontStyle = "italic";
//   text.style.fontFamily = "silk serif"
  // text.style.color = "transparent"
// })
// gsap.from("#footer h1",{
//   opacity:0,
//   // y:50,
//   delay:10,
//   duration:1,
//   onStart:function(){
//       $('#footer h1').textillate({ in: { effect: 'fadeIn' } });
//   }
// })
// var text = document.querySelector("#footer h1")
// // Mouse enter event
// text.addEventListener("mouseenter", function() {
//   // text.style.fontStyle = "italic";
//   gsap.from("text",{
//     // opacity:0,
//     // y:50,
//     delay:0.5,
//     duration:1,
//     onStart:function(){
//         $('text').textillate({ in: { effect: 'fadeIn' } });
//     }
//   })
// });

// // Mouse leave event
// // text.addEventListener("mouseleave", function() {
// //   text.style.fontStyle = "normal";
// // });








