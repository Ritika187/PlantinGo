/*function locomotiveAnimation(){
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

}*/
function Navanimation(){
gsap.to("#nav-2 #link",{
    transform:"translateY(-100%)",
    opacity:0,
    scrollTrigger:{
        trigger:".pg-1",
        scroller:"body",
        start:"top 0",
        end:"top -5%",
        scrub:true
    }
    
})
}
Navanimation();

function loadinganimation(){
gsap.from(".pg-1-content h2",{
    y:100,
    opacity:0,
    delay:0.5,
     duration:0.9,
     stagger:0.3
})
gsap.from(".pg-1-content h1",{
    y:100,
    opacity:0,
    delay:0.5,
    duration:0.9,
    stagger:0.3
    
})
gsap.from(".pg-1-para p",{
    y:100,
    opacity:0,
    delay:0.5,
    duration:0.9,
    stagger:0.3
})
gsap.from(".pg-1-flowers",{
    y:100,
    opacity:0,
    delay:0.5,
    duration:0.9,
    stagger:0.3
})
}
loadinganimation();




const accordionItems = document.querySelectorAll('.questions_item')

accordionItems.forEach((item) =>{
    const accordionHeader = item.querySelector('.questions_header')

    accordionHeader.addEventListener('click', () => {
        const openItem = document.querySelector('.accordion-open')

         toggleItem(item)

         if(openItem && openItem!== item){
            toggleItem(openItem)
         }
    })
})

const toggleItem = (item) => {
    const accordionContent = item.querySelector('.questions_content')
    
    if(item.classList.contains('accordion-open')){
        accordionContent.removeAttribute('style')
        item.classList.remove('accordion-open')
    }
    else{
        accordionContent.style.height = accordionContent.scrollHeight + 'px'
        item.classList.add('accordion-open')
    }
    
}