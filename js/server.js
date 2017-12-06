$(function(){
	//打开选择
	$('.rRight a').click(function(){
		if($(this).attr('isOpen')=='false')
		{
			$(this).css('transform','rotate(-180deg)');
			$(this).attr('isOpen','true');
			var h = $(this).parent('.rRight').siblings('.rMiddle').height()+12;
			$(this).parent('.rRight').parent('.radioBox').stop().animate({height:h+'px'},50);
		}else{
			$(this).attr('isOpen','false');
			$(this).css('transform','rotate(0deg)');
			$(this).parent('.rRight').parent('.radioBox').stop().animate({height:'60px'},50);
		}
	});
});
