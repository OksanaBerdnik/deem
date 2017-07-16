$(function() {
    var a = $("#carousel-home .carousel-inner .item");
    $("#carousel-home").carousel("cycle");
    $("#carousel-home").on("slid.bs.carousel", function() {
        var e = a.length - 1;
        var d = $("#carousel-home div.active").index();
        console.log(e, d);
        var b = 0;
        var c = [];
        a.each(function() {
            c.push($(this).css("z-index"));
            console.log($(this).index(), d);
            if ($(this).index() + 1 == d) {
                $(this).css("z-index", "0");
                $(this).addClass("next");
                $(this).find(".carousel-caption").hide()
            } else {
                if ($(this).hasClass("active")) {
                    $(this).css("z-index", e);
                    $(this).find(".carousel-caption").fadeIn("fast")
                } else {
                    var f = parseFloat($(this).css("z-index"));
                    if (f < e) {
                        $(this).css("z-index", f + 1)
                    } else {
                        $(this).css("z-index", "0");
                        $(this).addClass("next")
                    }
                }
            }
        })
    })
});
$(function() {
    $(".contact-form input, .contact-form textarea").focus(function() {
        $(this).parent().addClass("focus")
    });
    $(".contact-form input,.contact-form textarea").focusout(function() {
        $(this).parent().removeClass("focus")
    });
    var c = $(".about-block .about-content").width() + $(".about-block .artist").width() + 4;
    $("footer.about").width(c);
    var a = $(".call-navbar .active").text();
    function b(d) {
        if (d == "mts") {
            $(".call-data-block").text($(".real-phone .mts span").text());
            $(".head-phone.text-right").text($(".real-phone .mts p").text())
        } else {
            if (d == "lifecell") {
                $(".call-data-block").text($(".real-phone .lifecell span").text());
                $(".head-phone.text-right").text($(".real-phone .lifecell p").text())
            } else {
                if (d == "kyivstar") {
                    $(".call-data-block").text($(".real-phone .kyivstar span").text());
                    $(".head-phone.text-right").text($(".real-phone .kyivstar p").text())
                } else {
                    if (d == "vodafone") {
                        $(".call-data-block").text($(".real-phone .vodafone span").text());
                        $(".head-phone.text-right").text($(".real-phone .vodafone p").text())
                    }
                }
            }
        }
    }
    b(a);
    $(".call-navbar a").click(function() {
        $(".call-navbar a").removeClass("active");
        $(this).addClass("active");
        b($(this).text())
    });
    $(".carousel-portfolio-gallery .right.carousel-control").click(function() {
        var e = $(this).attr("href");
        var f = $(e).attr("data-length");
        var d = $(e).find(".portfolio-image.active").attr("data-item");
        if (d == f) {
            $(e).find(".paginator-block span").text("1")
        } else {
            $(e).find(".paginator-block span").text(parseInt(d) + 1)
        }
    });
    $(".carousel-portfolio-gallery .left.carousel-control").click(function() {
        var e = $(this).attr("href");
        var f = $(e).attr("data-length");
        var d = $(e).find(".portfolio-image.active").attr("data-item");
        if (d == "1") {
            $(e).find(".paginator-block span").text(f)
        } else {
            $(e).find(".paginator-block span").text(parseInt(d) - 1)
        }
    });
    $("#style-switcher").on('click', function(e) {
        e.preventDefault();
        $(".color-switcher").fadeToggle();
    });
    $("#style-switcher").on('blur', function(e) {
        $(".color-switcher").fadeToggle();
    });

    $(".pagination a span").parent().css({
        background: "transparent"
    })
});
function scrollToItem(a) {
    $("html, body").animate({
        scrollTop: $(a).offset().top
    }, 1000);
    return false
};

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