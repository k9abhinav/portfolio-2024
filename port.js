// document.addEventListener('DOMContentLoaded', function () {
//     const locoScroll = new LocomotiveScroll({
//         el: document.querySelector('[data-scroll-container]'),
//         smooth: true
//         // Add more options as needed
//     });
// });

// var t1 = gsap.timeline({scrollTrigger:{
//     trigger:".proj-main-cont",
//     markers:true,
//     start:"80% 50%",
//     end:"100% 50%",
//     scrub:2,
//     // pin:true,
//     // smooth:true
// }})
// t1.to(".projects",{top:'-60%',},'a')
// t1.to("#proj-card-1",{top:'30%',},'a')
// t1.to("#proj-card-2",{top:'130%',},'a')
// t1.to("#proj-card-2",{top:'32%',},'b')
// t1.to("#proj-card-1",{width:"65%",height:"65vh"},'b')
// t1.to("#proj-card-3",{top:"130%"},'b')
// t1.to("#proj-card-3",{top:"45%"},'c')
// t1.to("#proj-card-2",{width:"70%",height:"70vh"},'c')

gsap.from(".about .center-about .one",{
    opacity:0,
    x:-1000,
    smooth:true,

    scrollTrigger:{
    trigger:".about .center-about .one",
    scroller:"body",
    start:"top 100%",
    end:"top 20%",
    scrub:2,
    // markers:true,
}})
gsap.from(".about .center-about .two",{
    opacity:0,
    x:1000,
    smooth:true,

    scrollTrigger:{
    trigger:".about .center-about .two",
    scroller:"body",
    start:"top 110%",
    end:"top 50%",
    scrub:2,
    markers:true,
}})