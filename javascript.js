var previousLink;

const portfolioItems = document.querySelectorAll('.contact-item-wrapper');

var topMenu = $("#top-menu"),
    topMenuHeight = topMenu.outerHeight() + 15,
    // All list items
    menuItems = topMenu.find("a"),
    // Anchors corresponding to menu items
    scrollItems = menuItems.map(function () {
        var item = $($(this).attr("href"));
        if (item.length) { return item; }
    });

portfolioItems.forEach(portfolioItem => {
    portfolioItem.addEventListener('mouseover', () => {
        portfolioItem.childNodes[1].classList.add('img-darken');
    })
    portfolioItem.addEventListener('mouseout', () => {
        portfolioItem.childNodes[1].classList.remove('img-darken');
    })
})

const projectLink = menuItems.filter(function (_, menuItem) {
    return menuItem.getAttribute('href') === '#project';
});
const aboutLink = menuItems.filter(function (_, menuItem) {
    return menuItem.getAttribute('href') === '#about';
});
const contactLink = menuItems.filter(function (_, menuItem) {
    return menuItem.getAttribute('href') === '#contact';
});
let headers = {
    projectsID: document.getElementById("project-top"),
    aboutID: document.getElementById("about-top"),
    contactID: document.getElementById("contact-top"),
    homeID: document.getElementById("intro-top")
};

var isInViewport = function (elem) {
    var bounding = elem.getBoundingClientRect();
    return (
        bounding.top >= 0 &&
        bounding.left >= 0 &&
        bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
};

$(window).scroll(function () {
    var scrollTop = $(this).scrollTop();
    $('.intro-center-text').css({
        opacity: function () {
            opacity = 1 - (scrollTop * 0.003);
            return opacity;
        }
    })
    const projectLink = menuItems.filter(function (_, menuItem) {
        return menuItem.getAttribute('href') === '#project';
    });
    const aboutLink = menuItems.filter(function (_, menuItem) {
        return menuItem.getAttribute('href') === '#about';
    });
    const contactLink = menuItems.filter(function (_, menuItem) {
        return menuItem.getAttribute('href') === '#contact';
    });
    const homeLink = menuItems.filter(function (_, menuItem) {
        return menuItem.getAttribute('href') === '#home';
    });
    if (isInViewport(headers.projectsID)) {
        projectLink[0].classList.add("active-nav-link");
        aboutLink[0].classList.remove("active-nav-link");
        contactLink[0].classList.remove("active-nav-link");
    } else if (isInViewport(headers.aboutID)) {
        aboutLink[0].classList.add("active-nav-link");
        projectLink[0].classList.remove("active-nav-link");
        contactLink[0].classList.remove("active-nav-link");
    } else if (isInViewport(headers.contactID)) {
        contactLink[0].classList.add("active-nav-link");
        projectLink[0].classList.remove("active-nav-link");
        aboutLink[0].classList.remove("active-nav-link");
    } else if (isInViewport(headers.homeID)) {
        projectLink[0].classList.remove("active-nav-link");
        aboutLink[0].classList.remove("active-nav-link");
        contactLink[0].classList.remove("active-nav-link");
    }
});

// Smooth Scrolling on Navigation
window.smoothScroll = function (target) {
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

    scroll = function (c, a, b, i) {
        i++; if (i > 30) return;
        c.scrollTop = a + (b - a) / 30 * i;
        setTimeout(function () { scroll(c, a, b, i); }, 20);
    }
    // start scrolling
    scroll(scrollContainer, scrollContainer.scrollTop, targetY, 0);
}
// Adding Active Link

menuItems.click(function (e) {
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
function showDescription(button) {
    var x = document.getElementById("project1-description");
    var y = document.getElementById("project2-description");
    var z = document.getElementById("project3-description");
    if (button == "Button1") {
        turnOn(x);
        turnOff(y, z);
    } else if (button == "Button2") {
        turnOn(y);
        turnOff(x, z);
    } else {
        turnOn(z);
        turnOff(x, y);
    }
}
function turnOn(desc) {
    desc.classList.add("active");
}
function turnOff(desc1, desc2) {
    desc1.className = "";
    desc2.className = "";
}