$(()=>{	
	//楼层滚动
    var $lift=$("#lift"), $ulLift=$(".lift_list"),$floors=$(".floor");
	$(window).scroll(function(){
		var scrollTop=document.body.scrollTop||document.documentElement.scrollTop;
		var offsetTop1=$("#f1").offset().top;
		if(offsetTop1<=scrollTop+innerHeight/2)
			$lift.show();
		else
			$lift.hide();
		$floors.each(function(i,floor){
			var $floor=$(floor);
			var offsetTop=$floor.offset().top;
			if(offsetTop<scrollTop+innerHeight/2){
				$ulLift.children(":eq("+i+")").addClass("hover").siblings().removeClass("hover");
			}
		})
	})
	$ulLift.children().click(function(){
	var $li=$(this);
	var i=$li.index();
	var offsetTop=$(".floor:eq("+i+")").offset().top;
	$("body").stop(true).animate({
			scrollTop:offsetTop
		},500);
	})
});
