TweenMax.from(".roll", 2,{
    y:700,
    ease:Expo.easeInOut
})
TweenMax.to(".roll", 2,{
    y:-700,
    ease:Expo.easeInOut
})
TweenMax.from(".logo h2", 2,{
    delay:1,
    y:-50,
    ease:Expo.easeInOut
})
TweenMax.to(".logo h2", 2,{
    delay:1,
    y:0,
    ease:Expo.easeInOut
})

TweenMax.staggerFrom(".menu ul li", 2, {
    delay:1,
    y: -50,
    ease: Expo.easeInOut

}, 0.20);

TweenMax.from(".content p", 2,{
    opacity: 0,
    delay: 1.3,
    x:-50,
    ease:Expo.easeInOut
})
TweenMax.to(".content p", 2,{
    opacity: 1,
    delay: 1.3,
    x:0,
    ease:Expo.easeInOut
})


TweenMax.staggerFrom(".content h2 ", 2, {
    delay: 1.5,
    opacity: 0,
    x: -50,
    ease: Expo.easeInOut

}, 0.20);
TweenMax.staggerFrom(".showcase img ", 3, {
    delay: 1.7,
    opacity: 0,
    x: -50,
    ease: Expo.easeInOut

}, 0.20);
TweenMax.staggerFrom(".buttons button ", 3, {
    delay: 2,
    opacity: 0,
    x: -50,
    ease: Expo.easeInOut

}, 0.30);
// TweenMax.staggerFrom(".content h ", 2, {
//     delay: 3,
//     opacity: 0,
//     x: -50,
//     ease: Expo.easeInOut

// }, 0.20);


TweenMax.from(".bag img ", 2,{
    delay: 3,
    opacity:0,
  
   
    scale: 0,
    ease:Power3.easeInOut
})
TweenMax.to(".bag img", 2,{
    delay: 3,
    opacity: 1,
  
   
    scale: 1,
    ease:Power3.easeInOut
})