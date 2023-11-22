let equipmentSection = document.querySelector(".equipment-section");
let swiperWrapperEl = document.querySelector(".equipment-section__slider .swiper-wrapper")
let equipmentEls = document.querySelectorAll(".equipment-section__slider .swiper-slide")

function getScrollAmount() {
	let swiperWidth = document.querySelector(".equipment-section__slider .swiper").offsetWidth;
    let wrapperWidth = 0

    for (let i = 0; i < equipmentEls.length; i++) {
        wrapperWidth += equipmentEls[i].offsetWidth
    }
    
    wrapperWidth += 16 * (equipmentEls.length - 1)

	return swiperWidth - wrapperWidth
}

if (equipmentSection) {
    let tween = gsap.to(swiperWrapperEl, {
        x: getScrollAmount,
        duration: 3,
        ease: "none",
    });
    
    let scrollTriggerInstance;
    
    scrollTriggerInstance = ScrollTrigger.create({
        trigger: ".equipment-section",
        start: "bottom bottom",
        end: () => `+=${getScrollAmount() * -1}`,
        ease: "none",
        pin: true,
        animation: tween,
        scrub: 1,
        invalidateOnRefresh: true,
        markers: false,
    })
    window.addEventListener("resize", () => scrollTriggerInstance.refresh())
}

let typeSplit = new SplitType(".section__title",{
    types: "words, chars",
    tagName: "span"
});
  
const sectionTitleEls = gsap.utils.toArray(".section__title")
  
sectionTitleEls.forEach(sectionTitleEl => {
    let chars = sectionTitleEl.querySelectorAll(".char")
  
    gsap.from(chars, {
        scrollTrigger: {
            trigger: sectionTitleEl,
            start: "top 80%"
        },
        yPercent: 100,
        duration: 0.5,
        ease: "power1.out",
        stagger: {
            amount: 0.4
        }
    })
})