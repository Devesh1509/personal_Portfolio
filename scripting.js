
$(document).ready(function () {
    // Add smooth scrolling to all links
    $("a").on('click', function (event) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function () {

                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        } // End if
    });
});


// =======PROGRESS BAR======

// =============PROGRESS BAR END================

//------------NAVBAR--------------

// When the user scrolls down 80px from the top of the document, resize the navbar's padding and the logo's font size
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
    document.getElementById("navbar").style.padding = "10px 20px 10px 20px";
    // document.getElementById("logo").style.fontSize = "30px";
    document.getElementById("navbar").style.backgroundColor='rgba(0 ,0 ,0 ,0.5 )';
  } else {
    document.getElementById("navbar").style.padding = "10px 20px 20px 50px";
    // document.getElementById("logo").style.fontSize = "30px";
    document.getElementById("navbar").style.backgroundColor='rgba(0 ,0 ,0 ,0)';
  }
}