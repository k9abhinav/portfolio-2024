

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
    // markers:true,
}})

gsap.from(".down-nav ul a",{
    y:-30,
    opacity:0,
    duration:0.8,
    stagger:0.8,
    ease:"none"
})
const cursor=document.querySelector(".CURSOR");
window.addEventListener("mousemove",function(dets) {
    gsap.to(cursor,{
        x:dets.x,
        y:dets.y,
        duration:1,
        zIndex:100,
        ease:"back.out"
    })
})

function projectsSections() {
    gsap.to(".slide",{
        scrollTrigger:{
            trigger:".projects-container",
            start:"top top",
            end:"bottom bottom",
            scrub:2,
            // markers:true,
        },
        xPercent:-300,
        ease:Power4
    })
}
projectsSections();


gsap.from(".all-skills div", {
    scrollTrigger: {
        trigger: ".all-skills",
        start: "top 80%", 
        end: "bottom 20%", 
        // toggleActions: "play none none none"
        scrub:true
    },
    opacity: 0,
    y: 50,
    duration: 1,
    stagger: 0.2,
    ease: "power2.out"
});

