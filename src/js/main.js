$(document).ready(function() {

    //------------TEAM-SLIDER------------
    $(".team-slider").slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    centerMode: false,
                    initialSlide: 0,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: false,
                    initialSlide: 0,
                }
            }]
    });


    //------------WORKS-SLIDER------------
    $(".works-slider").bxSlider();


    //------------SMOOTH-SCROLL------------
    $(".top-menu__link").mPageScroll2id();
    $("#to-top-btn").mPageScroll2id();


    //------------HEIGHT-CONTROL------------
    function heightDetect() {
        $(".top").css("height", $(window).height());
    }
    heightDetect();
    $(window).resize(function() {
        heightDetect();
    });


    //------------HAMBURGER------------
    $(".toggle-menu").click(function() {
        $(".top-menu").toggleClass("show fadeInDown animated");
    });

    $(".top-menu__link").click(function() {
        $(".top-menu").removeClass("show fadeInDown animated");
    });
});

//------------MAP------------
(function () {
    window.onload = function () {
        let map,
            point = {lat: 48.7268145, lng: 37.6019125}

        function initMap() {
            map = new google.maps.Map(document.querySelector("#map"), {
                center: point,
                zoom: 17,
                scrollwheel: false,
                disableDefaultUI: true
            });

            let image = "marker.png";
            let marker = new google.maps.Marker({
                position: point,
                map: map,
                icon: image
            });
        }

        initMap();
    }
})();