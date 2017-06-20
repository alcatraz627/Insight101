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