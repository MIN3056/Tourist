
$(function(){
    let ww=$(window).width();
        
    function fnSlider(item){
        var swiper = new Swiper('.swiper',{                                   
            effect:item,
            loop:true,            
            autoplay:{
                delay:3000,
            },
            pagination:{
                el:'.swiper-pagination',
                clickable:true,
            }, 
        });
    }
    

    if(ww>=768){
        fnSlider('fade');
    }else{
        fnSlider('slide');
    }
    
    function fnPopOpen(item){
        $('.popup').eq(item).show();
    }

    $('.top03 .item').click(function(e){
        fnPopOpen($(this).index()-1);
    })
    $('.btn-close').click(function(){
        $('.popup').hide();
    })

    let noticeList = $('.notice a');
        console.log(noticeList);
        $.ajax({
        type:'GET',
        url:`./json/notice-list.json`,
        dataType:'json',

        // 성공
        success:function(data){ 
            for(let idx=0;idx<=4;idx++){
                noticeList.eq(idx).html(data[idx].noticeTitle);
            }                
        },
            
        // 실패
        error:function(){
                alert('죄송합니다. ㅠㅠ');                        
            },
        }) 

        noticeList.click(function(e){
            let listNum = noticeList.index(this);
            location.href=`./notice-view.html#${listNum}`;
            e.preventDefault();
        })
})
