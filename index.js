// Menu hamburguesa
$(document).ready(function(e) {
    $win = $(window);
    $navbar = $('#header');
    $toggle = $('.toggle-button');
    var width = $navbar.width();
    toggle_onclick($win, $navbar, width);

    // resize event
    $win.resize(function() {
        toggle_onclick($win, $navbar, width);
    });

    $toggle.click(function(e) {
        $navbar.toggleClass("toggle-left");
    });

});

// Display block en menu hamburguesa < 768px
function toggle_onclick($win, $navbar, width) {
    if ($win.width() <= 768) {
        $navbar.css({ left: `-${width}px` });
    } else {
        $navbar.css({ left: '0px' });
    }
}

// Vendor Typed JS

let typed = new Typed('#typed', {
    strings: [
        'Web Developers',
        'Freelancer'
    ],
    typeSpeed: 50,
    backspeed: 50,
    loop: true
});

// About Me Vendor Typed JS_2
let typed_2 = new Typed('#typed_2', {
    strings: [
        'Web Developers',
        'Freelancer'
    ],
    typeSpeed: 50,
    backspeed: 50,
    loop: true
});