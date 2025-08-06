//1.스크립트 위로 튕기는것
$(document).on('click', 'a[href="#"]', function(e){
    e.preventDefault();
});
// a로 감싼 걸 눌러도 위로 튕기지 않음. 단, logo의 경우 a로 감싸긴 했으나 href="#"를 붙이지 않았으므로, 로고를 누르면 웹 상단으로 올라가게 됨.

//slick.js
$(function(){
    $('.visual .slide').slick({
        arrows: true, //화살표
        dots: true, //★인디케이트는 처음에 false로 작성하고 arrow를 css적용한 후 true로 바꿔준다.★
        fade:true, //페이드효과
        autoplay:true, //자동재생
        autoplaySpeed: 4000, //재생시간 (4000=4초)
        pauseOnHover: false,
        pauseOnFocus: false
    });
    $('.slick-prev').text("prev");

    $('.slide2').slick({
        arrows: false,
        dots: true,
        slidesToShow:2,
        slidesToScroll:1,
        autoplay: true,
        Infinite: true,
        autoplaySpeed:6000,
        pauseOnHover: false,
        pauseOnFocus: false
    });
//텍스트 메소드
    $('.slide2 #slick-slide-control10').text("서울 마곡지구 업무 용지");
    $('.slide2 #slick-slide-control11').text("서울 마곡지구 대방디엠시티2차");
    $('.slide2 #slick-slide-control12').text("서울 마곡지구 대방디엠시티 더 센텀");
    $('.slide2 #slick-slide-control13').text("광주 수완  대방노블랜드6차");
});
// $('.slick-prev').text("prev"); 글자 교체(slick-prev -> prev) 되라는 뜻'

// splitting.js
$(function(){
    Splitting(); //대문자로 쓴다!!!
});

// gnb
$(function(){
    $('.gnb > li > a').on('mouseenter focus', function(){
        let gnbIndex = $('.gnb > li > a').index($(this));
        // alert(gnbIndex);
        // console.log(gnbIndex);
        $('.gnb .inner').removeClass('on');
        $('.gnb .inner:eq('+ gnbIndex + ')').addClass('on');
    });
    $('header').on('mouseleave blur', function(){
        $('.gnb .inner').removeClass('on');
    })
});
//순차적 항목들에는 0번부터 시작하는 index 번호가 주어진다. e(이벤트: 마우스 올리기, 클릭하기 등)가 일어나는 대상을 this(자신)라고 한다.
// 대방사이트 html의 경우 gnb 메뉴에서 회사소개부터 고객지원까지 index가 0~4로 메겨진다. (웹사이트 상에서 alert나, 개발자모드-console : console.log를 활성화시켜서 확인 가능)
//alert(gnbIndex)를 활성화시키면 마우스를 올리는 a에서 gnbIndex 값을 알 수 있다.
//eq 뒤에 괄호()를 띄어쓰면 안 됨!!



//scrolla.js
$(function(){
    $('.animate').scrolla({
        mobile: true, //모바일버전시 활성화
        once: false //스크롤시 딱 한번만 하고싶을땐 true
    });
});
// 개발자 모드로 검토 시 animate를 붙인 해당 부분으로 스크롤을 내렸을 때 motion animated가 정상적으로 붙은 걸 확인할 수 있다. CSS로 .motion 붙이기 전에도 animate 적용된 걸 확인할 수 있음.

//scrollDown
$(function(){
    $('.scroll').on('click', function(){
        var scrollBtn = $('#scrollPos').offset().top;
        $('html, body').animate({scrollTop:(scrollBtn)}, 400)
    })
});
//여기서 400=0.4s
//scroll을 click할 때 function 뒤의 함수가 실행이 되는데, scrollPos의 top(윗변)위치값을 scrollBtn의 위치값으로 가져온다는 뜻이다. 이때 scrollTop의 값으로 골라가는 데 걸리는 시간이 0.4초라는 뜻

//video
$(function(){
    $('.videoBox .mask').on('click', function(){
        $(this).css({display:'none'});
        // $('videoBox').css({display:'block'})
    })
});
