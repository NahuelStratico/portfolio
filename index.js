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
        'Web Developer',
        'Freelancer'
    ],
    typeSpeed: 50,
    backspeed: 50,
    loop: true
});

// About Me Vendor Typed JS_2
let typed_2 = new Typed('#typed_2', {
    strings: [
        'Web Developer',
        'Freelancer'
    ],
    typeSpeed: 50,
    backspeed: 50,
    loop: true
});

// Scroll automatic
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});






// Api Github

const url = 'https://api.github.com/users/NahuelStratico/repos';
const contenido = document.getElementById('github');

fetch(url)
.then(res => res.json())
.then(data =>  {
    console.log(data);
   
    let resultadoHTML = '';

    data.forEach(function(obj) {
        console.log(obj);
        const name = obj.name;
        let description = obj.description;
        let ver = obj.svn_url;
        // let height = obj.images.fixed_width.height;
        // let title = obj.title;
        resultadoHTML += `

        <div class="content">
            <h4 class="name">
            <a target="blank" href=${ver} class="button">${name}</a>
            </h4>
            <p class="description">${description}</p>
        </div>
        
        `;
    });

    contenido.innerHTML = resultadoHTML;

})
.catch(function(err){
    console.log(err);
})