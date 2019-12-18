var slider = document.getElementById(`slider-item`),
    sliderItems = document.getElementsByClassName(`slider-img`),
    currSlide = 0;

function currSlideController(n){
    document.getElementById(`prev`).classList.remove(`disabled`);
    document.getElementById(`next`).classList.remove(`disabled`);
    if (n == 0) {
        document.getElementById(`prev`).classList.add(`disabled`);
    } else if (n == sliderItems.length-1) {
        document.getElementById(`next`).classList.add(`disabled`);
    }
}

currSlideController(currSlide);

function next()
{
    if(currSlide!=sliderItems.length-1)
        {
            slider.scrollTo({
                left: sliderItems[++currSlide].getBoundingClientRect().left - sliderItems[0].getBoundingClientRect().left+1,
                behavior: "smooth"
                });
            currSlideController(currSlide);
        }
}

function prev()
{
    if(currSlide!=0)
        {
            slider.scrollTo({
                left: sliderItems[--currSlide].getBoundingClientRect().left - sliderItems[0].getBoundingClientRect().left+1,
                behavior: "smooth"
                });
            currSlideController(currSlide);
        }
}

window.addEventListener("resize",()=>{
    slider.scrollTo({
        left: sliderItems[currSlide].getBoundingClientRect().left - sliderItems[0].getBoundingClientRect().left+1
        });
})