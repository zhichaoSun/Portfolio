gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

var container = document.querySelector("#scroll-container");

var height;
function setHeight() {
  height = container.clientHeight;
  document.body.style.height = height + "px";
}
ScrollTrigger.addEventListener("refreshInit", setHeight);

gsap.to(container, {
  y: () => -(height - document.documentElement.clientHeight),
  ease: "none",
  scrollTrigger: {
    trigger: document.body,
    start: "top top",
    end: "bottom bottom",
    scrub: 1,
    invalidateOnRefresh: true
  }
});

document.querySelectorAll('.nav a').forEach((e) => {
  const target = e.getAttribute('href');
  const targetEl = document.querySelector(target);
  const targetRect = targetEl.getBoundingClientRect();
  
  e.addEventListener('click', (e) => {
    e.preventDefault();
      
    gsap.to(window, {
      scrollTo: targetRect.top,
      ease: "power4",
      onComplete: updateDocument, 
      onCompleteParams: [targetRect.top]
    });
  });
  
});

// keep scrollbar position in sync
const updateDocument = (offset) => {
  console.log(offset);
  //document.documentElement.scrollTop = document.body.scrollTop = offset;
}