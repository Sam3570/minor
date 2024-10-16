function init() {
    gsap.registerPlugin(ScrollTrigger);


const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true
});
locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy(".main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  },
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
});

ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

ScrollTrigger.refresh();

}
init()
let cursor = document.querySelector(".cursor")
document.querySelector(".main").addEventListener("mousemove",(dets)=>{
  cursor.style.left = dets.x+"px"
  cursor.style.top = dets.y+"px"
})

document.querySelector(".video").addEventListener("mouseenter",()=>{
  console.log("video");
  cursor.classList.add("play")
})
document.querySelector(".video").addEventListener("mouseleave",()=>{
  console.log("leave");
  cursor.classList.remove("play")
  cursor.classList.add("cursor")
})

let tl = gsap.timeline({
    scrollTrigger:{
        trigger:".page1 h1",
        scroller:".main",
        markers:true,
        start:"top 35%",
        end:"top 0",
        scrub:3
    }   
})



tl.to(".page1 h1",{
    x:-80,
},"anim")

tl.to(".page1 h2",{
    x:80,
},"anim")



tl.to(".page1 video",{
    width:"90%"
},"anim")

let tl2 = gsap.timeline({
  scrollTrigger:{
      trigger:".page1 h1",
      scroller:".main",
      markers:true,
      start:"top -120%",
      end:"top -130%",
      scrub:3
  }   
})
tl2.to(".main",{
  backgroundColor:"white",
  
})