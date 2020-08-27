
/* GNB메뉴 풀다운(Pulldown) 내비 시작 */
$("#mainMenu>li").mouseover(function(){
    $(this).children("ul").stop().fadeIn(1000);
});
$("#mainMenu>li").mouseout(function(){
    $(this).children("ul").stop().fadeOut(1000);
});
/* GNB메뉴 풀다운(Pulldown) 내비 끝 */


/* 슬라이드 쇼 시작 */
setInterval(fnSlide, 3000);

function fnSlide() {

    $("#slideShuttleFrame").animate(
                            {"margin-left": "-800px"},
                            1000,
                            "swing",
                            function() {

                                $(this).css({"margin-left": "0"});

                                var selector = "#slideShuttleFrame";
                                $(selector+">a:first").insertAfter(selector+">a:last");

                            }
                        );

}
/* 슬라이드 쇼 끝 */



/* 모달레이어 팝업 시작 */
$("#bbsNotice table tr:first>td").click(function(){
    $("#modalLayerBg").css({"display": "block"});
});

  /* 모달레이어 팝업 닫기 시작 */
$("#closeBtn>button").click(function(){
    $("#modalLayerBg").css({"display": "none"});
});
  /* 모달레이어 팝업 닫기 끝 */

/* 모달레이어 팝업 끝 */






