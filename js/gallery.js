$(()=>{
    $(".body-centy .gallery .gallery-list ul li").hover(
        function(){
            $(this).children(".addLine2").addClass("line2");
            $(this).children(".addLine1").addClass("line1");
            $(this).children(".details").fadeIn(800);
        },
        function(){
            $(this).children(".addLine2").removeClass("line2");
            $(this).children(".addLine1").removeClass("line1");
            $(this).children(".details").fadeOut(500);
        }
    )
})