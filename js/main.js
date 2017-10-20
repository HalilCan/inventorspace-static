$(function() {
    $('a[href*=#]').on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 500, 'linear');
    });
});

let bgSet01 = ["img/slide-1-bg-1.jpeg", "img/slide-1-bg-2.jpeg", "img/slide-1-bg-3.png"]
let bg01_i = 0;
setInterval(function() {
    if (bg01_i >= bgSet01.length) {
        bg01_i = 0;
    }
    document.getElementById("bg01-img").src = bgSet01[bg01_i];
    bg01_i++;
}, 3000);
