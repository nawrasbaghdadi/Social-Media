$(document).ready(function () {
	function active (selector) {
		$(selector).on('click',function (e){
		e.preventDefault();
		$(this).toggleClass('active');
		$(this).siblings().removeClass('active');
	})
	}

	active('.accounts > ul > li');
	active('.acc-groups .thumbnail a');
	$('.create-post').on('click',function (e){
		e.preventDefault();
		$('.post-panel').toggleClass('panel-active');
		$(this).toggleClass('active');
	})
	
    $('#layout-changer a').click(function (e) {
     e.preventDefault()
      $(this).tab('show')
     })


	// body...
})
