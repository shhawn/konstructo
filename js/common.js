$(function(){
    // header navbar
    $(".menubar").click(function(){
        $(".nav").slideToggle();
    });

    $(window).resize(function(){
        if(window.innerWidth<=992) {
            $(".nav").hide();
        }
        if(window.innerWidth>992) {
            $(".nav").show();
        }
    });

    // scroll top
    $(window).scroll(function(){
        if($(this).scrollTop()>200) {
            $(".scroll_up").fadeIn();
        } else {
            $(".scroll_up").fadeOut();
        }
    });

    $(".scroll_up").click(function(){
        $("html, body").animate({scrollTop: 0}, 700);
        return false;
    });

    // project category click event
    $('#projAll').click(function(e){
        e.preventDefault();
        projall();
    })

    $('#projComm').click(function(e){
        e.preventDefault();
        projcomm();
    })

    $('#projResi').click(function(e){
        e.preventDefault();
        projresi();
    })

    $('#projKit').click(function(e){
        e.preventDefault();
        projkit();
    })

    $('#projRemod').click(function(e){
        e.preventDefault();
        projremod();
    })

    function projall(){
        $(window).resize(function(){
            if ($(window).width() <= 768){
                $('.project_mid li a').css({"border-bottom": "2px solid #d4d4d4"});
                $('#projAll a').css({"border-bottom": "2px solid #000"});
            } else {
                $('.project_mid li a').css({"border-bottom": "1px solid #fff"});
                $('#projAll a').css({"border-bottom": "1px solid #000"});
            }
        })
        if ($(window).width() <= 768){
            $('.project_mid li a').css({"border-bottom": "2px solid #d4d4d4"});
            $('#projAll a').css({"border-bottom": "2px solid #000"});
        } else {
            $('.project_mid li a').css({"border-bottom": "1px solid #fff"});
            $('#projAll a').css({"border-bottom": "1px solid #000"});
        }
        $('.project_bot li').fadeIn();
    }

    function projcomm(){
        $(window).resize(function(){
            if ($(window).width() <= 768){
                $('.project_mid li a').css({"border-bottom": "2px solid #d4d4d4"});
                $('#projComm a').css({"border-bottom": "2px solid #000"});
            } else {
                $('.project_mid li a').css({"border-bottom": "1px solid #fff"});
                $('#projComm a').css({"border-bottom": "1px solid #000"});
            }
        })
        if ($(window).width() <= 768){
            $('.project_mid li a').css({"border-bottom": "2px solid #d4d4d4"});
            $('#projComm a').css({"border-bottom": "2px solid #000"});
        } else {
            $('.project_mid li a').css({"border-bottom": "1px solid #fff"});
            $('#projComm a').css({"border-bottom": "1px solid #000"});
        }
        $('.project_bot li').hide();
        $('.project2, .project4, .project6').fadeIn();
    }

    function projresi(){
        $(window).resize(function(){
            if ($(window).width() <= 768){
                $('.project_mid li a').css({"border-bottom": "2px solid #d4d4d4"});
                $('#projResi a').css({"border-bottom": "2px solid #000"});
            } else {
                $('.project_mid li a').css({"border-bottom": "1px solid #fff"});
                $('#projResi a').css({"border-bottom": "1px solid #000"});
            }
        })
        if ($(window).width() <= 768){
            $('.project_mid li a').css({"border-bottom": "2px solid #d4d4d4"});
            $('#projResi a').css({"border-bottom": "2px solid #000"});
        } else {
            $('.project_mid li a').css({"border-bottom": "1px solid #fff"});
            $('#projResi a').css({"border-bottom": "1px solid #000"});
        }
        $('.project_bot li').hide();
        $('.project3, .project5, .project7').fadeIn();
    }

    function projkit(){
        $(window).resize(function(){
            if ($(window).width() <= 768){
                $('.project_mid li a').css({"border-bottom": "2px solid #d4d4d4"});
                $('#projKit a').css({"border-bottom": "2px solid #000"});
            } else {
                $('.project_mid li a').css({"border-bottom": "1px solid #fff"});
                $('#projKit a').css({"border-bottom": "1px solid #000"});
            }
        })
        if ($(window).width() <= 768){
            $('.project_mid li a').css({"border-bottom": "2px solid #d4d4d4"});
            $('#projKit a').css({"border-bottom": "2px solid #000"});
        } else {
            $('.project_mid li a').css({"border-bottom": "1px solid #fff"});
            $('#projKit a').css({"border-bottom": "1px solid #000"});
        }
        $('.project_bot li').hide();
        $('.project1, .project4, .project5, .project6').fadeIn();
    }

    function projremod(){
        $(window).resize(function(){
            if ($(window).width() <= 768){
                $('.project_mid li a').css({"border-bottom": "2px solid #d4d4d4"});
                $('#projRemod a').css({"border-bottom": "2px solid #000"});
            } else {
                $('.project_mid li a').css({"border-bottom": "1px solid #fff"});
                $('#projRemod a').css({"border-bottom": "1px solid #000"});
            }
        })
        if ($(window).width() <= 768){
            $('.project_mid li a').css({"border-bottom": "2px solid #d4d4d4"});
            $('#projRemod a').css({"border-bottom": "2px solid #000"});
        } else {
            $('.project_mid li a').css({"border-bottom": "1px solid #fff"});
            $('#projRemod a').css({"border-bottom": "1px solid #000"});
        }
        $('.project_bot li').hide();
        $('.project2, .project4, .project7').fadeIn();
    }

    // Open Project Modal
    let j;
    
    $('.project1').click(function(e){
        e.preventDefault();
        j = 1;
    })

    $('.project2').click(function(e){
        e.preventDefault();
        j = 5;
    })

    $('.project3').click(function(e){
        e.preventDefault();
        j = 2;
    })

    $('.project4').click(function(e){
        e.preventDefault();
        j = 3;
    })

    $('.project5').click(function(e){
        e.preventDefault();
        j = 6;
    })

    $('.project6').click(function(e){
        e.preventDefault();
        j = 4;
    })

    $('.project7').click(function(e){
        e.preventDefault();
        j = 7;
    })
    
    for (i = 0; i < 8; i++){
        $('.project'+i+'').click(function(e){
            e.preventDefault();
            $('.projModal').find('img').remove();
            $('.projModal').prepend('<img src="img/project0'+j+'.jpg">');
            $('.projModal').show();
            scrollStop();
        })
    }

    // Stop Scrolling in Modal
    function scrollStop(){
        $('.projModal').on('mousewheel', function(e){
            e.preventDefault();
        })
    }

    // Close Project Modal
    $('.modalBtn').click(function(){
        $('.projModal').hide();
    })
});