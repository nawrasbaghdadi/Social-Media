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
   
})

 //////Counter//////
    
    $.fn.extend( {
        limiter: function(limit, elem) {
            $(this).on("keyup focus", function() {
                setCount(this, elem);
            });
            function setCount(src, elem) {
                var chars = src.value.length;
                if (chars > limit) {
                    src.value = src.value.substr(0, limit);
                    chars = limit;
                }
                elem.html( limit - chars );
            }
            setCount($(this)[0], elem);
        }
    });
	
		var elem = $("#counter span");
        $(".counted").limiter(300, elem);

////////
	