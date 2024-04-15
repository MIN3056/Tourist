$(function(){
     // 전역변수
     let docHeight = $(document).height();
     let winHeight = $(window).height();

      // window 리사이즈 되었을때 높이
      $(window).resize(function(){
        let docHeight = $(document).height();
        let winHeight = $(window).height();
    });

    // 스크롤 했을때 높이
    $(window).scroll(function(){
        let scrTop =  $(window).scrollTop();
        if(scrTop>=docHeight-winHeight-100){
            setTimeout(function(){
                 $('#target-box').load('add-program.html #add-program');
            }, 1000);
        };
        
// 문서 높이 - 브라우저 높이 = 스크롤 거리
    });


    $('button').click(function(){
        let thisText = $(this).text();
        let thisString = $(this).prev().children();
        if(thisText=='더보기'){
            $(this).text('접기');
            thisString.show();
        }else{
            $(this).text('더보기');
            thisString.hide();
        }
    })
    $(window).resize(function(){
        let ww = $(window).width();
        // 만약 width가 768보다 작다면 = 모바일 환경으로 간다면
        if(ww<768){
            $('.col-all p span').show();
            $('button').text('접기');
        }else{
            $('.col-all p span').hide();
            $('button').text('더보기');
        }
    })
})