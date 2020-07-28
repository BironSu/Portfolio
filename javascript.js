
const portfolioItems = document.querySelectorAll('.contact-item-wrapper');
portfolioItems.forEach(portfolioItem => {
    portfolioItem.addEventListener('mouseover', ()=> {
        console.log(portfolioItem.childNodes[1].classList);
        portfolioItem.childNodes[1].classList.add('img-darken');
    })
    portfolioItem.addEventListener('mouseout', ()=> {
        console.log(portfolioItem.childNodes[1].classList);
        portfolioItem.childNodes[1].classList.remove('img-darken');
    })
})
// Intro Text Fade On Scroll
$(window).scroll(function() {
    var scrollTop = $(this).scrollTop();
    $('.intro-center-text').css({
        opacity: function() {
            opacity = 1 - (scrollTop*0.003);
            return opacity;
        }
    })
});
// Smooth Scrolling
window.smoothScroll = function(target) {
    var scrollContainer = target;
    do { //find scroll container
        scrollContainer = scrollContainer.parentNode;
        if (!scrollContainer) return;
        scrollContainer.scrollTop += 1;
    } while (scrollContainer.scrollTop == 0);

    var targetY = -90
    do { //find the top of target relatively to the container
        if (target == scrollContainer) break;
        targetY += target.offsetTop;
    } while (target = target.offsetParent);

    scroll = function(c, a, b, i) {
        i++; if (i > 30) return;
        c.scrollTop = a + (b - a) / 30 * i;
        setTimeout(function(){ scroll(c, a, b, i); }, 20);
    }
    // start scrolling
    scroll(scrollContainer, scrollContainer.scrollTop, targetY, 0);
}