$(()=>{
    //广告轮播
    var data=5;
    var WIDTH=$("#banner").width(),moved=0,interval=500,wait=3000,timer=null;
    var $ul=$("[data-load=bannerImgs]");
    $ul.css("width",(data+2)*WIDTH);
    var $ulIndex=$("[data-load=bannerInds]");
    $ulIndex.children().first().addClass("hover");
    function move(dir){
        if(moved==0&&dir==-1){
            moved=data;
            $ul.css("left",-WIDTH*data);
        }
        moved+=dir;
        $ul.stop(true).animate({left:-WIDTH*moved},interval,function(){
            if(moved==data){
                moved=0;
                $ul.css("left",0);
            }
            $ulIndex.children(":eq("+moved+")").addClass("hover").siblings().removeClass("hover");
        });
    }
    timer=setInterval(function(){
        move(1)
    },wait+interval);
    $("#banner").hover(
        function(){
            clearInterval(timer);
            timer=null;
        },	
        function(){
            timer=setInterval(move,wait+interval);
    })
    $("[data-load=bannerInds]").on("click","li:not(.hover)",function(e){
            var i=$(e.target).index();
            console.log(i);
            moved=i;
            $ul.stop(true).animate({left:-WIDTH*moved},interval,function(){
            if(moved==data){
                moved=0;
                $ul.css("left",0);
            }
            $ulIndex.children(":eq("+moved+")").addClass("hover").siblings().removeClass("hover");
        });
    })
    $("[data-move=right]").click(function(){
        if(!$ul.is(":animated"))
            move(1);
    })
        $("[data-move=left]").click(function(){
        if(!$ul.is(":animated"))
            move(-1);
    })
})