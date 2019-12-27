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

function addSliderButtons() {
        for (let i = 0; i < sliderItems.length; i++) {
            let div = document.createElement('div');
            if (i==0){
                div.className = `slider-num-button current`;
            } else {
                div.className = `slider-num-button`;
            }
            div.id = `slider-num-button__`+i;
            document.getElementById(`slider-num-buttons__01`).append(div);
        }
}

function sliderNumButtonsActiveControll(c){
    for (let j = 0; j < sliderNumButtons.length; j++) {
        document.getElementById(`slider-num-button__`+j).classList.remove(`current`);
    }
    document.getElementById(`slider-num-button__`+c).classList.add(`current`);
}

addSliderButtons();
currSlideController(currSlide);

let sliderNumButtons = document.getElementsByClassName(`slider-num-button`);

document.getElementById(`slider-num-buttons__01`).onclick = ()=>{
    let target = event.target;
    for (let i = 0; i < sliderItems.length; i++) {
        if (target.id == `slider-num-button__`+i) {
            currSlide = i;
            sliderNumButtonsActiveControll(currSlide);
            slider.scrollTo({
                left: sliderItems[currSlide].getBoundingClientRect().left - sliderItems[0].getBoundingClientRect().left+1,
                behavior: "smooth",
                });
            currSlideController(currSlide);
        }
    }
}

var sliderTouch=0;

document.getElementById(`slider-item`).addEventListener(`touchstart`, (e)=>{
    sliderTouch = e.touches[0].clientX;
}, {passive: true})

document.getElementById(`slider-item`).addEventListener(`touchend`, (e)=>{
    if (e.changedTouches[0].clientX > sliderTouch){
        prev();
    } else if(e.changedTouches[length].clientX < sliderTouch){
        next();
    }
    return false
}, {passive: true}  )

function next()
{
    if(currSlide!=sliderItems.length-1)
        {
            slider.scrollTo({
                left: sliderItems[++currSlide].getBoundingClientRect().left - sliderItems[0].getBoundingClientRect().left+1,
                behavior: "smooth"
                });
            currSlideController(currSlide);
            sliderNumButtonsActiveControll(currSlide);
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
            sliderNumButtonsActiveControll(currSlide);
        }
}

window.addEventListener("resize",()=>{
    slider.scrollTo({
        left: sliderItems[currSlide].getBoundingClientRect().left - sliderItems[0].getBoundingClientRect().left+1
        });
})


window.addEventListener("message", receiveMessage, false);

function receiveMessage(event)
{
    return document.body.offsetHeight;
}