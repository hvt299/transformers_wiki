    // Overlay
    $(".header-menu-bar button").click(function(){
        $(".overlay").show();
        $(".nav-mobile").addClass("nav-mobile--show");
    })

    $(".nav-mobile button").click(function(){
        $(".overlay").hide();
        $(".nav-mobile").removeClass("nav-mobile--show");
    })

    $(".overlay").click(function(){
        $(".overlay").hide();
        $(".nav-mobile").removeClass("nav-mobile--show");
    })

    // Picture overlay
    $(".banner img, .about__picture img").click(function(){
        $("#imgBig").attr("src",$(this).prop('src'));
        $(".picture-overlay").show(30, "linear");
        $(".picture-overlay-content").show(30, "linear");
    });

    $("#imgBig").click(function(){
        $("#imgBig").attr("src", "");
        $(".picture-overlay").hide();
        $(".picture-overlay-content").hide();
    });

    $(".picture-overlay").click(function(){
        $("#imgBig").attr("src", "");
        $(".picture-overlay").hide();
        $(".picture-overlay-content").hide();
    });