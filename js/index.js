$(function(){
    $(window).scroll(function(){
        if($(this).scrollTop()>20){
            $('.head').addClass('active')
        }else{
            $('.head').removeClass('active')
        }
    })
})
$(function(){
    var index=0;
    var timer=null;
    var imgwidth=$('.banner .swiper-slide img').width();
    timer=setInterval(function(){
        index++;
        if(index>$('.swiper-pagination span').length-1){
            index=0;
        }
        $('.banner .swiper-wrapper').animate({"left":-index*imgwidth})
        $('.swiper-pagination span').eq(index).addClass('swiper-pagination-bullet-active').siblings('span').removeClass('swiper-pagination-bullet-active')
    },1500)
})

$(function(){
var swiper2 = new Swiper('.jdkb_zhong', {
    direction: 'vertical',
    loop:true,
    autoplay:{
        delay: 1300,
    },
});
})
