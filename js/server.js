$(function(){
	//打开选择
	$('.rRight a').click(function(){
		if($(this).attr('isOpen')=='false')
		{
			console.log(1);
			$(this).attr('isOpen','true');
			$(this).parent('.rRight').parent('.radioBox');
		}else{
			console.log(2);
			$(this).attr('isOpen','false');
			$(this).parent('.radioBox').parent('.radioBox').css('height','60px');
		}
	});
});
