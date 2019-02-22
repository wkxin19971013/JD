$(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 30) {
            $('.body>header').addClass("active");
        } else {
            $('.body>header').removeClass("active");
        }
    });
})

$(function () {
    var height = $(window).height();
    $(".head-zhe").height(height);
})

$(function () {
    $(".navs").click(function () {
        $(".head-zhe").show();
        $(".put").focus();
    })
})

$(function () {
    $(".back").click(function () {
        $(".head-zhe").hide();

    })
})

$(function () {
    var now = 0;
    var timer = null;
    var width = $(window).width();

    var li = $(".lunbo1>div>span");
    var sec = $(".lunbo1>section")

    function ok() {
        timer = setInterval(function () {
            now++;
            if (now >= li.length) {
                now = 0;
            }
            sec.animate({
                "left": -now * width
            });
            li.eq(now).addClass("active").siblings("span").removeClass("active");

        }, 3000)
    }
    ok();

    li.click(function () {
        now++;
        now = $(this).index();
        li.eq(now).addClass("active").siblings("span").removeClass("active");
        sec.animate({
            "left": -now * width
        });
    })

})

function scroll() {
    $(".kuai-lun>ul").animate({
        "top": "-0.16rem" },"slow" ,function () {
        $(".kuai-lun>ul li:eq(0)").appendTo($(".kuai-lun>ul"))
        $(".kuai-lun>ul").css({
            "top": 0
        })
    })
}
setInterval(scroll, 2000)

$(function(){
    $(".content-left>ul li").click(function(){
        $(this).addClass("active").siblings("li").removeClass("active");
        $(".all-tu").eq($(this).index()).fadeIn(500).siblings("div").fadeOut(300);
})
})



$(function () {
    var now = 0;
    var timer = null;
    var width = $(window).width();

    var li = $(".lunbo2>div>span");
    var sec = $(".lunbo2>section")

    function ok() {
        timer = setInterval(function () {
            now++;
            if (now >= li.length) {
                now = 0;
            }
            sec.animate({
                "left": -now * width
            });
            li.eq(now).addClass("active").siblings("span").removeClass("active");

        }, 3000)
    }
    ok();

    li.click(function () {
        now++;
        now = $(this).index();
        li.eq(now).addClass("active").siblings("span").removeClass("active");
        sec.animate({
            "left": -now * width
        });
    })

})