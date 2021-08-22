// eslint-disable

$(function () {
    // 헤더영역 배경
    $("#header").mouseover(function () {
        $(this).addClass('active');
    });
    $("#header").mouseout(function () {
        $(this).removeClass('active');
    });

    $(window).scroll(function () {
        var wScroll = $(this).scrollTop();
        if (wScroll >= 880) {
            $("#header").addClass('active');
        } else {
            $("#header").removeClass('active');
        }
    });

    // 슬라이드
    
    function fnSlide(){
        $(".slide>ul").animate(
            {"margin-left":"-1450px"}
            ,25000
            ,function(){
                $(".slide>ul>li:nth-child(1)>img").insertAfter(".slide>ul>li:nth-child(12)>img");
                $(".slide>ul").css({"margin-left":"0"});
        });
    }
    setInterval(fnSlide);

    function fnSlide2(){
        $(".slide2>ul").animate(
            {"margin-left":"1450px"}
            ,25000
            ,function(){
                $(".slide2>ul>li:nth-child(1)>img").insertAfter(".slide2>ul>li:nth-child(12)>img");
                $(".slide2>ul").css({"margin-left":"0"});
        });
    }
    setInterval(fnSlide2);

});