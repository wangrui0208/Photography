$(()=>{
    //显示search
    $(".body-centy .teams .teams-img li").hover(
        function(){
            $(this).children("i").addClass("search icon ion-search").fadeIn(2000);
        },
        function(){
            $(this).children("i").removeClass("search icon ion-search").fadeOut(3000);
        }
    )
    //点击search
    $(".body-centy .teams .teams-img li i").click(function(){
        $(".alert").show();
        $(".teams-alert").show();
        var src=$(this).siblings("img").attr("src");
        $(".teams-alert div img").attr("src",src);
    });
    //点击关闭
    $(".teams-alert .teams-close").click(function(){
        $(".alert").hide();
        $(".teams-alert").hide();
    })
})