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
	$('#add-article').on('click',function (e){
		e.preventDefault();
		$('.articles').toggleClass('articles-active');
	})
	$('body').on('click', '.selected-accounts .thumbnail' ,function (e) {
		e.preventDefault();
		$(this).remove();
	})
    $('#layout-changer a').click(function (e) {
     e.preventDefault()
      $(this).tab('show');
     })
/////////Input File////////////    
    $('input[type=file]').bootstrapFileInput();
/////////Input File////////////
   
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
 $.widget( "custom.catcomplete", $.ui.autocomplete, {
    _renderMenu: function( ul, items ) {
      var that = this,
        currentCategory = "";
      $.each( items, function( index, item ) {
        if ( item.category != currentCategory ) {
          ul.append( "<li class='ui-autocomplete-category'>" + item.category + "</li>" );
          currentCategory = item.category;
        }
        that._renderItemData( ul, item );
      });
    }
  });
  $(function() {
    var data = [
      { label: "anders", category: "" },
      { label: "andreas", category: "" },
      { label: "antal", category: "" },
      { label: "annhhx10", category: "Products" },
      { label: "annk K12", category: "Products" },
      { label: "annttop C13", category: "Products" },
      { label: "anders andersson", category: "People" },
      { label: "andreas andersson", category: "People" },
      { label: "andreas johnson", category: "People" }
    ];
 
    $( "#search" ).catcomplete({
      delay: 0,
      source: data
    });
  });

	