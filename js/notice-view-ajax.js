$(function(){
    console.log(location.href);
let loHref = location.href;
// json의 몇번째 것을 가져와라.
// 0번부터 시작함.
let startIdx = loHref.indexOf('#')+1;
// console.log(`시작인덱스 = ${startIdx}`);
// 글자수 세기 시작인덱스 그 전까지 (그 자리까지x) 
let endIdx = loHref.length;
console.log(`끝인덱스 = ${endIdx}`);
// 시작과 끝을 구했으니 마지막으로 list-num구하기 start부터 end까지
let listNum = loHref.substring(startIdx,endIdx);
// noticelist.json에서 넘어온 값이 1이면 1을 가져올 것이고,...


$.ajax({
        type:'GET',
        url:`./json/notice-list.json`,
        dataType:'json',

// ajax를 가져오고 성공했다면.
        // 성공
        success:function(data){ 
           let noticeView= data[listNum];
           $('#notice-tit').html(noticeView.noticeTitle);
           $('#notice-date').html(`작성일 : ${noticeView.noticeDate}`);
           $('#notice-hit').html(noticeView.noticeHit);
           $('#notice-txt').html(noticeView.noticeTxt);
           
           
        },
        error:function(){
            alert('죄송합니다ㅜ')
        },
    })
            
// notice-tit
// notice-date
// notice-hit
// notice-txt
$('#btn-list').click(function(){
    location.href=`./notice.html`
})
})
