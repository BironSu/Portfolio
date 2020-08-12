
// MouseOver Grid
const portfolioItems = document.querySelectorAll('.contact-item-wrapper');
portfolioItems.forEach(portfolioItem => {
    portfolioItem.addEventListener('mouseover', ()=> {
        portfolioItem.childNodes[1].classList.add('img-darken');
    })
    portfolioItem.addEventListener('mouseout', ()=> {
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

// Smooth Scrolling on Navigation
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
// Bind to scroll
// Cache selectors
var lastId,
    topMenu = $("#top-menu"),
    topMenuHeight = topMenu.outerHeight()+15,
    // All list items
    menuItems = topMenu.find("a"),
    // Anchors corresponding to menu items
    scrollItems = menuItems.map(function(){
      var item = $($(this).attr("href"));
      if (item.length) { return item; }
});
// Adding Active Link
var previousLink;
menuItems.click(function(e){
    var href = $(this).attr("href"),
        offsetTop = href === "#" ? 0 : $(href).offset();
    if (previousLink !== undefined) {
        previousLink.classList.remove("active-nav-link");
    }
    previousLink = this;
    this.classList.add("active-nav-link");
    $('html, body').stop().animate({ 
        scrollTop: offsetTop
    }, 300);
    e.preventDefault();
});

function showDescription(button){
    var x = document.getElementById("project1-description");
    var y = document.getElementById("project2-description");
    var z = document.getElementById("project3-description");
    if (button == "Button1"){
        turnOn(x);
        turnOff(y,z);
    } else if (button == "Button2") {
        turnOn(y);
        turnOff(x,z);
    } else {
       turnOn(z);
       turnOff(x,y);
    }
}
function turnOn(desc){
    desc.style.visibility = "visible";
    desc.style.opacity = "1";
}
function turnOff(desc1, desc2){
    desc1.style.visibility = "hidden"
    desc1.style.opacity = "0";

    desc2.style.visibility = "hidden"
    desc2.style.opacity = "0";
}