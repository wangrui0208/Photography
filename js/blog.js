$(()=>{
    $(".blog .footer-list ul li div div").hover(
        function(){
            $(this).children("a").animate({bottom:"4px"},500);
        },
        function(){
            $(this).children("a").animate({bottom:"-100px"},500);
        }
    )
})