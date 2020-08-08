
// MouseOver Grid
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
    topMenu = $("#nav-menu"),
    topMenuHeight = topMenu.outerHeight()+15,
    // All list items
    menuItems = topMenu.find("a"),
    // Anchors corresponding to menu items
    scrollItems = menuItems.map(function(){
      var item = $($(this).attr("href"));
      if (item.length) { return item; }
    });
// Bind click handler to menu items
// so we can get a fancy scroll animation
menuItems.click(function(e){
    var href = $(this).attr("href"),
        offsetTop = href === "#" ? 0 : $(href).offset().top-topMenuHeight+1;
    $('html, body').stop().animate({ 
        scrollTop: offsetTop
    }, 300);
    e.preventDefault();
  });
// Bind to scroll
$(window).scroll(function(){
   // Get container scroll position
   var fromTop = $(this).scrollTop()+topMenuHeight;
   
   // Get id of current scroll item
   var cur = scrollItems.map(function(){
     if ($(this).offset().top < fromTop)
       return this;
   });
   // Get the id of the current element
   cur = cur[cur.length-1];
   var id = cur && cur.length ? cur[0].id : "";
   
   if (lastId !== id) {
       lastId = id;
       // Set/remove active class
       menuItems
         .parent().removeClass("active-nav-link")
         .end().filter("[href='#"+id+"']").parent().addClass("active-nav-link");
   }                   
});

// PROJECT DESCRIPTION VISIBILITY
$('body').on("click touchstart", "#Button2, #Button3", function(e){
    console.log("Hello");
 });
 $('body').on("click touchstart", "#Button1", function(e){
    var x = document.getElementById("project1-description");
    console.log(x);
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
 });
