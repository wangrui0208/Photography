$(()=>{
    //加载recent
    $(".recent .control>ul").on("click","li",function(){
        var li = $(this);
        li.addClass("selected-control").siblings().removeClass("selected-control");
        var WIDTH=$(".recent .list-img div.gai").width();
        if(li.is(":first-child")){
            $(".recent .list-img").animate({left:0},800);
        }else{
            $(".recent .list-img").animate({left:-WIDTH*3},800);
        }
    })
})