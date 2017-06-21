// ########################################################
// ###############         Parallax         ###############
// ########################################################

$(document).ready(function() {
    // For a side nav
    // $('#nav').localScroll(800);
    //.parallax(xPosition, speedFactor, outerHeight) options:
    //xPosition - Horizontal position of the element
    //inertia - speed to move relative to vertical scroll. Example: 0.1 is one tenth the speed of scrolling, 2 is twice the speed of scrolling
    //outerHeight (true/false) - Whether or not jQuery should use it's outerHeight option to determine when a section is in the viewport
    $('#intro').parallax("100%", 0.1);
    $('#second').parallax("100%", 0.1);
    $('#third').parallax("100%", 0.1);
    $('#fourth').parallax("100%", 0.1);
    $('#fifth').parallax("100%", 0.1);
})

// ########################################################
// ################        Go to top       ################
// ########################################################

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {
    scrollFunction();
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Chrome, Safari and Opera 
    document.documentElement.scrollTop = 0; // For IE and Firefox
}

// ########################################################
// ###############         Accordion        ###############
// ########################################################

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].onclick = function() {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    }
}

// ########################################################
// ################     Countdown Timer    ################
// ########################################################

// For the countdown timer
// Set the date we're counting down to
var countDownDate = new Date("June 28, 2017 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

    // Get todays date and time
    var now = new Date().getTime();

    // Find the distance between now an the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Output the result in an element with id="demo"
    document.getElementById("countdown").innerHTML = days + "d " + hours + "h " +
        minutes + "m " + seconds + "s ";

    // If the count down is over, write some text 
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("demo").innerHTML = "EXPIRED";
    }
}, 1000);

// ########################################################
// ###############          Pop-in          ###############
// ########################################################

jQuery(document).ready(function($) {

    var $timeline_block = $('.cd-timeline-block');

    //hide timeline blocks which are outside the viewport
    $timeline_block.each(function() {
        if ($(this).offset().top > $(window).scrollTop() + $(window).height() * 0.75) {
            $(this).find('.cd-timeline-img, .cd-timeline-content').addClass('is-hidden');
        }
    });

    //on scolling, show/animate timeline blocks when enter the viewport
    $(window).on('scroll', function() {
        $timeline_block.each(function() {
            if ($(this).offset().top <= $(window).scrollTop() + $(window).height() * 0.75 &&
                $(this).find('.cd-timeline-img').hasClass('is-hidden')) {
                $(this).find('.cd-timeline-img, .cd-timeline-content').removeClass(
                    'is-hidden').addClass('bounce-in');
                update();
            }
        });
    });

    $(".cd-read-more").click(function() {
        // For the modal
        // console.log(this.id);
        // console.log(this);
        var h = this.title;
        // console.log(h);
        $.ajax({
            url: "snippet/" + this.id + ".html",
            // context: text
        }).done(function(data) {
            // console.log(typeof data);
            // console.log(data);
            swal({
                // title: "HTML <small>Title</small>!",
                title: h,
                // text: "A custom <span style=\"color: #F8BB86 \">html<span> message.",
                text: data,
                html: true,
                confirmButtonText: "Dismiss",
                customClass: "modalClass"
            });

        });

    });

});
//# sourceURL=pen.js

// ########################################################
// ############    Wallpaper, progress bar     ############
// ############       and Section title        ############
// ########################################################

(function($) {
    var $window = $(window);
    var windowHeight = $window.height();

    $window.resize(function() {
        windowHeight = $window.height();
    });

    $.fn.parallax = function(xpos, speedFactor, outerHeight) {
        var $this = $(this);
        var getHeight;
        var firstTop;
        var paddingTop = 0;

        //get the starting position of each element to have parallax applied to it		
        $this.each(function() {
            firstTop = $this.offset().top;
        });

        if (outerHeight) {
            getHeight = function(jqo) {
                return jqo.outerHeight(true);
            };
        } else {
            getHeight = function(jqo) {
                return jqo.height();
            };
        }

        // setup defaults if arguments aren't specified
        if (arguments.length < 1 || xpos === null) xpos = "50%";
        if (arguments.length < 2 || speedFactor === null) speedFactor = 0.1;
        if (arguments.length < 3 || outerHeight === null) outerHeight = true;

        // function to be called whenever the window is scrolled or resized
        function update() {
            var pos = $window.scrollTop();

            $this.each(function() {
                var $element = $(this);
                var top = $element.offset().top;
                var height = getHeight($element);

                // Check if totally above or totally below viewport
                if (top + height < pos || top > pos + windowHeight) {
                    return;
                }
                // console.log("Bleh" + pos);

                $this.css('backgroundPosition', xpos + " " + Math.round((firstTop - pos) * speedFactor) + "px");

                // For the progress bar
                var winHeight = $(window).height();
                var docHeight = $(document).height();
                max = docHeight - winHeight;
                $("#progress").attr('max', max);
                $("progress").attr('value', pos);

                var header = "IIT Madras";
                // if (pos > 0 && pos < 1346) header = "Know your Insti";
                // if (pos > 1346 && pos < 2160) header = "Second Impressions";
                // if (pos > 2160 && pos < 3930) header = "Sprouting Wings";
                // if (pos > 3930 && pos < 4960) header = "Together, we all";
                // if (pos > 4960) header = "Life Ahead";
                // var value = $(window).scrollTop();
                if (pos > 0 && pos < 1747) header = "Know your Insti";
                if (pos > 1747 && pos < 2940) header = "Second Impressions";
                if (pos > 2940 && pos < 5302) header = "Sprouting Wings";
                if (pos > 5302 && pos < 6835) header = "Together, we all";
                if (pos > 6835) header = "Life Ahead";
                if (pos > max - 1 && localStorage.displayed !== 'showed') {
                    setTimeout(function() {

                        swal({
                            // title: "HTML <small>Title</small>!",
                            title: "And Guess What",
                            // text: "A custom <span style=\"color: #F8BB86 \">html<span> message.",
                            text: "This is just the half of it, for the rest half resides in the feel of being a part of it",
                            confirmButtonText: "Wow",
                            // customClass: "modalClass"
                        });
                        // So that is is onlt displayed once
                        localStorage.displayed = "showed";
                    }, 2500);
                }
                // console.log("DocHeight:" + docHeight);
                // console.log("WinHeight:" + winHeight);
                // console.log("Pos:" + pos);

                $("div.sectionhead").text(header); //+ "(" + pos + ")");
            });
        }
        $window.bind('scroll', update).resize(update);
        update();
        //So that the localstorage item is changed on closing/reloading
        $window.unload(function() {
            localStorage.displayed = undefined;
        })
    };
})(jQuery);