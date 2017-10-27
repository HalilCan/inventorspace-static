$(function() {
    $('a[href*=#]').on('click', function(e) {
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            e.preventDefault();
        
            // Store hash
            let hash = this.hash;
        
            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function(){
            
                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        } // End if
        
        e.preventDefault();
       // $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 1000, 'linear');
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
