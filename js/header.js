$(()=>{
    $("div.dropdown:has([data-trigger=dropdown])").click(
        function(){
            var $div = $(this);
            $div.children(".dropdown-menu").children(":eq(0)").css("border-top","3px solid #5FC3B6");
            $div.children(".dropdown-menu").slideToggle(1000);
        }
    )
    $("div.dropdown:has([data-trigger=dropdown])").hover(
        function(){
            var $div = $(this);
            $div.children(".dropdown-menu").children(":eq(0)").css("border-top","3px solid #5FC3B6");
            $div.children(".dropdown-menu").stop().slideToggle(1000);
        }
    )
})