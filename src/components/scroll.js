// components/Scroll.js
import { useEffect } from "react";

// Not currently used, but might be useful later ;)
export const Scroll = () => {
    useEffect(function mount() {
        // DOM is loaded and ready for manipulation here
        ///////////////////////////////////////////////////////////////////////////
        //Header Scroll Logic//////////////////////////////////////////////////////
        ///////////////////////////////////////////////////////////////////////////
        var didScroll;
        var lastScrollTop = 0;
        var delta = 10;
        var header = document.getElementById('header');

        // Bail if the page does not include header
        if (!header) return;

        var navbarHeight = header.offsetHeight;
        // var windowScrollTop = window.scrollY;
        var bodyHeight = document.body.offsetHeight;
        var windowHeight = window.outerHeight;

        const listen = setInterval(function () {
            // console.log('in good stuff')
            if (didScroll) {
                hasScrolled();
                didScroll = false;
            }
        }, 500);

        //For IntersectionObserver -
        //builds an array ranging from 0.0 to 1.0 by the given amount of steps
        //Passing 5 will return [0.0, 0.2, 0.4, 0.6, 0.8, 1.0]
        var thresholdArray = steps =>
            Array(steps + 1)
                .fill(0)
                .map((_, index) => index / steps || 0);

        function hasScrolled() {

            var st = window.scrollY;

            // Make sure they scroll more than delta
            if (Math.abs(lastScrollTop - st) <= delta) return;

            // const activeOffCanvasMenu = $('body.offcanvas-active').length;
            const activeOffCanvasMenu = document.getElementsByClassName('offcanvas show').length;

            // If they scrolled down and are past the navbar, add class .nav-up.
            // This is necessary so you never see what is "behind" the navbar.
            if (st > lastScrollTop && st > navbarHeight && !activeOffCanvasMenu) {
                // Scroll Down

                header.classList.remove('nav-down')
                header.classList.add('nav-up')
            } else {
                // Scroll Up
                if (st + windowHeight < bodyHeight) {
                    header.classList.add('nav-down')
                    header.classList.remove('nav-up')
                }
            }
            lastScrollTop = st;
        }

        const target = document.querySelectorAll('.chapter');
        let optionss = {
            threshold: thresholdArray(50),
        };

        //This is a more efficient version of $(window).scroll()
        const handleDirectionIntersect = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                didScroll = true;
              
            });
        }, optionss);

        target.forEach(image => {
            handleDirectionIntersect.observe(image);
        });

        ////////////////////////////////////////////////////////////////////////////////
        ///Add --scroll property to chapters so they can be animated in CSS/////////////
        ////////////////////////////////////////////////////////////////////////////////
     
        window.addEventListener(
            "scroll",
            () => {
                // document.body.style.setProperty('--scroll',window.pageYOffset / (document.body.offsetHeight - window.innerHeight));
                var chaptersInView = document.querySelectorAll('.chapter.in-view')
                var chaptersOutOfView = document.querySelectorAll('.chapter.out-of-view')

                chaptersInView.forEach((element, index) => {
                    var id = element.dataset.index;
                    var rect = element.getBoundingClientRect()
                    var ratio = 1 - ((rect.height + rect.top) / rect.height)
                    element.style.setProperty("--scroll-" + id, ratio)
                    
                });
                chaptersOutOfView.forEach((element, index) => {
                    var id = element.dataset.index;
                    element.style.setProperty("--scroll-" + id, 1)
                });
            },
            false
        );

        return function unMount() {
            clearInterval(listen)
        };
    }, []);

    return null;
}