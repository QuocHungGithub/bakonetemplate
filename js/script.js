$("form").validate({
    rules: {
      // simple rule, converted to {required:true}
      name: {
          required: true,
          maxlength: 50,
          // regular expression ( biếu thức 9 quy)
          regex: /^[a-zA-ZÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\s]+$/i
      },
      email: {
        required: true,
        email: true
      },
	  messages:{
		required: true,
	  }
     
    },

  
    messages: {
      // simple rule, converted to {required:true}
      name: {
          required: ' please enter a username',
          maxlength: ' please not enter greater than 50 letters',
          regex: ' please not enter digits or'
      },
      
      email: {
        required: ' please enter email',
        email: ' please enter email format correctly. E.g: my@example'

      },
	  messages:{
	    required: 'please enter your message'
	  },

	}
});

// portffolio
//jqclick
$('.portfolio button').click(function (e) { 
	//remove class active khỏi button đang active
	$('button.active').removeClass('active')
	//add class active vào button được click
	$(this).addClass('active');

	e.preventDefault();
	const dataValue = $(this).attr('data');
	// 8 cột
	const allCols = $('.portfolio > .row > div');
	if (dataValue === 'all') {
		// show hết
		allCols.show();
		//để khồn chạy suống phía dưới
		return;
	}
	// các cột tương ứng với dataValue (buttton được click)
	const showCols = $(`.portfolio > .row > div[data=${dataValue}]`);
	// các cột còn lại
	const hideCols = allCols.not(showCols);

	showCols.show();//display: block
	hideCols.hide();//display: none
	
});
// jqscroll(cuộn)
// biến window là biến mặc định có sẵn của trình duyệt, nó chưa thông tin của cửa sổ
$(window).scroll(function() {
	// .scrollTop là top của cửa sổ trình duyệt so với top của trang web
	//console.log(($window).scrollTop());

	// console.log($('#portfolio').offset().top); là top của portfolio so cới với top của trang web
	//console.log($('#portfolio').offset().top);

	if($(window).scrollTop() >= $('#portfolio').offset().top){
		//console.log('fixed menu');
		$('.navbar').addClass('fixed-top');
		// add padding-top gỉa cho thằng cha của menu
		$('.header').addClass('dummy-pading-top');
	}
	else{
		$('.navbar').removeClass('fixed-top');
		// remove padding-top giả cho thằng cha menu
		$('.header').removeClass('dummy-pading-top');
	}
});
	