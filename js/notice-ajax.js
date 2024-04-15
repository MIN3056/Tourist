$(function(){

let listNum = $('.list-num');
let listTit = $('.list-tit a');
let listHit = $('.list-hit');
let listDate = $('.list-date span:last-child');


$.ajax({
        type:'GET',
        url:`./json/notice-list.json`,
        dataType:'json',

// 반복문이 무조건 효율이 더 좋지는 않음.
        // 성공
        success:function(data
            // json 파일
        ){ 
            for(let idx=0;idx<=data.length-1;idx++){
            listNum.eq(idx).text(data[idx].noticeNum);
            listTit.eq(idx).text(data[idx].noticeTitle);
            listHit.eq(idx).text(data[idx].noticeHit);
            listDate.eq(idx).text(data[idx].noticeDate);
        }                
    },
            
        // 실패
        error:function(){
                alert('죄송합니다. ㅠㅠ');                        
            },
        })




$('.list-tit').click(function(e){
// listTit의 형 요소 listNum -1 => 1번 num가지고 있는 게 0, 10번 num가지고 있는 게 9가 됨.
// let idxNum = $(this).prev().text() - 1;
let idxNum = $('.list-tit').index(this);
// notice tit 몇번째인지 알아서 notice view에 전달
location.href=`notice-view.html#${idxNum}`;
e.preventDefault();
})    

})


