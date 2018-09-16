$(()=>{
    $(".body-centy .contact .contact-content .contact-us div input").focus(function(){
        $(this).val("");
        $(this).siblings(".message-title").show();
        $(this).addClass("addonblur");
    }).blur(function(){
        var value=$(this).siblings(".message-title").html();
        $(this).val(value);
        $(this).siblings(".message-title").hide();
        $(this).removeClass("addonblur");
    })
    $(".body-centy .contact .contact-content .contact-us div textarea").focus(function(){
        $(this).siblings(".message-title").show();
        $(this).addClass("addonblur-textarea");
    }).blur(function(){
        $(this).siblings(".message-title").hide();
        $(this).removeClass("addonblur-textarea");
    })
})