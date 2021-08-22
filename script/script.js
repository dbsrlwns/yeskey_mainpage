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
        
        // 스크롤탑
        if(wScroll > 0){
            $(".scrollTop").addClass("active");
        } else {
            $(".scrollTop").removeClass("active");
        }
    });

    // 클릭하면 스크롤 맨위로 이동
    $(".scrollTop").click(function (){
        $("html, body").animate({scrollTop:0}, 500);
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

    var s1 = $(".section1").offset().top;
    var s2 = $(".section2").offset().top;
    var s3 = $(".section3").offset().top;
    var s4 = $(".section4").offset().top;
    var s5 = $(".section5").offset().top;
    var s6 = $(".section6").offset().top;
    var s7 = $(".section7").offset().top;
    var s8 = $(".section8").offset().top;

    $(window).scroll(function (){
        var wScroll = $(this).scrollTop();
        console.log(wScroll);
        if(wScroll > s1 - 400){
            $(".section1").animate({"opacity":"1"},1000);
            $(".iconBox:nth-child(1)").animate({"opacity":"1"},2000);
            $(".iconBox:nth-child(2)").animate({"opacity":"1"},3000);
            $(".iconBox:nth-child(3)").animate({"opacity":"1"},4000);
        }
        if(wScroll > s2 - 400){
            $(".section2").animate({"opacity":"1"},1000);
            $(".item:nth-child(1)").animate({"opacity":"1","top":"-20px"},1000);
            $(".item:nth-child(2)").animate({"opacity":"1","top":"-20px"},1500);
            $(".item:nth-child(3)").animate({"opacity":"1","top":"-20px"},2000);
            $(".item:nth-child(4)").animate({"opacity":"1","top":"-20px"},2500);
        }
        if(wScroll > s3 - 400){
            $(".section3").animate({"opacity":"1"},1000);
        }
        if(wScroll > s4 - 400){
            $(".section4").animate({"opacity":"1"},500);
            $(".finance_bg").animate({"top":"-20px"},500);
            $(".finance_icon1").animate({"top":"-20px"},1000);
            $(".finance_icon2").animate({"top":"-20px"},2000);
            $(".finance_box").animate({"left":"0"},800);
        }
        if(wScroll > s5 - 400){
            $(".section5").animate({"opacity":"1"},800);
            $(".bio_bg").animate({"top":"-20px"},800);
            $(".bio_icon1").animate({"top":"-60px"},1000);
            $(".bio_icon2").animate({"top":"-60px"},1500);
            $(".bio_icon3").animate({"top":"-60px"},2000);
            $(".bio_icon4").animate({"top":"-60px"},2500);
            $(".bio_box").animate({"right":"0"},800);
        }
        if(wScroll > s6 - 400){
            $(".section6").animate({"opacity":"1"},1000);
            $(".otp_bg").animate({"top":"-20px"},800);
            $(".otp_icon1").animate({"top":"-60px"},1000);
            $(".otp_icon2").animate({"top":"-60px"},1500);
            $(".otp_icon3").animate({"top":"-60px"},2000);
            $(".otp_icon4").animate({"top":"-60px"},2500);
            $(".otp_box").animate({"left":"0"},800);
        }
        if(wScroll > s7 - 400){
            $(".section7").animate({"opacity":"1"},800);
            $(".myInfo_bg").animate({"top":"-38px"},1000);
            $(".myInfo_icon1").animate({"top":"-60px"},1000);
            $(".myInfo_icon2").animate({"top":"-60px"},1500);
            $(".myInfo_icon3").animate({"top":"-60px"},2000);
            $(".myInfo_box").animate({"right":"0"},800);
        }
        if(wScroll > s8 - 400){
            $(".section8").animate({"opacity":"1"},1000);
            $(".info_box:nth-child(1)").animate({"top":"0"},1000);
            $(".info_box:nth-child(2)").animate({"top":"0"},1500);
            $(".info_box:nth-child(3)").animate({"top":"0"},2000);
        }
    });

});