const sections = document.querySelectorAll(".tab")
console.log(sections.length)

const buttons = document.querySelectorAll(".tabbar-button")

buttons.forEach((btn) => {
    btn.addEventListener('click', event => {
        sections.forEach((section) => {
            if(section.dataset.id == btn.dataset.buttonId)
            {
                section.classList.remove("hidden")
            }
            else
            {
                section.classList.add("hidden")
            }
        })
    })
})

const carouselimages = document.querySelectorAll(".section-carousel-img")
const carouselbtns = document.querySelectorAll(".section-carousel-btn")

const isVisible = function (ele, container) {
    const eleLeft = ele.offsetLeft
    const eleRight = eleLeft + ele.clientWidth;

    const containerLeft = container.scrollLeft;
    const containerRight = containerLeft + container.clientWidth;

    // The element is fully visible in the container
    return (
        (eleLeft >= containerLeft && eleRight <= containerRight) 
        /*||
        // Some part of the element is visible in the container
        (eleLeft < containerLeft && containerLeft < eleRight) ||
        (eleLeft < containerRight && containerRight < eleRight)
        */
    );
};

carousel = document.querySelector(".section-carousel")

let visibleImage = carouselimages.item(0)

carousel.addEventListener('scroll', event => {
    console.log("Scrolled")
    carouselimages.forEach((img) => {
        if(isVisible(img, carousel)){
            visibleImage = img;
            console.log(img.dataset.picId)
        }
    })
})

carouselbtns.forEach((btn) => {
    btn.addEventListener('click', event => {
        imageArray = Array.from(carouselimages)
        if(btn.dataset.dir=="right")
        {
            let i = imageArray.indexOf(visibleImage)
            visibleImage = imageArray[(i+1)%imageArray.length]
            visibleImage.scrollIntoView({behavior: "smooth", block: "center"})
        }
        if(btn.dataset.dir=="left")
        {
            let i = imageArray.indexOf(visibleImage) == 0 ? imageArray.length:  imageArray.indexOf(visibleImage)
            visibleImage = imageArray[(i-1)%imageArray.length]
            visibleImage.scrollIntoView({behavior: "smooth", block: "center"})
        }
    })
})