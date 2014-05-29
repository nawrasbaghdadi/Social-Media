$(document).ready(function () {
	function active (selector) {
		$(selector).on('click',function (e){
		e.preventDefault();
		$(this).toggleClass('active');
		$(this).siblings().removeClass('active');
	})
	}

	active('.accounts > ul > li');
	active('#side-nav > ul > li > a');
	//active('.acc-groups .thumbnail');
	function toggel (selector) {
		$(this).toggleClass('active');
		$el = $(this).clone();
		if($(this).hasClass('active')){
			$('.selected-accounts ul').append($el);	
		}else{
			console.log($el);
			($el).remove();	
		}
	}
	//$('.acc-groups .thumbnail')[0].addEventListener('click' , toggel , false);
	$('.acc-groups .thumbnail').on('click',function (e){
		 $(this).toggleClass('active',10).promise().done(function() {
		 	$el = $(this).clone()[0];
		 	id=$(this).attr('id');
			if($(this).hasClass('active')){
			$('.selected-accounts ul').append($el);	
			}else{
			$('#'+id).remove();	
			}
		});
		
	})
	$('.create-post').on('click',function (e){
		e.preventDefault();
		$('.post-panel').toggleClass('panel-active');
	})
	$('body').on('click', '.selected-accounts .thumbnail' ,function (e) {
		e.preventDefault();
		$(this).remove();
	})
	
    $('#layout-changer a').click(function (e) {
     e.preventDefault()
      $(this).tab('show');
     })


	// body...
})
