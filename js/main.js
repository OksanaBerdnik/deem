$(function() {
    $("#style-switcher").on('click', function(e) {
        e.preventDefault();
        $(".color-switcher").fadeToggle();
    });
    $("#style-switcher").on('blur', function(e) {
        $(".color-switcher").fadeToggle();
    });

    $('.portfolio').slick({
        centerMode: true,
        slidesToShow: 1,
        dots:false,
        autoplay: false,
        variableWidth: true,
        nextArrow: '<a href="#" class="arrows nextArrow"><span class="line-before">Next</span><svg height="25" width="20"><use x="0" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#arrow_left" y="0"></use></svg></a>',
        prevArrow: '<a href="#" class="arrows prevArrow"><svg height="25" width="20"><use x="0" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#arrow_left" y="0"></use></svg><span class="line-after">Prev</span></a>'
        // responsive: [
            // {
            //     breakpoint: 768,
            //     settings: {
            //         arrows: false,
            //         centerMode: true,
            //         centerPadding: '40px',
            //         slidesToShow: 3
            //     }
            // },
            // {
            //     breakpoint: 480,
            //     settings: {
            //         arrows: false,
            //         centerMode: true,
            //         centerPadding: '40px',
            //         slidesToShow: 1
            //     }
            // }
        // ]
    });

    $('.burger').on('click', function () {
        $(this, '.mobile-menu').toggleClass('open-menu');
        $('.shadow').fadeToggle();
        $('.mobile-menu').slideToggle();
    });

    $('.shadow').on('click', function () {
        $('.mobile-menu, .burger').removeClass('open-menu');
        $('.shadow').fadeOut();
        $('.mobile-menu').slideUp();
    });

});


function myMap() {
    var mapCanvas = document.getElementById("googleMap");
    var myCenter = new google.maps.LatLng(49.448399, 32.057533);
    var mapOptions = {center: myCenter, zoom: 18};
    var map = new google.maps.Map(mapCanvas,mapOptions);
    var marker = new google.maps.Marker({
        position: myCenter,
        icon: "/img/pointer.png"
    });
    marker.setMap(map);
}