window.onload= function () {



    function resize(originSize,type){
        var type=type||"x";
        if(type=="x"){
            var widths=document.documentElement.clientWidth;
            var scale=widths/originSize*100+"px";
        }else if(type=="y"){
            var heights=document.documentElement.clientHeight;
            var scale=heights/originSize*100+"px";
        }
        document.getElementsByTagName("html")[0].style.fontSize=scale;
    }



    resize(750,"x");
    var mySwiper = new Swiper('.swiper-container', {
        pagination : '.swiper-pagination',
        autoplay: 2000,
        onInit: function(swiper){ //Swiper2.x的初始化是onFirstInit
            swiperAnimateCache(swiper); //隐藏动画元素
            swiperAnimate(swiper); //初始化完成开始动画
        },
        onSlideChangeEnd: function(swiper){
            swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画
        }
    })

    $(".title li").click(function () {
        var index=$(this).index();
        $(".title li").css({
            color:"#87E2FC"
        })
        $(this).css({
            color:"#fff"
        })
        $(".con-box").hide();
        $(".con-box").eq(index).show();



        myScroll4 = new IScroll('#wrapper4',  {
            //bounceEasing: 'elastic',
            //scrollbars: true,
            fadeScrollbars:true,
            mouseWheel:true,
            bounce:true,
            click: true
        })

        myScroll3 = new IScroll('#wrapper3',  {
            //bounceEasing: 'elastic',
            //scrollbars: true,
            fadeScrollbars:true,
            mouseWheel:true,
            bounce:true,
            click: true
        })
    })



    myScroll2 = new IScroll('#wrapper2',  {
        //bounceEasing: 'elastic',
        //scrollbars: true,
        fadeScrollbars:true,
        mouseWheel:true,
        bounce:true,
        click: true
    })




    //document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);


}